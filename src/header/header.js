///////////////////////////////////////////////////////////////
const generateHeader = (htmlElement) => {
  const mainHeader = document.createElement("h1")
  mainHeader.id = "main-header"
  mainHeader.innerHTML = "Personal Show Manager 1.0"
  htmlElement.appendChild(mainHeader)
}

///////////////////////////////////////////////////////////////
export { generateHeader }
