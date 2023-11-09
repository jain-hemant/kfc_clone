let buildNumber = "KFC09212023:8a14adcf"
let insta = "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/2_Media_social_website_instagram-256.png"
let fb = "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/1_Media_social_website_facebook-512.png"
let twitter = "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/12_Media_social_website_Twitter-512.png"
export const trademarkFooter = `
    <div id="tradmarkFooter"> 
        <div class="row">
            <a href=""> Privacy Policy </a>
            <a href=""> Terms of Use </a>
            <a href=""> Our Cookies and Ads </a>
            <a href=""> Do Not Sell or Share My Personal Information </a>
            <a href=""> Accessibility Statement </a>           
        </div>
        <div class="row"> 
            <a href=""> Copyright &copy;KFC Corporation 2023 Right Reserved </a>
        </div>
        <div class="row">
            <a href=""> <img src="${insta}" height="20px" alt="Instagram" > </a>
            <a href=""> <img src="${fb}" height="20px" alt="Facebook"></a>
            <a href=""> <img src="${twitter}" height="20px" alt="Twitter"> </a>
        </div>  
        
    </div>

    <p id="build"> Build: ${buildNumber} </p> 

`