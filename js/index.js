window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    const header = document.querySelector('#header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalClose = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', function() {
        modal(i);
    })
});
modalClose.forEach((mc) => {
    mc.addEventListener('click', function() {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
});

// mixitup js
const mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelectorAll('.work_item');
const activeWork = () => {
    linkWork.forEach(L => L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L => L.addEventListener('click', activeWork));


const swiperTestimonial = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        // 1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        // },
    },
});



// scroll sections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');


        if (scrollY > sectionTop && scrollX <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}); /*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, { delay: 700 })
sr.reveal(`.home_social, .home_scroll`, { delay: 900, origin: 'bottom' })