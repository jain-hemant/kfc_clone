import { leftHeader } from "./left.header.js";
import { rightHeader } from "./right.header.js";
let header = document.getElementById("header")
let iconLocation = "https://cdn4.iconfinder.com/data/icons/essentials-72/24/025_-_Location-256.png"
const compileHeader = `    
    <div id="mainHeader">
        ${leftHeader}
        ${rightHeader}    
    </div>
    <div id="startOrder">
        <img src="${iconLocation}" height="20" />
        <span>Start an Order for Pickup or Delivery</span>
    </div>
`
header.innerHTML = compileHeader

{/* <span class="horizBar"> <span>
    <span class="horizBar"> <span>
    <span class="horizBar"> <span></span> */}