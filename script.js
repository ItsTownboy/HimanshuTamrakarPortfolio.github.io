document.addEventListener("DOMContentLoaded", function() {
    // Animation triggers
    const name = document.getElementById('name');
    const designation = document.getElementById('designation');
    const profileImage = document.querySelector('#home img');
  
    name.classList.add('fade-left');
    designation.classList.add('fade-right');
    profileImage.classList.add('fade-right');
  });
  