// Array of banner images
const bannerImages = [
    "image/banner-3.avif",
    "image/banner2.png",
    
];

let index = 0;
const bannerPhoto = document.getElementById("banner-pho");

// Change image every 3 seconds
setInterval(() => {
    index = (index + 1) % bannerImages.length;  // infinite loop
    bannerPhoto.src = bannerImages[index];
}, 3000); // change every 3s

