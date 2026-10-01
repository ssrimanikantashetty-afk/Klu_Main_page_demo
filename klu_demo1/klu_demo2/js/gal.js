function openImage(image) {

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightboxImage").src = image;

}


function closeImage() {

    document.getElementById("lightbox").style.display = "none";

}