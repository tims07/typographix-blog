// Selected Elements

const navHeader = document.getElementById('logo');
const navbar = document.getElementById('navbar');


// Skeleton Screen

setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.hidden').forEach(el => el.style.display = 'block');
}, 2000);




// Function 
function checkScroll(){
    let scrollPosition = window.scrollY;


    // Add/remove scroll class based on position
    if(scrollPosition > 20){
        navbar.classList.add('scrolled');
    }else {
        navbar.classList.remove('scrolled');

    }

    // Calculate new font size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03);

    // Clamping font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min( 3, newSize);

    navHeader.style.fontSize = newSize + "rem";
}

// Event Listener 

window.addEventListener('scroll', checkScroll);