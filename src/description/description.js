///////////////////////////////////////////////////////////////
const generateDescription = (htmlElement) => {
  const homepageDescription = document.createElement("p")
  homepageDescription.id = "hompage-description"

  homepageDescription.innerHTML = "Welcome to the show  \
  tracker website! You can (someday when it actually  \
  gets all the way implemented) use this site to keep track  \
  of all the shows you have coming up so you never miss  \
  a single one."

  htmlElement.appendChild(homepageDescription)
}

///////////////////////////////////////////////////////////////
export { generateDescription }
