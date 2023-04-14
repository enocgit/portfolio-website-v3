// DOM Elements
const progressBars = document.querySelectorAll('.progress-bar')
const contactForm = document.getElementById('contact-form')
const toastSuccess = document.getElementById('toast-success')
const textFields = document.querySelectorAll('.text-field')
const dismissToastBtn = document.getElementById('dismiss-toast')
const header = document.getElementById('main-header')


// Scroll Event for Header
window.addEventListener('scroll', () => {
    // console.log(scrollY)
    if (scrollY >= 126) {
        header.style.backgroundColor = "#2a1236"
    }
    else {
        header.style.backgroundColor = 'transparent'
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
  });
});

// Observe each progress bar
progressBars.forEach(progressBar => {
  observer.observe(progressBar);
});





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