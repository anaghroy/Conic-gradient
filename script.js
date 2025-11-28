let h1 = document.querySelector("h1");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const text = h1.innerText;
let iteration = 0;

function randomText() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");
  h1.innerText = str;

  iteration += 0.2;
}
setInterval(randomText, 30);
// clearInterval(time);
