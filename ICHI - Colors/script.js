const slidesLink = document.querySelectorAll(".js-slides a");

slidesLink.forEach((link) => {
    
    link.addEventListener('click', (e) => {
        // e.preventDefault();

        slidesLink.forEach((otherLinks) => {
            otherLinks.classList.remove('active');
        })

        link.classList.add("active");


        const targetId = link.getAttribute("href").substring(1);
        const targetSec = document.getElementById(targetId);

        if (targetSec) {
            console.log("hello");
            targetSec.scrollIntoView({
                behavior: 'smooth',
            })
        }
        
    })
    
}

)
