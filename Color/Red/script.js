function changeAboutMeText() 
{
    const aboutMeTexts = ["Web Developer", "Web Designer", "Full Stack Web Developer"]; // Add more texts as needed
    const typingSpeed = 100; // milliseconds per character
    const eraseSpeed = 50; // milliseconds per character during erasing
    const pauseTime = 1500; // milliseconds to pause between each text change
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() 
    {
        const currentText = aboutMeTexts[textIndex];
        /* Typing */
        if (!isDeleting && charIndex < currentText.length) 
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        /* Switching the deleting or Typing process */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}




changeAboutMeText();

// document.addEventListener('DOMContentLoaded', function() {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const progressBar = entry.target.querySelector('.progress-bar');
//                 const progress = progressBar.dataset.progress;
                
//                 progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
//                 progressBar.classList.add('animated'); // Add a class to trigger animation
//                 observer.unobserve(entry.target); // Stop observing once animation is triggered
//             }
//         });
//     });

//     const programmingLanguages = document.querySelectorAll('#skills .skill');
//     programmingLanguages.forEach(skill => {
//         observer.observe(skill);
//     });
// });

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.progress-bar');
        const progress = progressBar.dataset.progress;
        progressBar.style.setProperty('--progress', `${progress}%`);
        observer.unobserve(entry.target);
      }
    });
  });
  
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    observer.observe(skill);
  });


let menuIcon = documnt.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navlink = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }

    })
}
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
}
