document.addEventListener('DOMContentLoaded', function() {
    // Get current time
    updateTime();
    setInterval(updateTime, 1000);

    // Simulate weather
    document.getElementById('weather').innerText = 'Sunny, 25°C';

    // Voice input/output
    const voiceBtn = document.getElementById('voiceBtn');
    const voiceOutput = document.getElementById('voiceOutput');

    voiceBtn.addEventListener('click', function() {
        // Simulate voice input/output
        voiceOutput.innerText = '';
    });
});

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    timeElement.innerText = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}
// Chatbot functionality

// Chatbot functionality

document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', function() {
        chatbotContainer.classList.toggle('hidden');
        chatbotContainer.classList.toggle('visible');
    });

    sendBtn.addEventListener('click', function() {
        const userCommand = userInput.value.trim();
        if (userCommand !== '') {
            appendMessage('You', userCommand);
            userInput.value = '';
            executeCommand(userCommand);
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function executeCommand(command) {
        const commandLowerCase = command.toLowerCase();
        switch (commandLowerCase) {
            case 'open youtube':
                window.open('https://www.youtube.com', '_blank');
                appendMessage('Chatbot', 'Opening YouTube...');
                break;
            case 'open google':
                window.open('https://www.google.com', '_blank');
                appendMessage('Chatbot', 'Opening Google...');
                break;
            case 'open instagram':
                window.open('https://www.instagram.com', '_blank');
                appendMessage('Chatbot', 'Opening Instagram...');
                break;
            case 'open facebook':
                window.open('https://www.facebook.com', '_blank');
                appendMessage('Chatbot', 'Opening Facebook...');
                break;
            case 'open calendar':
                window.open('https://calendar.google.com/calendar/u/0/r?pli=1')
                appendMessage('Chatbot', 'Opening Calendar...');
                break;
            case 'open alarm':
                window.open('http://127.0.0.1:5501/alarm.html')
                appendMessage('Chatbot', 'Opening Alarm...');
                break;
            case 'open web browser':
                // Add your web browser URL or implementation here
                appendMessage('Chatbot', 'Opening Web Browser...');
                break;
            case 'open twitter':
                window.open('https://www.twitter.com', '_blank');
                appendMessage('Chatbot', 'Opening Twitter...');
                break;
            case 'open email':
                window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox')
                appendMessage('Chatbot', 'Opening Email...');
                break;
            case 'open whatsapp':
                window.open('https://web.whatsapp.com/', '_blank');
                appendMessage('Chatbot', 'Opening WhatsApp...');
                break;
            case 'open linkdin':
                window.open('https://www.linkedin.com', '_blank');
                appendMessage('Chatbot', 'Opening LinkedIn...');
                break;
            case 'open wikipedia':
                 window.open('https://www.wikipedia.org/', '_blank');
                 appendMessage('Chatbot', 'Opening Wikipedia...');
                 break;
            case 'open dictionary':
                 window.open('http://127.0.0.1:5501/Dictionary.html', '_blank'); // Example news source, replace with your preferred news source
                 appendMessage('Chatbot', 'Opening Dictionary...');
                 break;
            case 'read latest news':
                 window.open('https://www.bbc.com/news', '_blank'); // Example news source, replace with your preferred news source
                 appendMessage('Chatbot', 'Reading latest news...');
                 break;
            case 'play old song on youtube':
                 window.open('https://www.youtube.com/watch?v=https://0OGguI0uDfE', '_blank'); // Replace VIDEO_ID with the ID of the old song on YouTube
                 appendMessage('Chatbot', 'Playing old song on YouTube...');
                 break;
            case 'tell some jokes':
                 fetchJokes();
                 break;
            default:
                appendMessage('Chatbot', 'Sorry, I don\'t understand that command.');
                break;
        }
    }
    function fetchJokes() {
        // You can fetch jokes from an API or use predefined jokes here
        const jokes = [
            'Why did the scarecrow win an award? Because he was outstanding in his field!',
            'Why don’t skeletons fight each other? They don’t have the guts!',
            'What do you get when you cross a snowman with a vampire? Frostbite!',
            // Add more jokes as needed
        ];
        const randomIndex = Math.floor(Math.random() * jokes.length);
        appendMessage('Chatbot', jokes[randomIndex]);
    }
    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            if (userMessage.toLowerCase() === 'back chat') {
                appendBackMessage('You', userMessage);
                executePreviousCommand();
            } else {
                appendMessage('You', userMessage);
                executeCommand(userMessage);
                previousCommand = userMessage; // Update previous command
            }
            userInput.value = '';
        }
    }
    
    function appendBackMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('back-message'); // Add a class for back chat messages
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.classList.toggle("show");
    }
    
});
