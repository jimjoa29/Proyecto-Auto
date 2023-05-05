const images = [
    '../img/bg-001.jpg',
    '../img/bg-002.jpg',
    '../img/bg-003.jpg'
]

// App State
let index = 0;
const max = images.length

console.log(images);

// Get the DOM elements
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nexSlideButton = document.querySelector('.nextSlide');


//Listen for arrow click events
prevSlideButton.addEventListener('click', function () {
    index--
    setImageIndex()
    changeBackgroundImage(images[index], containerElement)
})

nexSlideButton.addEventListener('click', function () {
    index++;
    setImageIndex()
    changeBackgroundImage(images[index], containerElement)
})

// Utility function
function setImageIndex() {
    if(index < 0) index = max -1 
    if (index === max) index = 0
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`
}