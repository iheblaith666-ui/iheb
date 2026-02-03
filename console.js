document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.right = '0';
                navMenu.style.background = 'white';
                navMenu.style.width = '200px';
                navMenu.style.padding = '1rem';
                navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                navMenu.style.borderRadius = '10px';
            }
        });
    }
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;
            
            this.textContent = 'تمت الإضافة!';
            this.style.backgroundColor = '#10b981';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-cart-plus"></i> أضف للسلة';
                this.style.backgroundColor = '';
            }, 1500);
        });
    });
    
    document.querySelector('.footer-bottom p').innerHTML = 
        `© ${new Date().getFullYear()} ايهاب شوب. جميع الحقوق محفوظة.`;
});