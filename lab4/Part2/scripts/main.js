const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');



const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
/* Declaring the alternative text for each image file */
const altText = {
    "pic1.jpg":"Alternate text for pic 1",
    "pic2.jpg":"Alternate text for pic 2",
    "pic3.jpg":"Alternate text for pic 3",
    "pic4.jpg":"Alternate text for pic 4",
    "pic5.jpg":"Alternate text for pic 5"
};
/* Looping through images */

imgNames.forEach(imgName=>{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/"+imgName);
    newImage.setAttribute('alt', altText[imgName]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click",function(){
        displayedImage.setAttribute("src",this.getAttribute("src"));
        displayedImage.setAttribute("alt",this.getAttribute("alt"));
    })
})
/* Wiring up the Darken/Lighten button */

btn.addEventListener("click",function(){
    className = btn.getAttribute("class");
    if (className == "dark"){
        btn.setAttribute("class","light")
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }else{
        btn.setAttribute("class","dark")
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
})
