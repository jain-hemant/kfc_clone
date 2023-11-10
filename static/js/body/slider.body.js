let sliderImg = document.querySelector("#sliderImg")
let sliderImgText = document.querySelector("#sliderImgText")
export const images = [
    '<img class="img1" src="static/images/slider/large-screen/ls1_PUBG_Desktop_Home_Hero_1440x396__1_.jpg" alt=" " />',
    '<img class="img2" src="static/images/slider/large-screen/ls2_Wings_V2.jpg" alt=""/>',
    '<img class="img3" src="static/images/slider/large-screen/ls3_Desktop_Fill_Up_V2.jpg" alt=""/>',
    '<img class="img2" src="static/images/slider/large-screen/ls4_KFC-holiday-banner-v2.jpg" alt=""/>',
    '<img class="img3" src="static/images/slider/large-screen/ls5_Desktop_1440-x-396_w_stripes-10-17.png" alt=""/>',
]
export  const imageText = [
    '<p>Mobile and console in-game reward codes exclusively available with purchase of eligible meal on KFC.com or the KFC app between 11/6 and 12/10.  Offer not available in restaurant. Offer not valid with purchase of Kids’ Meal. Customer will receive set of codes to the email provided at time of eligible purchase. Codes must be redeemed by 12/10. Limit one set of redemption codes per person. Only U.S. orders eligible. Canceled orders not eligible. Must be 18+. Digital ordering available at participating locations. PUBG or PUBG Mobile account required for in-game rewards. BATTLEGROUNDS and PUBG MOBILE are registered trademarks of KRAFTON, Inc. Pepsi-Cola is a registered trademark of PepsiCo, Inc. See www.kfcxpubg.com and https://www.kfc.com/newsroom/pubg-faq for more information. </p>',
    '<p> Prices and participation may vary. Prices higher on third party ordering websites/apps. Tax, tips and fees extra. </p>',
    '<p> Prices and participation may vary. Taxes, tips and fees extra. Offer not available on third party ordering websites/apps. Includes: 12 nuggets, 4pcs nuggets, 2 ind. Fries, 4 biscuits, 4 sauces. No substitutions. Mobile ordering available at participating KFC. </p>',
    '<p> </p>',
    '<p> Prices and participation may vary. Starry is a registered trademark of Portfolio Concentrate Solutions UC. </p>',
]
sliderImg.innerHTML = images[0]
sliderImgText.innerHTML = imageText[0]
