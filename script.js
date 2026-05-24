// ===============================
// MENU ACTIVE EFFECT
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===============================
// DARK MODE
// ===============================

const modeBtn = document.getElementById("modeBtn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    if(modeBtn){
        modeBtn.innerText = "Light Mode";
    }
}

if(modeBtn){

    modeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            modeBtn.innerText = "Light Mode";

            localStorage.setItem("theme", "dark");

        }
        else{

            modeBtn.innerText = "Dark Mode";

            localStorage.setItem("theme", "light");

        }

    });

}


// ===============================
// AUTO CHANGING BACKGROUND
// ===============================

const backgrounds = [
   "images/bg1.jpg",
   "images/bg2.webp",
   "images/bg3.avif"
];

let bgIndex = 0;

function changeBackground(){

    const mainBox = document.querySelector(".main_box");

    if(mainBox){

        mainBox.style.backgroundImage =
        `url(${backgrounds[bgIndex]})`;

        bgIndex++;

        if(bgIndex >= backgrounds.length){
            bgIndex = 0;
        }

    }

}

setInterval(changeBackground, 3000);


// ===============================
// IMAGE SLIDER
// ===============================

const images = [
   "images/bg1.jpg",
   "images/bg2.webp",
   "images/bg3.avif"
];

let current = 0;

function showImage(){

    const slideImage = document.getElementById("slideImage");

    if(slideImage){

        slideImage.src = images[current];

    }

}

function nextImage(){

    current++;

    if(current >= images.length){
        current = 0;
    }

    showImage();

}

function prevImage(){

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    showImage();

}


// ===============================
// AUTO SLIDER
// ===============================

setInterval(() => {

    const slideImage = document.getElementById("slideImage");

    if(slideImage){
        nextImage();
    }

}, 3000);


// ===============================
// IMAGE UPLOAD PREVIEW
// ===============================

const uploadImage = document.getElementById("uploadImage");

if(uploadImage){

    uploadImage.addEventListener("change", function(){

        const file = this.files[0];

        if(file){

            const reader = new FileReader();

            reader.onload = function(e){

                const preview = document.getElementById("preview");

                if(preview){
                    preview.src = e.target.result;
                }

            };

            reader.readAsDataURL(file);

        }

    });

}


// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }

});