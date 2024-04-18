let thumbnails = document.querySelectorAll('.thumbs-img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseover', (event) => {
    updateGallery(event.target);
  });
});

function updateGallery(thumbnail) {
    let mainImage = document.querySelector('#gallery-picture');
    let title = document.querySelector('#gallery-title');
    let description = document.querySelector('#gallery-description');
  
    mainImage.src = thumbnail.src;
    title.textContent = thumbnail.dataset.title;
    description.textContent = thumbnail.dataset.description;
  }