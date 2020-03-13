///////////////////////////////////////////////////////////////
const generateForm = (htmlElement) => {
  const showForm = document.createElement("form")
  showForm.id = "show-form"
  showForm.innerHTML = ""

  htmlElement.appendChild(showForm)
}

///////////////////////////////////////////////////////////////
export { generateForm }
