// DOM Elements
const progressBars = document.querySelectorAll('.progress-bar')
const contactForm = document.getElementById('contact-form')
const toastSuccess = document.getElementById('toast-success')
const textFields = document.querySelectorAll('.text-field')
const dismissToastBtn = document.getElementById('dismiss-toast')
const header = document.getElementById('main-header')
const hireMeBtn = document.getElementById('hire-me-btn')
const legendText = document.getElementById('legend-text')
const projectImages = document.querySelectorAll('.project-image')
const heroTitle = document.getElementById('hero-title')
const heroSubs = document.querySelectorAll('.hero-sub')
// const heroGIF = document.getElementById('hero-gif')
// const heroHireMeImg = document.getElementById('hero-hire-me-img')

// Scroll Event for Header
window.addEventListener('scroll', () => {
    if (scrollY >= 126) {
        header.style.background = "#2a1236"
    }
    else {
        // header.style.background = "url('/src/assets/hero-bg.jpg')"
        header.style.background = "transparent"
        header.style.backgroundSize = "cover"
        header.style.backgroundPosition = "top"
    }
});


// Create an intersection observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Get the maximum value for the progress bar from its data-value attribute
      const max = entry.target.dataset.value;
      
      // Animate the progress bar's width from 0% to its maximum value
      entry.target.style.width = `${max}%`;
    }
    else {
      // Reset the progress bar width to 0
      entry.target.style.width = '0%';
    }
  });
});

// Observe each progress bar
progressBars.forEach(progressBar => {
    observer.observe(progressBar);
});


// Set active link
function setActiveLink(event) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active-nav'));
  event.currentTarget.classList.add('active-nav');
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', setActiveLink);
});


// Legend text content
hireMeBtn.addEventListener('click', () => {
  legendText.textContent = "Ready for you"
})


// Portfolio Image Changing on Hover
// JavaScript

projectImages.forEach(projectImage => {
  const dataString = projectImage.dataset.images;
  const imageURLArray = JSON.parse(dataString);
  let currentIndex = 0; // initialize the current index to 0
  let intervalId; // initialize the interval ID variable

  function startInterval() {
    // start a new interval to change the image every 500ms
    intervalId = setInterval(() => {
      // update the image source to the next one in the array
      projectImage.src = imageURLArray[currentIndex];
      // increment the current index, wrapping around to 0 if necessary
      currentIndex = (currentIndex + 1) % imageURLArray.length;
    }, 1000);
  }

  function stopInterval() {
    // clear the interval when the mouse leaves the image
    clearInterval(intervalId);
  }

  projectImage.addEventListener('mouseenter', () => {
    startInterval();
  });

  projectImage.addEventListener('mouseleave', () => {
    stopInterval();
  });
});


window.addEventListener('load', () => {
  // heroGIF.style.opacity = '1'
  // heroGIF.addEventListener('animationend', function() {
  //   // Animation complete, change image
  //   // heroGIF.style.bottom = '20rem'
  //   // heroHireMeImg.classList.remove('opacity-0')
  //   // heroHireMeImg.classList.add('opacity-1')
  //   // heroHireMeImg.style.opacity = '1'
  // });
  setInterval(() => {
    
    neonEffect('add', 5000)
    neonEffect('remove', 5900)
  
    heroSubNeon(0, 'add', 6400)
    heroSubNeon(0, 'remove', 6600)
    heroSubNeon(1, 'add', 6800)
    heroSubNeon(1, 'remove', 6900)
    heroSubNeon(2, 'add', 7000)
    heroSubNeon(2, 'remove', 7100)
    heroSubNeon(3, 'add', 7200)
    heroSubNeon(3, 'remove', 7300)
    heroSubNeon(4, 'add', 7400)
    heroSubNeon(4, 'remove', 7500)
    heroSubNeon(5, 'add', 7600)
    heroSubNeon(5, 'remove', 7700)
    heroSubNeon(6, 'add', 7800)
    heroSubNeon(6, 'remove', 8100)
  }, 8500);
})

// heroSubs.forEach((heroSub) => {
//   setTimeout(() => {
//     heroSub.style.transition = '1.5s all ease-in-out'
//       heroSub.classList.add('font-effect-neon')
//     }, 6200);
//     setTimeout(() => {
//     heroSub.classList.remove('font-effect-neon')
//   }, 6900);
// })


function neonEffect(action, timeout){
  setTimeout(() => {
    heroTitle.style.transition = '1.5s all ease-in-out'
    if (action === 'add'){
      heroTitle.classList.add('font-effect-neon')
    }
    else if (action === 'remove'){
      heroTitle.classList.remove('font-effect-neon')
    }
  }, timeout);
}

function heroSubNeon(child, action, timeout){
  setTimeout(() => {
    // heroTitle.style.transition = '.2s all ease-in-out'
    if (action === 'add'){
      heroSubs[child].classList.add('font-effect-neon')
    }
    else if (action === 'remove'){
      heroSubs[child].classList.remove('font-effect-neon')
    }
  }, timeout);
}

// projectImages.forEach(projectImage => {
//   const dataString = projectImage.dataset.images
//   const imageURLArray = JSON.parse(dataString)
//   projectImage.addEventListener('mouseout', () => {
//     projectImage.src = imageURLArray[2]
//   })
// })

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     fetch('https://sheetdb.io/api/v1/4jz77miwz9aku', {
//         method: "POST",
//         body: new FormData(contactForm)
//     })
//     .then(response => (response.json()))
//     .then(jsonResponse => {
//         console.log("Successful form submission:", jsonResponse)
//     })
//     .catch(err => console.log("Error in submission:", err))
// })

dismissToastBtn.addEventListener('click', () => {
    toastSuccess.style.visibility = "hidden"
    toastSuccess.classList.remove('perform-slide')
})

contactForm.addEventListener("submit", e => {
e.preventDefault();
fetch(contactForm.action, {
    method : "POST",
    body: new FormData(contactForm),
}).then(
    response => response.json()
).then((jsonResponse) => {

    // Display success toast
    toastSuccess.style.visibility = "visible"
    toastSuccess.classList.add('perform-slide')
    textFields.forEach(textField => {
        textField.value = ''
    })
}).catch(error => console.log(error));
});