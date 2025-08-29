// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const img = document.querySelector("img");
img.addEventListener("click", () => {
  if (img.src.endsWith("pic5.jpg")) img.src = "images/pic4.jpg";
  else img.src = "images/pic5.jpg";
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    return;
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = setUserName;
