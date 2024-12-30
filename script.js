// coded by Den ♥️
// Add event listener to the button in the hero section
document.querySelector('.hero button').addEventListener('click', function() {
  // Scroll to the about section when the button is clicked
  document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the navigation menu
document.querySelector('nav ul').addEventListener('click', function(event) {
  // Check if the clicked element is a link
  if (event.target.tagName === 'A') {
    // Prevent the default link behavior
    event.preventDefault();
    // Get the href attribute of the link
    var href = event.target.getAttribute('href');
    // Scroll to the section with the corresponding id
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

// Add event listener to the contact form
document.querySelector('.contact form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the form data
  var formData = new FormData(event.target);
  // Send the form data to the server using AJAX
  fetch('/contact', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.error(error);
  });
});
// Add event listener to the gallery images
document.querySelectorAll('.gallery img').forEach(function(image) {
image.addEventListener('click', function() {
// Create a modal window to display the image
var modal = document.createElement('div');
modal.classList.add('modal');
var modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
var modalImage = document.createElement('img');
modalImage.src = image.src;
modalContent.appendChild(modalImage);
modal.appendChild(modalContent);
document.body.appendChild(modal);
// Add event listener to the modal window
modal.addEventListener('click', function() {
modal.remove();
});
});
});

// Add event listener to the navigation menu to toggle the mobile menu
document.querySelector('.nav-toggle').addEventListener('click', function() {
document.querySelector('nav ul').classList.toggle('show');
});

// Add event listener to the window to scroll to the top when the user clicks the top button
document.querySelector('.top-button').addEventListener('click', function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add event listener to the window to show the top button when the user scrolls down
window.addEventListener('scroll', function() {
if (window.scrollY > 500) {
document.querySelector('.top-button').classList.add('show');
} else {
document.querySelector('.top-button').classList.remove('show');
}
});
