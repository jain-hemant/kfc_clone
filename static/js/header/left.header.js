const leftHeader = () => {
    // console.log("Header")
    let header = document.getElementById("header")
    let div = document.createElement("div")
    const logo = document.createElement("p")
    logo.innerText = "Kentucky Fried Chicken"
    const menu = document.createElement("a")
    menu.setAttribute("href","www.google.com")
    menu.innerText = "Menu"
    const careers = document.createElement("a")
    careers.setAttribute("href","www.google.com")
    careers.innerText = "Careers"
    const merch = document.createElement("a")
    merch.setAttribute("href","www.google.com")
    merch.innerText = "Merch"
    const find = document.createElement("a")
    find.setAttribute("href","www.google.com")
    find.innerText = "Find A KFC"
    div.append(logo,menu,careers,merch,find)
    header.append(div)
    return header
}
export default leftHeader