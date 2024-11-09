(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const text = [" Muhammad Muttahar Sheikh.", "A Web Developer."];
let currentText = 0;
let charIndex = 0;
const typingSpeed = 100;  // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const delayBetweenTexts = 1500; // Delay between texts
const typewriterElement = document.getElementById('typewriter');

function type() {
    if (charIndex < text[currentText].length) {
        typewriterElement.innerHTML = text[currentText].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typewriterElement.innerHTML = text[currentText].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        currentText = (currentText + 1) % text.length; // Move to next text
        setTimeout(type, typingSpeed);
    }
}

// Start the animation
type();
