const redBtn = document.querySelector('#red');
const blueBtn = document.querySelector('#blue');
const greenBtn = document.querySelector('#green');

//button functionality for red button and changed properties
redBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#480000');
    document.documentElement.style.setProperty('--second-color', '#ce3333');
});

//button functionality for blue button
blueBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#ababef');
    document.documentElement.style.setProperty('--second-color', '#000099');
});

//button functionality for green button
greenBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#004a09');
    document.documentElement.style.setProperty('--second-color', '#a6f6ae');
});


