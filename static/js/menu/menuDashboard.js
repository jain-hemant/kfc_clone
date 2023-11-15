let menuOfferBox = document.getElementById("menuOfferBox")

export function menuCard(){
    for(menu in menuCardData){
        let div = document.createElement("div")
        div.setAttribute("class", "item")
        let link = document.createElement("a")
        div.setAttribute("href", "#")
        let img = menuCardData[menu]["item"]
        let title = menuCardData[menu]["title"]
        link.append(img,title)
        div.append(link)
        menuOfferBox.innerText = div
    }
    return menuOfferBox
}

let menuCardData = [
    {
        item:"static/images/menu/008tenders/808kfc-new8pcTenders.avif", 
        title:"SPECIAL OFFER"
    }, 
    {
        item:"static/images/menu/002combos/201kfc-2BWCombo.avif", 
        title:"COMBOS"
    },
    {
        item:"static/images/menu/003family_meals/302kfc-8pcBucketMeal.avif", 
        title:"FAMILY MEALS"
    },
    {
        item:"static/images/menu/004wraps/402kfc-Wraps2for5NEW.avif", 
        title:"WRAPS"
    },
    {
        item:"static/images/menu/005fried_chicken/503kfc-4pcCombo.avif", 
        title:"FRIED CHICKEN"
    },
    {
        item:"static/images/menu/006nuggets/6003kfc-JamalMurray12pcNugCombo.avif", 
        title:"NUGGETS"
    },
    {
        item:"static/images/menu/007sandwiches/705kfc-cknsndalc.avif", 
        title:"SANSWICHES"
    },
    {
        item:"static/images/menu/008tenders/801kfc-TendersCombo.avif", 
        title:"TENDERS"
    },
    {
        item:"static/images/menu/009pot_pies_bowls/903kfc-FamousBowlNuggetsV2.avif", 
        title:"POT PIES & BOWLS"
    },
    {
        item:"static/images/menu/010kids_meal/1001kfc-KidsMealNuggetpromoPDP.avif", 
        title:"KIDS MEAL"
    },
    {
        item:"static/images/menu/011sides_add_ons/2002kfc-IndFries.avif", 
        title:"SIDE & ADD ONS"
    },
    {
        item:"static/images/menu/012desserts/3002kfc-CCCake.avif", 
        title:"DESSERTS"
    },
    {
        item:"static/images/menu/013sauces/4001kfc-KFCSauce.avif", 
        title:"SAUCES"
    },
    {
        item:"static/images/menu/014drinks/5001kfc-Pepsi.avif", 
        title:"DRINKS"
    },
]