import {aboutFooter} from "./about.footer.js"
import {linkFooter} from "./link.footer.js"
import {trademarkFooter} from "./tradmark.footer.js"
let footer = document.getElementById("footer")
const compileFooter = `
    <div id="compileFooter"> 
    ${aboutFooter}
    ${linkFooter}
    ${trademarkFooter}
    </div>

`
footer.innerHTML = compileFooter
