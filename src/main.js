

// =-----------------------

const skillBarAmounts = document.querySelectorAll('.skill-bar-amount')
const skillBarWidths = document.querySelectorAll('.skill-bar-width')
const contactForm = document.getElementById('contact-form')
const toastSuccess = document.getElementById('toast-success')
const textFields = document.querySelectorAll('.text-field')
const dismissToastBtn = document.getElementById('dismiss-toast')
const skills = document.querySelectorAll('.skill')

// document.addEventListener('scroll', (e) => {
//     if (scrollY >= 3864) {
//         // alert(2344)
//         skillBarAmount.style.width = "0";
//         skillBarAmount.style.animationName = "progress";
//         skillBarAmount.style.animationDuration = "2s";
//         skillBarAmount.style.width = "10rem";

//         skillBarWidth.style.width = "12rem";
//         skillBarWidth.style.animationName = "reduce";
//         skillBarWidth.style.animationDuration = "2s";
//         skillBarWidth.style.width = "2rem";
//     }
// })


window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const elementTop = skill.getBoundingClientRect().top

        if (elementTop < window.innerHeight) {
          // Do something when element is in viewport
          console.log("VIEWPORT REACHED")
            skillBarAmounts.forEach(skillBarAmount => {
                skillBarAmount.style.width = "0";
              skillBarAmount.style.animationName = "progress";
              skillBarAmount.style.animationDuration = "2s";
              skillBarAmount.style.width = "10rem";
            }) 

            skillBarWidths.forEach(skillBarWidth => {
                
                        skillBarWidth.style.width = "12rem";
                        skillBarWidth.style.animationName = "reduce";
                        skillBarWidth.style.animationDuration = "2s";
                        skillBarWidth.style.width = "2rem";
            })
        }
    })
//   const elementTop = html.getBoundingClientRect().top;

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
    // you can put any JS code here          data-dismiss-target="#toast-success"

    console.log(jsonResponse)
    toastSuccess.style.visibility = "visible"
    // toastSuccess.style.animationName = "slide-left"
    // toastSuccess.style.animationDuration = "1.1s"
    toastSuccess.classList.add('perform-slide')
    textFields.forEach(textField => {
        textField.value = ''
    })
}).catch(error => console.log(error));
});