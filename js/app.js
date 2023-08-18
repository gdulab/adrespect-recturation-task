'use strict'

// Search
function navSearchToggle() {
    const navSearchIcon = document.querySelector('#nav-search-icon')
    const navSearchBar = document.querySelector('.nav-search');

    navSearchIcon.addEventListener('click', function () {
        navSearchBar.classList.toggle('active');
    })
}

navSearchToggle();

// Offer cards click listener
function offerCardClickHandler() {

    const clickedElement = document.querySelectorAll('.offer-card');

    clickedElement.forEach(div => {
        div.addEventListener('click', function () {

            const link = this.getAttribute('href');
            console.log('click ' + link);
            window.location.href = link;

        });
    });

}

offerCardClickHandler();