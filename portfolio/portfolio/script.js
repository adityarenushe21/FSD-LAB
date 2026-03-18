const slider = document.getElementById("slider");

function navigateTo(index){
    slider.style.transform = `translateX(-${index * 100}vw)`;
}