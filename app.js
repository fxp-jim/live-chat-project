// --- DOM ELEMENTS ---
// Get references to the essential HTML elements we'll be interacting with.
const chatForm = document.querySelector('#chat-input-form');
const messageInput = document.querySelector('#message-input');
const messagesArea = document.querySelector('#chat-messages');
const n8nWebhookUrl = 'https://n8n.jimpaul.net/webhook/live-chat-project'; // <-- MAKE SURE THIS IS YOUR URL

// --- SESSION ID ---
// Get a persistent session ID for the current browser tab session.
const sessionId = getSessionId();

// --- EVENT LISTENERS ---
// Listen for the form submission event.
chatForm.addEventListener('submit', handleFormSubmission);

// --- FUNCTIONS ---

/**
 * Retrieves the session ID from sessionStorage or creates a new one.
 * @returns {string} The unique session ID.
 */
function getSessionId() {
    // Try to get the session ID from sessionStorage.
    let id = sessionStorage.getItem('chatSessionId');

    // If no ID exists, create a new one and save it.
    if (!id) {
        id = crypto.randomUUID();
        sessionStorage.setItem('chatSessionId', id);
    }
    return id;
}

/**
 * Main handler for when the user submits the form.
 * @param {Event} event - The form submission event.
 */
async function handleFormSubmission(event) {
    // Prevent the default browser behavior of reloading the page on form submission.
    event.preventDefault();
    const userMessage = messageInput.value.trim();

    // Proceed only if the user has typed something.
    if (userMessage) {
        // Display the user's message immediately.
        displayMessage(userMessage, 'user-message');
        messageInput.value = '';
        showTypingIndicator();

        try {
            // Get the bot's reply from our n8n backend.
            const botReply = await getBotReplyFromN8n(userMessage);
            displayMessage(botReply, 'bot-message');
        } catch (error) {
            // If anything goes wrong, log the error and show a user-friendly message.
            console.error('Error getting bot reply:', error);
            displayMessage('Sorry, I seem to be having trouble connecting. Please try again later.', 'bot-message');
        } finally {
            // This will run whether the try succeeded or failed, ensuring the indicator is always removed.
            hideTypingIndicator();
        }
    }
}

/**
 * Creates and appends a new message bubble to the chat window.
 * @param {string} message - The text content of the message.
 * @param {string} className - The CSS class to apply to the bubble ('user-message' or 'bot-message').
 */
function displayMessage(message, className) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', className);
    messageBubble.innerHTML = `<p>${message}</p>`;
    messagesArea.appendChild(messageBubble);
    // Auto-scroll to the bottom.
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

/**
 * Sends the user's message to the n8n webhook and returns the bot's reply.
 * @param {string} userMessage - The message typed by the user.
 * @returns {string} The bot's reply from the n8n workflow.
 */
async function getBotReplyFromN8n(userMessage) {
    const payload = {
        sessionId: sessionId,
        action: 'sendMessage',
        chatInput: userMessage
    };
    
    const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        // If the server responds with an error status, throw an error to be caught by the catch block.
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // This is my first console.log I did myself to fix parsing response issue, yey!
    console.log(data);
    return data.output;
}

// --- TYPING INDICATOR FUNCTIONS ---

/**
 * Creates and displays the "Bot is typing..." indicator.
 */
function showTypingIndicator() {
    const typingBubble = document.createElement('div');
    typingBubble.id = 'typing-indicator';
    typingBubble.classList.add('message-bubble', 'bot-message');
    typingBubble.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    messagesArea.appendChild(typingBubble);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

/**
 * Finds and removes the typing indicator from the chat.
 */
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}