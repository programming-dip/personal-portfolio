if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');

}


// Typewriter effect
const sentences = [
    "An Ordinary Individual",
    "Front End Web Developer",
    "Passionate Problem Solver"
];

let index = 0;
let charIndex = 0;
const element = document.getElementById('typewriter');

const typeWriter = () => {
    if (index < sentences.length) {
        if (charIndex < sentences[index].length) {
            element.innerHTML += sentences[index].charAt(charIndex);
            charIndex++;
            // Adjust the delay time here
            setTimeout(typeWriter, 100);
        } else {
            // After 1 second vanish the sentence
            setTimeout(() => {
                // Fade out the sentence
                element.style.opacity = 0;
                setTimeout(() => {
                    // Clear the sentence
                    element.innerHTML = '';
                    // Fade back in
                    element.style.opacity = 1;
                    // Reset charIndex for next sentence
                    charIndex = 0;
                    // Move to next sentence
                    index++;
                    // Start typing next sentence
                    typeWriter();
                    // Wait for fade-out to complete
                }, 500);
                // Delay before fading out
            }, 1000);
        }
    }

    if (index == sentences.length) {
        index = 0;
        charIndex = 0;
        typeWriter();

    }

}

window.onload = typeWriter();
