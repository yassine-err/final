function upDate(previewPic) {
    console.log("Événement de survol ou de focus déclenché");
    console.log("Source de l'image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    
    document.getElementById('image').innerHTML = previewPic.alt;

  
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
   
    document.getElementById('image').style.backgroundImage = "url('')";

    
    document.getElementById('image').innerHTML = "Survolez une image ci-dessous pour l'afficher ici";
}

function initGallery() {
    console.log("Initialisation de la galerie");
    var thumbnails = document.querySelectorAll('.thumbnail');
    
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].setAttribute('tabindex', '0');
    }
}
