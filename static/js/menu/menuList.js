let menuList = document.getElementById("menuList")
export const menuListData = [
   "Special Offers",
   "Combos",
   "family Meals",
   "Wraps",
   "Fried Chicken",
   "Nuggets",
   "Sandwiches",
   "Tenders",
   "Pot Pies & Bowls",
   "Kids Meal",
   "Sides & Add Ons",
   "Desserts",
   "Sauces",
   "Drinks",
]
for(let menu in menuListData){
    let textTrim = menuListData[menu].split(" ").join("").trim()
    // console.log(textTrim);
    let menuLink = document.createElement("a")
    menuLink.setAttribute("href","#")
    menuLink.setAttribute("id",textTrim)
    menuLink.setAttribute("class","menuLink")
    menuLink.innerText= menuListData[menu]
    menuList.append(menuLink)
}