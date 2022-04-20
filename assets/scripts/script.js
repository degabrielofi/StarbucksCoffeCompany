function imgSlider(anything){
    document.querySelector('.starbucks').src = anything
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

