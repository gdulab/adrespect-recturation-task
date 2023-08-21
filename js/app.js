'use strict'

// Search
const navSearchToggle = () => {
    const navSearchIcon = document.querySelector('#nav-search-icon')
    const navSearchBar = document.querySelector('.nav-search');

    navSearchIcon.addEventListener('click', function () {
        navSearchBar.classList.toggle('active');
    })
}

navSearchToggle();

// Offer cards click listener
const offerCardClickHandler = () => {

    const clickedElement = document.querySelectorAll('.offer-card');

    clickedElement.forEach(div => {
        div.addEventListener('click', function () {

            const link = this.getAttribute('data-href');
            console.log('click ' + link);
            window.location.href = link;

        });
    });

}

offerCardClickHandler();

// gallery settings

const macyInstance = new Macy({
    container: '.grid',
    columns: 3,
    margin: {
        x: 43,
        y: 43
    },
    breakAt: {
        992: {
            margin: {
                x: 0,
                y: 24,
            },
            columns: 2
        },
        
        576: {
            margin: {
                x: 0,
                y: 24,
            },
            columns: 1
        }
    }
    

});

// gallery dropdown
const galleryDropdown = () => {
    const hiddenImages = document.querySelectorAll('.hidden-image');
    const button = document.getElementById('gallery-dropdown-button');
    const gradient = document.querySelector('.gradient');

    button.addEventListener('click', function () {
        console.log('klik');

        for (const hiddenImage of hiddenImages) {
            hiddenImage.classList.toggle("hidden-image");
            hiddenImage.classList.toggle("grid-item");

        }
        macyInstance.recalculate("height");
        gradient.classList.toggle('folded');
        gradient.classList.toggle('unfolded');

        if (gradient.classList.contains('unfolded')) {
            button.innerHTML = "Zwiń ↑";
            button.style.backgroundColor = "rgb(220, 193, 171, 0.8)";
        } else {
            button.innerHTML = "Rozwiń ↓";
            button.style.backgroundColor = ""
            button.style.transform = "transitionY(50%)"
        }
    })

}

galleryDropdown();

// Fancybox settings
Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: {
            right: ["close"]
        }
    },
});