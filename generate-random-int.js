// Function to generate random number between min and max

function genRandomIntBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}