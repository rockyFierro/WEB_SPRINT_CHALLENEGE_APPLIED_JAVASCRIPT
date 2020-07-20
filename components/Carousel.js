/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



function carouselCreator(pics){
    const carSlide = document.createElement('div')
    carSlide.classList.add('carousel-slide')
    const left = document.createElement('div')
    left.classList.add('left-button')
    const right = document.createElement('div')
    right.classList.add('right-button')
    const image = document.createElement('img')

    left.textContent = ' < '
    right.textContent = ' > '

    left.style.fontSize = '5rem'
    right.style.fontSize = '5rem'

    let count = 0
    image.src = pics[count]

    right.addEventListener('click', (e) =>{
        if(count < 4) {
            count = count + 1
            image.src = pics[count]
        }else{
            count = 0
        }
    })


    left.addEventListener('click', (e) =>{
        if(count > 0) {
            count = count - 1
            image.src = pics[count]
        }else{
            count = 3
        }
    })




    carSlide.appendChild(left)
    carSlide.appendChild(right)
    carSlide.appendChild(image)

    carSlide.style.display = 'flex'
    carSlide.style.overflow = 'hidden'
    carSlide.style.width = '100%'
    carSlide.style.height = '500px'
    carSlide.style.marginBottom = '5ch'

    return carSlide
}

    const images = [
        "./assets/carousel/mountains.jpeg",
        "./assets/carousel/computer.jpeg",
        "./assets/carousel/trees.jpeg",
        "./assets/carousel/turntable.jpeg",
        "./assets/carousel/mountains.jpeg"
    ]

const carContainer = document.getElementsByClassName('carousel-container')[0]
carContainer.appendChild(carouselCreator(images))
carContainer.style.width = '60%'
carContainer.style.margin = 'auto'




