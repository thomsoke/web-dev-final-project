///////////////////////////////////////////////////////////////
import { navigateToSubPage } from "./navigation"

///////////////////////////////////////////////////////////////
const home = {
  childText: "home",
  className: "active home",
  pageToShow: "home"
}
const subpage1 = {
  childText: "add show",
  className: "",
  pageToShow: "subpage-1"
}
const subpage2 = {
  childText: "upcoming",
  className: "",
  pageToShow: "subpage-2"
}
const subpage3 = {
  childText: "venue info",
  className: "",
  pageToShow: "subpage-3"
}

///////////////////////////////////////////////////////////////
const METADATA_ITEMS = [ home, subpage1, subpage2, subpage3 ]

///////////////////////////////////////////////////////////////
const generateSubheaderButtonElement = (metadata) => {
  const { childText, className, pageToShow } = metadata
  const subheaderItem = document.createElement("button")

  subheaderItem.innerHTML = childText
  subheaderItem.setAttribute("class", className)
  subheaderItem.setAttribute("id", `nav-button-${pageToShow}`)

  return subheaderItem
}

///////////////////////////////////////////////////////////////
const fillSubheaderArray = (metadataItems) => {
  const elements = metadataItems.map(item => generateSubheaderButtonElement(item))

  return elements
}

///////////////////////////////////////////////////////////////
const generateSubheader = (htmlElement) => {
  const subheader = document.createElement("div")
  subheader.id = "subheader"

  const subheaderItems = fillSubheaderArray(METADATA_ITEMS)

  for(let i = 0; i < subheaderItems.length; i++)
  {
    htmlElement.appendChild(subheaderItems[i])
  }
}

///////////////////////////////////////////////////////////////
export { generateSubheader }
