// Select the key elements from our HTML
const chatForm = document.querySelector('#chat-input-form');
const messageInput = document.querySelector('#message-input');
const messagesArea = document.querySelector('#chat-messages');
const n8nWebhookUrl = 'https://n8n.jimpaul.net/webhook/4da14e7e-5bc8-4aa6-b0e1-6b83e5d1dabe'; // <-- IMPORTANT

// Add an event listener to the form for the 'submit' event
chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        displayMessage(userMessage, 'user-message');
        messageInput.value = '';

        // Send the user's message to the n8n workflow
        sendMessageToN8n(userMessage);
    }
});

// A function to create and display a new message bubble
function displayMessage(message, className) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', className);
    messageBubble.innerHTML = `<p>${message}</p>`;
    messagesArea.appendChild(messageBubble);
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

// A new async function to send a message to n8n and get a response
async function sendMessageToN8n(userMessage) {
    try {
        const response = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const botReply = data.reply;

        // Display the bot's reply from n8n
        displayMessage(botReply, 'bot-message');

    } catch (error) {
        console.error('Error sending message to n8n:', error);
        // Display an error message to the user in the chat
        displayMessage('Sorry, I seem to be having trouble connecting. Please try again later.', 'bot-message');
    }
}