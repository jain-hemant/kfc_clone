let foodSectionFoodCard = document.getElementById("foodSectionFoodCard")
// let foodCardImg = document.getElementById("foodCardImg")
// let foodName    = document.getElementById("foodName")
// let cal         = document.getElementById("cal")
// let price       = document.getElementById("price")

let foodCardData = [
    {
        img: "static/images/product/large-screen/ls1_kfc-8pcSpWings.avif",
        foodName: "8pc. Wings Combo ",
        cal: "1400-1800",
        price: 400,    
    },    
    {
        img: "static/images/product/large-screen/ls2_kfc-FillUpBox.avif",
        foodName: "Fill Up Box",
        cal: "2600-3630",
        price: 600,    
    },
    {
        img: "static/images/product/large-screen/ls4_kfc-6pcCOB12pcNuggets-DigEx.avif",
        foodName: "Chicken + Nuggets Family Meal ",
        cal: "2420-4500",
        price: 800,    
    },
    {
        img: "static/images/product/large-screen/ls5_kfc-8pcBucket&8TendersBucket.avif",
        foodName: "8 pc. Chicken + 8 Tenders Fill Up ",
        cal: "5920-6220",
        price: 1200,    
    },

]
for(let key in foodCardData){
    let foodCard = document.createElement("div")
    foodCard.setAttribute("id","foodCard")

    let divImg = document.createElement("div")
    divImg.setAttribute("id","foodCardImg")
    divImg.setAttribute("class","cardItem")
    divImg.innerHTML = `<img src="${foodCardData[key]["img"]}" height="240px"/>`

    let divFoodName = document.createElement("div")
    divFoodName.setAttribute("id","foodName")
    divFoodName.setAttribute("class","cardItem")
    divFoodName.innerText = foodCardData[key]["foodName"]

    let divCal = document.createElement("div")
    divCal.setAttribute("id","cal")    
    divCal.setAttribute("class","cardItem")
    divCal.innerText = foodCardData[key]["cal"]

    let divPrice = document.createElement("div")
    divPrice.setAttribute("id","price")
    divPrice.setAttribute("class","cardItem")
    divPrice.innerText = foodCardData[key]["price"]

    foodCard.append(divImg,divFoodName,divCal,divPrice)
    foodSectionFoodCard.append(foodCard)
}