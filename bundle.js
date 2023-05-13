(function(){
    const menu = document.querySelector(".menu");
    const menuButton = document.querySelector("#menu__toggle");
    menuButton.addEventListener("click", () => {
        if(menu.getAttribute("data-open") == null) {
            menu.setAttribute("data-open", "");
        } else {
            menu.removeAttribute("data-open");
        }
    })
})();         

// (function(){
//     const dropdowns = document.querySelectorAll(".menu details");

//     dropdowns.forEach((dropdown) => {
//         dropdown.addEventListener("mouseenter", () => {
//             console.log("open" + dropdown.querySelector(".title__link").textContent);
//             dropdown.setAttribute("open", "");
//         });

//         dropdown.addEventListener("mouseleave", () => {
//             console.log("close" + dropdown.querySelector(".title__link").textContent);
//             dropdown.removeAttribute("open");
//         });
//     })
// })();           
(function () {
    let frameNumber = 1;
    
    const carouselToggle = document.querySelector("#carousel-toggle");
    const carouselsInner = document.querySelectorAll(".carousel .carousel-inner");

    carouselToggle.addEventListener("click", (e) => {
        carouselsInner.forEach((carousel) => {
            carousel.classList.remove(`carousel-inner-${frameNumber}`)
        })

        frameNumber = (frameNumber%carouselsInner.length) + 1;

        carouselsInner.forEach((carousel) => {
            carousel.classList.add(`carousel-inner-${frameNumber}`)
        })
    });
})() 