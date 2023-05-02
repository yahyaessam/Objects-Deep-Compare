// Function to generate random number between min and max

function GenRandomIntBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}