$(document).ready(function(){
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function(){
    let productContainers = [...document.querySelectorAll('.product-container')];
    let nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    let preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
$(document).ready(function(){
    $('.hero-content').hide().fadeIn(2000);
});
$(document).ready(function(){
    $('.product-card').hover(
        function() {
            $(this).find('.product-thumb').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.product-thumb').css('transform', 'scale(1)');
        }
    );
});
function showMenu(menu) {
    document.getElementById('foodList').style.display = menu === 'food' ? 'block' : 'none';
    document.getElementById('drinkList').style.display = menu === 'drinks' ? 'block' : 'none';
}
function handleSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    // Sembunyikan formulir dan tampilkan pesan sukses
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";

    return false;
}
