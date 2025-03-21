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
function redirectWA() {
    let nomorWA = "6281908803875"; // Nomor WhatsApp

    let tanggal = document.getElementById("date").value;
    let jam = document.getElementById("time").value;
    let dewasa = document.getElementById("adults").value;
    let anak = document.getElementById("children").value;

    if (!tanggal || !jam || !dewasa || !anak) {
        alert("Mohon isi semua data terlebih dahulu.");
        return;
    }
    let pesan = `Halo, saya ingin reservasi:%0A📅 Tanggal: ${tanggal}%0A⏰ Jam: ${jam}%0A👨 Dewasa: ${dewasa} orang%0A👶 Anak: ${anak} orang%0A Terima kasih!`;
    let linkWA = `https://api.whatsapp.com/send/?phone=${nomorWA}&text=${pesan}&type=phone_number&app_absent=0`;
    
    window.open(linkWA, "_blank");
}