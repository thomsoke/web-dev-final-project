///////////////////////////////////////////////////////////////
const imageItem1 = {
  number: "1",
  source: "https://i.imgur.com/3lX42vd.png",
  caption: "this is image number 1"
}
const imageItem2 = {
  number: "2",
  source: "https://i.imgur.com/Azt0ldO.png",
  caption: "this is image number 2"
}
const imageItem3 = {
  number: "3",
  source: "https://i.imgur.com/bqqBPV5.png",
  caption: "this is image number 3"
}

///////////////////////////////////////////////////////////////
const METADATA_ITEMS = [ imageItem1, imageItem2, imageItem3 ]

///////////////////////////////////////////////////////////////
let slideIndex = 0

///////////////////////////////////////////////////////////////
const makeElement = (elementType, attributeType, attributeName) => {
  const element = document.createElement(elementType)
  element.setAttribute(attributeType, attributeName)

  return element
}

///////////////////////////////////////////////////////////////
const generateSlideshowItemElement = (metadataItem) => {
  const { number, source, caption } = metadataItem

  const parentDiv = makeElement("div", "class", "my-slides")
  const childSlideNumberDiv = makeElement("div", "class", "numbertext")
  const childImage = makeElement("img", "src", source)

  childImage.setAttribute("class", "slideshow-image")

  if (number === "1") {
    parentDiv.classList.add("active")
  } else {
    parentDiv.classList.add("inactive")
  }

  const childCaptionDiv = makeElement("div", "text", caption)

  parentDiv.appendChild(childSlideNumberDiv)
  parentDiv.appendChild(childImage)
  parentDiv.appendChild(childCaptionDiv)

  return parentDiv
}

///////////////////////////////////////////////////////////////
const createSlideshowArray = (metadataItems) => {
  return metadataItems.map(item => generateSlideshowItemElement(item))
}

///////////////////////////////////////////////////////////////
const generateSlideshow = (htmlElement) => {
  const slideshowArray = createSlideshowArray(METADATA_ITEMS)

  for(let i = 0; i < slideshowArray.length; i++)
  {
    htmlElement.appendChild(slideshowArray[i])
  }
  console.log("after html elem for loop", htmlElement)
}

///////////////////////////////////////////////////////////////
const navRight = () => {
  const images = document.getElementsByClassName("my-slides")
  let indexOfCurrentActiveSlide = 0

  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("active")) {
      indexOfCurrentActiveSlide = i
    }
  }
  images[indexOfCurrentActiveSlide].classList.remove("active")
  images[indexOfCurrentActiveSlide].classList.add("inactive")

  let next = indexOfCurrentActiveSlide + 1
  if (next > 2) {
    next = 0;
  }
  images[next].classList.remove("inactive")
  images[next].classList.add("active")
}

///////////////////////////////////////////////////////////////
const navLeft = () => {
  const images = document.getElementsByClassName("my-slides")
  let indexOfCurrentActiveSlide = 0

  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("active")) {
      indexOfCurrentActiveSlide = i
    }
  }
  images[indexOfCurrentActiveSlide].classList.remove("active")
  images[indexOfCurrentActiveSlide].classList.add("inactive")

  let next = indexOfCurrentActiveSlide - 1
  if (next < 0) {
  next = 2;
  }
  images[next].classList.remove("inactive")
  images[next].classList.add("active")
}

///////////////////////////////////////////////////////////////
const displaySlides = () => {
  setInterval(function() {navRight();}, 5000)
}

///////////////////////////////////////////////////////////////
export { generateSlideshow, displaySlides, navRight, navLeft }
