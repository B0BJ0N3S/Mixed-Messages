const generateButton = document.getElementById('generate');
const message = document.getElementById('message');

generateButton.addEventListener('click', () => {
    message.innerText = generateMessage();
})