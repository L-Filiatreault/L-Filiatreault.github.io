/**Using this function to make the 'buger-menu' appear correctly
 * when the screen is 780px or less. Got this idea from my UI class assignment 3 when 
 * we started doing responsive websites.
 */

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navContainer = document.querySelector('.navlinks-container');

    burgerMenu.addEventListener('click', function () {
        navContainer.classList.toggle('show');
    })

})