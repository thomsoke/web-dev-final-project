///////////////////////////////////////////////////////////////
const venue1 = {
  venue: "Wonder Ballroom",
  venuelink: "linkylinkykthhtppspps"
}
const venue2 = {
  venue: "Wonder Ballroom",
  venuelink: "linkylinkykthhtppspps"
}
const venue3 = {
  venue: "Wonder Ballroom",
  venuelink: "linkylinkykthhtppspps"
}
const venue4 = {
  venue: "Wonder Ballroom",
  venuelink: "linkylinkykthhtppspps"
}

///////////////////////////////////////////////////////////////
const tableArray = [ venue1, venue2, venue3, venue4 ]

///////////////////////////////////////////////////////////////
const makeElement = (elementType, attributeType, attributeName) => {
  const element = document.createElement(elementType)
  element.setAttribute(attributeType, attributeName)

  return element
}

///////////////////////////////////////////////////////////////
const extractVenueInfo = (tableArray) => {
  let newVenueArray = []

  for (let i = 0; i < tableArray.length; i++) {
    let newVenueString = `${tableArray[i].venue}`
    newVenueArray[i] = newVenueString
  }
  return newVenueArray
}

///////////////////////////////////////////////////////////////
const extractVenuelinkInfo = (tableArray) => {
  let newVenuelinkArray = []

  for (let i = 0; i < tableArray.length; i++) {
    var str = `${tableArray[i].venue}`
    var result = str.link(tableArray[i].venuelink)
    newVenuelinkArray[i] = result
  }
  return newVenuelinkArray
}

///////////////////////////////////////////////////////////////
const makeUL = () => {
  let array = extractShowInfo(tableArray)
  const upcomingShowsList = makeElement("ul", "class", "upcoming-shows-list")

  const scrollboxHeader = makeElement("h1", "id", "scrollbox-header")
  scrollboxHeader.innerHTML = "Upcoming Shows"
  upcomingShowsList.appendChild(scrollboxHeader)

  for (let i = 0; i < array.length; i++) {
    const newListItem = makeElement("li", "class", "upcoming-show")
    newListItem.appendChild(document.createTextNode(array[i]))
    upcomingShowsList.appendChild(newListItem)
  }

  return upcomingShowsList
}

///////////////////////////////////////////////////////////////
const addUL = (htmlElement) => {
  htmlElement.appendChild(makeUL())
}

///////////////////////////////////////////////////////////////
const makeTable = () => {
  let venueArray = extractVenueInfo(tableArray)
  let venuelinkArray = extractVenuelinkInfo(tableArray)

  const upcomingShowsList = makeElement("table", "class", "table")

  for (let i = 0; i < venueArray.length; i++) {
    let tr = table.insertRow(-1)


      for (let j = 0; j < venueArray.length; j++) {
        let td = tr.insertCell(-1)

        // td.setAttribute("id", `row-${i}-column-${j}`)
        // td.setAttribute("class", `row-${i}`)
        // td.setAttribute("class", `column-${j}`)

        // td.appendChild(document.createTextNode(array[i][j]))
        // this prints the content in every cell, row
        td.appendChild(document.createTextNode(venueArray[i]))
        td.appendChild(document.createTextNode(venuelinkArray[i]))
      }
  }
  return table
}

///////////////////////////////////////////////////////////////
const addTableUL = (htmlElement) => {
  htmlElement.appendChild(makeTable())
}

///////////////////////////////////////////////////////////////
const displayTable = () => {
  const upcomingShowsList = document.getElementsByClassName("upcoming-shows-list")
}

///////////////////////////////////////////////////////////////
export { addTableUL, displayTable }
