let cursor = document.getElementById("cursor");
let body = document.body;

body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.clientX + "px";
  cursor.style.top = dets.clientY + "px";
});

let h1 = document.querySelector("h1");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const originalText = h1.innerText;
let iteration = 0;
let intervalId = null;

h1.addEventListener("mouseover", () => {
  // Reset on every hover
  iteration = 0;

  // Clear old intervals if any
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    const str = originalText
      .split("")
      .map((char, index) => {
        if (index < iteration) return originalText[index];
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    h1.innerText = str;

    iteration += 0.1;

    // When full text is restored, stop animation
    if (iteration >= originalText.length) {
      clearInterval(intervalId);
      h1.innerText = originalText;
    }
  }, 30);
});

h1.addEventListener("mouseleave", () => {
  // Stop animation instantly
  clearInterval(intervalId);

  // Restore original text
  h1.innerText = originalText;
});
