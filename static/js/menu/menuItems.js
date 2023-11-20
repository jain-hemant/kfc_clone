
let menuItems = document.getElementById("menuItems")
let props = document.getElementById("props")
export let menuItemsData = [
    {SpaicialOffers:[
        {
            img: "/static/images/menu/001special_offers/101kfc-Wraps2for5NEW.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/001special_offers/102kfc-FillUpBox.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/001special_offers/103kfc-6pcCOB12pcNuggets-DigEx.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/001special_offers/104kfc-8pcBucket&8TendersBucket.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
    ]},
    {Combos:[
        {
            img: "/static/images/menu/002combos/201kfc-2BWCombo.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/002combos/202kfc-2FCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/203kfc-2NCombo.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/002combos/204kfc-2TCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/205kfc-2WCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/206kfc-2CCombo.avif",   
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/002combos/207kfc-2NCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/208kfc-2TCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/209kfc-2WCombo.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/002combos/210kfc-2CCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/211kfc-2NCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/212kfc-2TCombo.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        {
            img: "/static/images/menu/002combos/213kfc-2WCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/214kfc-2CCombo.avif",
            foodName: "Fill Up Box",
            cal: "2600-3630",
            price: 600,
        },
        {
            img: "/static/images/menu/002combos/215kfc-2NCombo.avif",
            foodName: "8pc. Wings Combo ",
            cal: "1400-1800",
            price: 400,
        },
        
    ]},
]

for(let item of menuItemsData[1]["Combos"]){
    // console.log(menuItemsData[item]["SpaicialOffers"][item]);
    let div = document.createElement("div")
    div.setAttribute("class", "item")
    let link = document.createElement("a")
    link.setAttribute("href", "#")
    let img = document.createElement("img")
    img.setAttribute("src",item["img"])
    img.setAttribute("width", "200")
    let title = document.createElement("h2")
    title.setAttribute("class", "title")
    title.innerText = item["foodName"]
    let cal = document.createElement("p")
    cal.setAttribute("class", "cal")
    cal.innerText = item["cal"]
    let price = document.createElement("p")
    price.setAttribute("class", "price")
    price.innerText = item["price"]

    div.append(img,title,cal,price)
    link.append(div)
    menuItems.append(link)
}