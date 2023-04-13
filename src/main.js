const skillBarAmount = document.querySelector('.skill-bar-amount')
const skillBarWidth = document.querySelector('.skill-bar-width')

document.addEventListener('scroll', (e) => {
    if (scrollY >= 3864) {
        // alert(2344)
        skillBarAmount.style.animationName = "progress";
        skillBarAmount.style.animationDuration = "2s";

        skillBarWidth.style.animationName = "reduce";
        skillBarWidth.style.animationDuration = "2s";
    }
})