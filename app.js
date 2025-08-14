// 1. Select the key elements from our HTML
const chatForm = document.querySelector('#chat-input-form');
const messageInput = document.querySelector('#message-input');
const messagesArea = document.querySelector('#chat-messages');

// 2. Add an event listener to the form for the 'submit' event
chatForm.addEventListener('submit', function(event) {
    // 3. Prevent the default form submission behavior (which reloads the page)
    event.preventDefault();

    // 4. Get the user's message from the input field, and trim whitespace
    const userMessage = messageInput.value.trim();

    // 5. If the message isn't empty, proceed
    if (userMessage) {
        // 6. Display the user's message in the chat window
        displayMessage(userMessage, 'user-message');
        
        // 7. Clear the input field for the next message
        messageInput.value = '';

        // Get the bot's response
        const botResponse = getBotResponse(userMessage);

        // Simulate delay, then display the bot's message
        setTimeout(function() {
            displayMessage(botResponse, 'bot-message');
        }, 1000); // 1000 milliseconds = 1 second delay
    }
});

// 8. A function to create and display a new message bubble
function displayMessage(message, className) {
    // Create a new 'div' element for the message bubble
    const messageBubble = document.createElement('div');
    
    // Add the necessary CSS classes to style it correctly
    messageBubble.classList.add('message-bubble', className);
    
    // Set the inner content of the bubble
    messageBubble.innerHTML = `<p>${message}</p>`;
    
    // Add the new message bubble to the messages area
    messagesArea.appendChild(messageBubble);
    
    // Auto-scroll to the bottom to show the latest message
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi')) {
        return 'Hi there! How can I help you today?';
    } else if (message.includes('order')) {
        return 'I can certainly help with that. Please provide your order number.';
    } else if (message.includes('help')) {
        return 'I am a simple bot. I can help with order inquiries. How can I assist?';
    } else {
        return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
}