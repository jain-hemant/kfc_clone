let imgSearch = "https://cdn4.iconfinder.com/data/icons/basic-ui-glyph-free/24/Search-256.png"
let imgAccount = "https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-256.png"
let loginPage = "../../../pages/account/login.html"

let imgBag = "https://cdn2.iconfinder.com/data/icons/flat-ui-free/200/bag.png"
export const rightHeader = `
    <div id="rightHeader">    
        <a id= "search" href=""><img src="${imgSearch}" height="30"></a>  
        <a id="account" href="${loginPage}"><img src="${imgAccount}" height="30"></a>      
        <a id="bag" href=""><img src="${imgBag}" height="30"></a>
        <button id="btnStartOrder">Start Order</button>
    </div>
`;

// const rightHeader = () => {
    // let header = document.getElementById("header")
    // let div = document.createElement("div")
    // let search = document.createElement("input")
    // search.setAttribute("submit")
    // let user = document.createElement("a")
    // user.setAttribute("href","www.google.com")
    // let bag = document.createElement("a")
    // bag.setAttribute("href","www.google.com")
    // let btnOrder = document.createElement("button")
    // btnOrder.innerText = "Start Order"
    // div.append(search,user,bag,btnOrder)
    // header.append(div)
    // return header
// }
// export { rightHeader }
// let text = "right header"
// export const rightHeader = `
// <p>
//     ${text}
// </p>
// `;