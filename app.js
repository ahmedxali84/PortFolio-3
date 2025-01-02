// Function to handle profile picture hover popup
const profilePic = document.querySelector('.profile-pic');
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup');
popupContainer.innerHTML = `
    <span class="close-btn">&times;</span>
    HELLO! I AM AHMED ALI HOW MAY I HELP YOU???
`;
document.body.appendChild(popupContainer);

profilePic.addEventListener('mouseover', () => {
    popupContainer.style.display = 'block';
});

profilePic.addEventListener('mouseout', () => {
    popupContainer.style.display = 'none';
});

// Close button functionality
const closeBtn = popupContainer.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

// Styling for the popup
const popupStyle = document.createElement('style');
popupStyle.textContent = `
    .popup {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px;
        background: rgba(0, 0, 0, 0.8);
        color: #f9d835;
        font-size: 1.2rem;
        border-radius: 10px;
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .popup.show {
        display: block;
        opacity: 1;
    }
    .popup .close-btn {
        position: absolute;
        top: 5px;
        right: 10px;
        color: #f9d835;
        font-size: 1.5rem;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }
    .popup .close-btn:hover {
        color: #ff5722;
    }
`;
document.head.appendChild(popupStyle);

// Function for the card popup asking user's name and greeting them
window.addEventListener('load', () => {
    const greetingCard = document.createElement('div');
    greetingCard.classList.add('greeting-card');
    greetingCard.innerHTML = `
        <h3>Welcome to My Portfolio!</h3>
        <p>Please enter your name below:</p>
        <input type="text" id="user-name" placeholder="Enter your name">
        <button id="submit-name">Submit</button>
        <span class="close-btn">&times;</span>
    `;
    document.body.appendChild(greetingCard);

    const userNameInput = document.getElementById('user-name');
    const submitButton = document.getElementById('submit-name');
    const closeCardBtn = greetingCard.querySelector('.close-btn');

    // Handle the submit button click
    submitButton.addEventListener('click', submitGreeting);

    // Handle the Enter key for submitting the form
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitGreeting();
        }
    });

    // Close the greeting card when the close button is clicked
    closeCardBtn.addEventListener('click', () => {
        greetingCard.style.display = 'none';
    });

    function submitGreeting() {
        const userName = userNameInput.value.trim();
        if (userName) {
            greetingCard.innerHTML = `<h3>Hello, ${userName}! Welcome to my portfolio!</h3>`;
        } else {
            greetingCard.innerHTML = `<h3>Please enter a valid name.</h3>`;
        }

        // Add a close button to the updated greeting message
        const newCloseBtn = document.createElement('span');
        newCloseBtn.classList.add('close-btn');
        newCloseBtn.innerHTML = '&times;';
        greetingCard.appendChild(newCloseBtn);

        // Add the close functionality to the new close button
        newCloseBtn.addEventListener('click', () => {
            greetingCard.style.display = 'none';
        });
    }

    // Styling for the greeting card
    const greetingCardStyle = document.createElement('style');
    greetingCardStyle.textContent = `
        .greeting-card {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #1a1a1a;
            color: #f9d835;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
            z-index: 100;
            display: block;
            text-align: center;
        }
        .greeting-card input {
            margin: 10px 0;
            padding: 10px;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #f9d835;
            background-color: #333;
            color: #f9d835;
        }
        .greeting-card button {
            padding: 10px 20px;
            background-color: #f9d835;
            color: #121212;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1.2rem;
            transition: background 0.3s;
        }
        .greeting-card button:hover {
            background-color: #ff5722;
        }
        .greeting-card .close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            color: #f9d835;
            font-size: 1.5rem;
            cursor: pointer;
            background: none;
            border: none;
            outline: none;
        }
        .greeting-card .close-btn:hover {
            color: #ff5722;
        }
    `;
    document.head.appendChild(greetingCardStyle);
});
