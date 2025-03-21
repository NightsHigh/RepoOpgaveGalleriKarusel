let imagesForGalleri = [
    "/RepoOpgaveGalleriKarusel/assets/img/koala.jpg",
    "/RepoOpgaveGalleriKarusel/assets/img/great-white.jpg",
    "/RepoOpgaveGalleriKarusel/assets/img/elephant.jpg",
    "/RepoOpgaveGalleriKarusel/assets/img/smithi.jpg",
    "/RepoOpgaveGalleriKarusel/assets/img/tiger.jpg",
  ];
  const Galleri = document.getElementById("GalleriContainer");
  function createGallery(GalleriContainer, images) {

  
    let index = 0;
    let imageTag = document.createElement("img");
    imageTag.src = images[index];Galleri
  
    let buttonLeft = document.createElement("button");
    let buttonRight = document.createElement("button");
    buttonLeft.innerText = "<";
    buttonRight.innerText = ">";

    buttonLeft.addEventListener("click", () => decrement());
    buttonRight.addEventListener("click", () => increment());
  
    //Add the buttons and images to the parent container
    GalleriContainer.appendChild(buttonLeft);
    GalleriContainer.appendChild(imageTag);
    GalleriContainer.appendChild(buttonRight);
  
  
    function decrement() {
      if (index > 0) {
        index -= 1;
      } else {
        index = images.length - 1; 
      }
      imageTag.src = images[index];
    }
  
    function increment() {
      if (index < images.length - 1) {
        index += 1;
      } else {
        index = 0;
      }
      imageTag.src = images[index];
    }
  }
  
  createGallery(Galleri, imagesForGalleri);
