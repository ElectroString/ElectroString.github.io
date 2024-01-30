const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/CSSLogo.png") {
    myImage.setAttribute("src", "images/htmlLogo.png");
  /*} else if(mySrc === "images/CSSLogo.png")  {
    myImage.setAttribute("src", "images/JavascriptLogo.png");*/
  }else{
    myImage.setAttribute("src", "images/CSSLogo.png")
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
/*
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}*/

/*
myButton.onclick = () => {
  setUserName();
};*/