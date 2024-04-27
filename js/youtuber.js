function startCounter(targetNumber, duration) {
    let start = 1;
    const increment = (targetNumber - start) / (duration * 1000); // Calculate the precise increment

    const counter = document.getElementById('counter');

    function updateCounter() {
        start += increment;
        counter.innerText = Math.floor(start);

        if (start >= targetNumber) {
            clearInterval(interval);
            counter.innerText = targetNumber;
        }
    }

    const interval = setInterval(updateCounter, 1); // Update counter every millisecond for smoother animation
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Start the counter when the element comes into view
function startCounterWhenVisible() {
    const counter = document.getElementById('counter');
    if (isInViewport(counter)) {
        startCounter(4000, 0.5); // Replace 4000 with your desired target number and 1 with the duration in seconds
        window.removeEventListener('scroll', startCounterWhenVisible); // Remove the event listener once the counter starts
    }
}

// Add scroll event listener to start counter when element comes into view
window.addEventListener('scroll', startCounterWhenVisible);






const videoContainer = document.getElementById('videoContainer');
const scrollRightButton = document.getElementById('scrollRightButton');

// Function to scroll the video container to the right
function scrollRight() {
    videoContainer.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
}

// Event listener for the right arrow button
scrollRightButton.addEventListener('click', scrollRight);

