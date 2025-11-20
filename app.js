const clicker = document.getElementById('hi-button');
const count = document.getElementById('count');
let counter = 0;

clicker.addEventListener('click', () => {
    counter += 1;
    count.textContent = "count: " + counter; 
});