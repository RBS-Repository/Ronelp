// Function to check if device is mobile
const isMobile = () => window.innerWidth <= 768;

// Flowise chatbot configuration
const flowiseConfig = {
    chatflowid: "7a561fac-7757-44cf-8c1f-225405af2ca6",
    apiHost: "https://ronelp-ronelp-bot.hf.space",
    theme: {
        button: {
            backgroundColor: "#0095F6",
            right: isMobile() ? 15 : 25,
            bottom: isMobile() ? 15 : 25,
            size: "large",
            iconColor: "white",
            customIconSrc: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
            style: {
                width: isMobile() ? '65px' : '70px',
                height: isMobile() ? '65px' : '70px',
            }
        },
        chatWindow: {
            welcomeMessage: "👋 Hi! I'm  Mr. Pantonial Assistant. How can I help you?",
            backgroundColor: "#FFFFFF",
            height: isMobile() ? '80vh' : 560,
            width: isMobile() ? '94vw' : 400,
            fontSize: isMobile() ? 16 : 16,
            poweredByTextColor: "transparent",
            poweredByText: "",
            botMessage: {
                backgroundColor: "#F5F5F5",
                textColor: "#262626",
                fontSize: isMobile() ? "15px" : "16px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                borderRadius: "20px 20px 20px 5px",
                padding: isMobile() ? "12px 16px" : "14px 18px",
                marginBottom: "10px",
                marginLeft: "40px",
                position: "relative",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            },
            userMessage: {
                backgroundColor: "#0095F6",
                textColor: "#FFFFFF",
                fontSize: isMobile() ? "15px" : "16px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                borderRadius: "20px 20px 5px 20px",
                padding: isMobile() ? "12px 16px" : "14px 18px",
                marginBottom: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            },
            textInput: {
                placeholder: "Type your message...",
                backgroundColor: "#FFFFFF",
                textColor: "#262626",
                fontSize: isMobile() ? "15px" : "16px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                borderColor: "#DBDBDB",
                borderRadius: "21px",
                boxShadow: "none",
                padding: "12px 16px",
                margin: "10px",
                position: "fixed",
                bottom: "0",
                maxHeight: "100px",
                overflowY: "auto",
                zIndex: "9999",
                focusKeepOpen: true,
                preventClose: true,
                style: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    boxSizing: 'border-box',
                    zIndex: 1000000,
                    background: 'white',
                    padding: '10px',
                    margin: 0,
                }
            }
        },
        chatflowConfig: {
            window: {
                title: "Chat Assistant",
                titleColor: "#262626",
                titleBackgroundColor: "#FFFFFF",
                backgroundColor: "#FFFFFF",
                height: isMobile() ? '80vh' : 560,
                width: isMobile() ? '94vw' : 400,
                borderRadius: isMobile() ? "12px 12px 0 0" : "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                paddingBottom: "80px",
            },
            header: {
                backgroundColor: "#FFFFFF",
                borderBottom: "1px solid #DBDBDB",
                padding: isMobile() ? "16px" : "18px",
                title: "Chat Assistant",
                titleColor: "#262626",
                fontSize: isMobile() ? "18px" : "20px",
                fontWeight: "600",
            }
        },
        metadata: {
            headerImage: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
            botName: "Chat Assistant",
            botDescription: "Typically replies instantly",
            backgroundColor: "#FFFFFF",
            textColor: "#262626",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        },
        customCSS: {
            chatInput: `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: white;
                padding: 10px 15px;
                border-top: 1px solid #DBDBDB;
                border-radius: 0 0 12px 12px;
                z-index: 1000;
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
            `,
            chatContainer: `
                display: flex;
                flex-direction: column;
                height: 100% !important;
                max-height: 100% !important;
                position: fixed !important;
                overflow: hidden;
                -webkit-overflow-scrolling: touch;
                bottom: 0;
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
            `,
            messagesContainer: `
                flex: 1;
                overflow-y: auto;
                padding: 20px;
                padding-bottom: 80px;
                scroll-behavior: smooth;
            `,
            inputWrapper: `
                background: white;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 10px;
                border-top: 1px solid #DBDBDB;
                border-radius: 0 0 12px 12px;
            `,
            botMessageContainer: `
                position: relative;
            `,
            botAvatar: `
                width: 32px;
                height: 32px;
                border-radius: 50%;
                position: absolute;
                left: 0;
                bottom: 0;
                background-image: url('https://cdn-icons-png.flaticon.com/512/4712/4712027.png');
                background-size: cover;
                background-position: center;
                border: 2px solid #FFFFFF;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            `,
            '.message:hover': `
                transform: translateY(-1px);
                transition: transform 0.2s ease;
            `,
            messageStatus: `
                font-size: 12px;
                color: #8E8E8E;
                margin-top: 4px;
                text-align: right;
            `,
            '@keyframes fadeInOut': `
                0% { opacity: 0; transform: translateX(10px); }
                50% { opacity: 1; transform: translateX(0); }
                100% { opacity: 0; transform: translateX(10px); }
            `,
            buttonTooltip: `
                position: absolute;
                content: "Ask me!";
                right: 80px;
                bottom: 20px;
                background-color: #0095F6;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                animation: fadeInOut 2s infinite;
                white-space: nowrap;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                font-weight: 500;
                pointer-events: none;
                z-index: 1001;
            `,
            '.chatbot-container': `
                position: fixed !important;
                bottom: 0 !important;
                height: 100% !important;
                max-height: 100vh !important;
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            `,
            'body.chat-open': `
                position: fixed;
                width: 100%;
                height: 100%;
            `,
            '.chat-input-wrapper': `
                position: sticky !important;
                bottom: 0 !important;
                background: white;
                padding: 10px;
                z-index: 9999;
            `,
            '.messages-container': `
                flex: 1;
                overflow-y: auto;
                padding-bottom: 60px;
                -webkit-overflow-scrolling: touch;
            `
        }
    }
};

// Add this function at the top level
function preventChatClose() {
    const chatContainer = document.querySelector('.chatbot-container');
    const chatInput = document.querySelector('.chat-input');
    const messagesContainer = document.querySelector('.messages-container');
    const header = chatContainer?.querySelector('.chat-header');
    
    if (chatContainer && chatInput) {
        // Handle input focus
        chatInput.addEventListener('focus', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Add class for keyboard open state
            document.body.classList.add('keyboard-open');
            chatContainer.classList.add('keyboard-open');
            
            // Adjust container for keyboard
            setTimeout(() => {
                const keyboardHeight = window.innerHeight - window.visualViewport.height;
                const headerHeight = header?.offsetHeight || 0;
                
                // Adjust container height to show both header and input
                chatContainer.style.height = `${window.visualViewport.height}px`;
                
                // Position input above keyboard
                chatInput.style.position = 'fixed';
                chatInput.style.bottom = `${keyboardHeight}px`;
                
                // Adjust messages container
                if (messagesContainer) {
                    messagesContainer.style.height = `calc(100% - ${headerHeight + 60}px)`;
                    messagesContainer.style.paddingBottom = `${keyboardHeight + 60}px`;
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }

                // Keep header visible
                if (header) {
                    header.style.position = 'sticky';
                    header.style.top = '0';
                    header.style.zIndex = '100001';
                }
            }, 100);
        });

        // Handle input blur
        chatInput.addEventListener('blur', () => {
            document.body.classList.remove('keyboard-open');
            chatContainer.classList.remove('keyboard-open');
            chatContainer.style.height = '100vh';
            chatInput.style.position = 'sticky';
            chatInput.style.bottom = '0';
            
            if (messagesContainer) {
                messagesContainer.style.height = '';
                messagesContainer.style.paddingBottom = '60px';
            }

            if (header) {
                header.style.position = '';
                header.style.top = '';
            }
        });
    }
}

// Initialize Flowise with configuration
window.addEventListener('DOMContentLoaded', () => {
    if (window.Chatbot) {
        window.Chatbot.init(flowiseConfig);

        // Add the tooltip after a short delay
        setTimeout(() => {
            // Add styles to head
            const styleSheet = document.createElement("style");
            styleSheet.textContent = `
                .ask-me-tooltip {
                    position: fixed;
                    right: ${isMobile() ? '85px' : '95px'};
                    bottom: ${isMobile() ? '25px' : '35px'};
                    background-color: #0095F6;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: ${isMobile() ? '12px' : '14px'};
                    font-weight: 500;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    z-index: 9999;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    opacity: 1;
                    transition: opacity 0.3s ease;
                }

                .ask-me-tooltip.fade-out {
                    opacity: 0;
                }
            `;
            document.head.appendChild(styleSheet);

            // Create tooltip element
            const tooltip = document.createElement("div");
            tooltip.className = "ask-me-tooltip";
            document.body.appendChild(tooltip);

            // Array of messages to rotate through
            const messages = [
                "Ask meeee!",
                "Need specific info?",
                "Click here!",
                "Let's chat!"
            ];

            let currentIndex = 0;

            // Function to update tooltip text with fade effect
            function updateTooltip() {
                tooltip.classList.add('fade-out');
                
                setTimeout(() => {
                    tooltip.textContent = messages[currentIndex];
                    tooltip.classList.remove('fade-out');
                    currentIndex = (currentIndex + 1) % messages.length;
                }, 300); // Shorter fade transition
            }

            // Initial text
            tooltip.textContent = messages[0];

            // Start rotation after initial display
            setTimeout(() => {
                // Rotate messages every 4 seconds
                const messageInterval = setInterval(updateTooltip, 4000);

                // Hide tooltip when chat button is clicked
                const chatButton = document.querySelector('.chatbot-toggle');
                if (chatButton) {
                    chatButton.addEventListener('click', () => {
                        tooltip.style.display = 'none';
                        clearInterval(messageInterval);
                    });
                }
            }, 1000); // Wait 2 seconds before starting rotation

        }, 1000); // Initial delay to ensure chat button is loaded

        // Handle chat input focus
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('chat-input')) {
                e.preventDefault();
                e.stopPropagation();
                
                // Prevent closing chat when input is focused
                const chatContainer = document.querySelector('.chatbot-container');
                if (chatContainer) {
                    chatContainer.style.display = 'flex';
                    // Scroll to input after a short delay
                    setTimeout(() => {
                        e.target.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        }, true);

        // Prevent iOS keyboard issues
        if (isMobile()) {
            const viewport = document.querySelector('meta[name=viewport]');
            if (viewport) {
                viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1';
            }
        }

        if (isMobile()) {
            // Add viewport meta tag for better mobile handling
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
            document.getElementsByTagName('head')[0].appendChild(meta);

            // Update chatWindow configuration for mobile
            flowiseConfig.theme.chatWindow = {
                ...flowiseConfig.theme.chatWindow,
                height: '100vh',
                width: '100%',
                position: 'fixed',
                bottom: 0,
                right: 0,
                borderRadius: '0',
                textInput: {
                    ...flowiseConfig.theme.chatWindow.textInput,
                    position: 'sticky',
                    bottom: 0,
                    zIndex: 10000,
                    style: {
                        position: 'sticky',
                        bottom: 0,
                        width: '100%',
                        boxSizing: 'border-box'
                    }
                }
            };

            // Add mobile-specific event handlers
            document.addEventListener('DOMContentLoaded', () => {
                const originalHeight = window.innerHeight;
                
                window.addEventListener('resize', () => {
                    const chatContainer = document.querySelector('.chatbot-container');
                    if (!chatContainer) return;

                    if (window.innerHeight < originalHeight) {
                        // Keyboard is shown
                        chatContainer.style.height = '100vh';
                        chatContainer.style.position = 'fixed';
                        chatContainer.style.top = '0';
                        chatContainer.style.bottom = '0';
                        chatContainer.style.left = '0';
                        chatContainer.style.right = '0';
                        chatContainer.style.zIndex = '99999';
                        
                        // Prevent body scroll
                        document.body.style.position = 'fixed';
                        document.body.style.width = '100%';
                    } else {
                        // Keyboard is hidden
                        chatContainer.style.height = '';
                        document.body.style.position = '';
                        document.body.style.width = '';
                    }
                });

                // Handle input focus
                document.addEventListener('focus', (e) => {
                    if (e.target.classList.contains('chat-input')) {
                        setTimeout(() => {
                            e.target.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    }
                }, true);

                // Prevent closing on touch events
                const chatContainer = document.querySelector('.chatbot-container');
                if (chatContainer) {
                    chatContainer.addEventListener('touchmove', (e) => {
                        e.stopPropagation();
                    }, { passive: true });
                }
            });

            // Add these styles to prevent unwanted scrolling
            const style = document.createElement('style');
            style.textContent = `
                .chatbot-container {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    width: 100% !important;
                    height: 100vh !important;
                    max-height: none !important;
                    border-radius: 0 !important;
                    z-index: 99999 !important;
                    transform: none !important;
                }
                
                .chatbot-container.active {
                    display: flex !important;
                }

                .chat-input {
                    position: sticky !important;
                    bottom: 0 !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                    z-index: 100000 !important;
                }
            `;
            document.head.appendChild(style);

            // Add these styles to the existing style element
            const additionalStyles = `
                .chatbot-container {
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    width: 100% !important;
                    height: 100vh !important;
                    max-height: none !important;
                    border-radius: 0 !important;
                    z-index: 999999 !important;
                    transform: none !important;
                    display: flex !important;
                    flex-direction: column !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    transition: none !important;
                }
                
                .chat-input {
                    position: fixed !important;
                    bottom: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                    z-index: 1000000 !important;
                    background: white !important;
                    padding: 10px !important;
                    margin: 0 !important;
                }
                
                .messages-container {
                    flex: 1 !important;
                    overflow-y: auto !important;
                    padding-bottom: 60px !important;
                    -webkit-overflow-scrolling: touch !important;
                }
            `;

            // Add the styles to the document
            const styleElement = document.createElement('style');
            styleElement.textContent = additionalStyles;
            document.head.appendChild(styleElement);

            // Call preventChatClose after a short delay to ensure elements are loaded
            setTimeout(preventChatClose, 1000);

            // Add event listener for visibility changes
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) {
                    // Reapply the prevention when page becomes visible
                    preventChatClose();
                }
            });
        }
    }
});

// Update the resize handler
window.addEventListener('resize', () => {
    if (window.Chatbot) {
        const chatContainer = document.querySelector('.chatbot-container');
        if (!chatContainer) return;

        const isActive = chatContainer.classList.contains('active');
        
        // Preserve chat state
        const messages = chatContainer.querySelector('.messages-container')?.innerHTML || '';
        const inputValue = chatContainer.querySelector('.chat-input')?.value || '';

        // Update container styles based on screen size
        if (isMobile()) {
            chatContainer.style.width = '100%';
            chatContainer.style.height = '100vh';
            chatContainer.style.maxHeight = '100vh';
            chatContainer.style.position = 'fixed';
            chatContainer.style.top = '0';
            chatContainer.style.left = '0';
            chatContainer.style.right = '0';
            chatContainer.style.bottom = '0';
            chatContainer.style.margin = '0';
            chatContainer.style.borderRadius = '0';
        } else {
            chatContainer.style.width = '400px';
            chatContainer.style.height = '560px';
            chatContainer.style.position = 'fixed';
            chatContainer.style.right = '25px';
            chatContainer.style.bottom = '25px';
            chatContainer.style.borderRadius = '12px';
        }

        // Keep chat open if it was open
        if (isActive) {
            chatContainer.style.display = 'flex';
            chatContainer.classList.add('active');
            
            // Restore messages
            const messagesContainer = chatContainer.querySelector('.messages-container');
            if (messagesContainer && messages) {
                messagesContainer.innerHTML = messages;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }

            // Restore input value
            const input = chatContainer.querySelector('.chat-input');
            if (input) {
                input.value = inputValue;
            }
        }

        // Add these styles to ensure proper display
        const style = document.createElement('style');
        style.textContent = `
            .chatbot-container.active {
                display: flex !important;
                flex-direction: column !important;
                visibility: visible !important;
                opacity: 1 !important;
                z-index: 999999 !important;
            }

            .chat-input {
                position: sticky !important;
                bottom: 0 !important;
                width: 100% !important;
                box-sizing: border-box !important;
                background: white !important;
                padding: 10px !important;
                margin: 0 !important;
                z-index: 1000000 !important;
            }

            .messages-container {
                flex: 1 !important;
                overflow-y: auto !important;
                padding-bottom: 60px !important;
                -webkit-overflow-scrolling: touch !important;
            }
        `;
        document.head.appendChild(style);

        // Reapply mobile fixes if needed
        if (isMobile()) {
            preventChatClose();
        }
    }
});

// Add this helper function to maintain chat state
function preserveChatState(action) {
    const chatContainer = document.querySelector('.chatbot-container');
    if (!chatContainer) return;

    const isActive = chatContainer.classList.contains('active');
    const messages = document.querySelector('.messages-container')?.innerHTML || '';

    action();

    if (isActive) {
        setTimeout(() => {
            const newContainer = document.querySelector('.chatbot-container');
            if (newContainer) {
                newContainer.classList.add('active');
                newContainer.style.display = 'flex';
                const messagesContainer = newContainer.querySelector('.messages-container');
                if (messagesContainer && messages) {
                    messagesContainer.innerHTML = messages;
                }
            }
        }, 100);
    }
}

// Add these styles to your existing mobile styles
const additionalMobileStyles = `
    .chatbot-container.keyboard-open {
        height: 100% !important;
        position: fixed !important;
        top: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        transition: height 0.3s !important;
    }

    .keyboard-open .chat-header {
        background: white !important;
        border-bottom: 1px solid #DBDBDB !important;
        padding: 10px !important;
        transform: translateZ(0) !important;
    }

    .keyboard-open .messages-container {
        flex: 1 !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        transform: translateZ(0) !important;
    }

    .keyboard-open .chat-input {
        background: white !important;
        border-top: 1px solid #DBDBDB !important;
        padding: 10px 15px !important;
        margin: 0 !important;
        transition: bottom 0.3s !important;
        transform: translateZ(0) !important;
    }
`;

// Add the styles to your existing style injection
if (isMobile()) {
    const styleElement = document.createElement('style');
    styleElement.textContent = additionalMobileStyles;
    document.head.appendChild(styleElement);
}