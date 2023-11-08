import { leftHeader } from "./left.header.js";
import { rightHeader } from "./right.header.js";
let header = document.getElementById("header")
const finalHeader = `
    <div id="mainHeader">
    ${leftHeader}
    ${rightHeader}    
    </div>
`
header.innerHTML = finalHeader