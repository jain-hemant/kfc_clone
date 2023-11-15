import { leftHeader } from "./left.header.js";
import { rightHeader } from "./right.header.js";
// import redBar from "../../images/svg/redBar.svg";
// import redBar from "static/images/svg/redBar.svg";
let header = document.getElementById("header")
let iconLocation = "https://cdn4.iconfinder.com/data/icons/essentials-72/24/025_-_Location-256.png"
const redBarSVGContent = `
    <path class="strip-1" d="M0 0h8v20H0z" style="fill: red;"></path>
    <path class="strip-2" d="M16 0h8v20h-8z" style="fill: red;"></path>
    <path class="strip-3" d="M32 0h8v20h-8z" style="fill: red;" ></path>
`;
const compileHeader = `    
    <div id="mainHeader">        
        <svg xmlns="http://www.w3.org/2000/svg" id="svgHeaderLogo" >
            ${redBarSVGContent}
        </svg>
        ${leftHeader}
        ${rightHeader}    
    </div>
    <div id="startOrder">
        <img src="${iconLocation}" height="20" />
        <span>Start an Order for Pickup or Delivery</span>
    </div>
`
header.innerHTML = compileHeader





