function tagText(tagid,text){
    document.querySelector(tagid).innerHTML = text
}
function imgSrc(imgid,source){
    document.querySelector(imgid).src=source
}

tagText("#title","Platypus")
imgSrc("#header_img","./assets/images/platplus-header.jpg")
imgSrc("#platplus1","./assets/images/Platplus2.jpg")
imgSrc("#platplus2","./assets/images/Platplus3.jpg")
tagText("#text1","The platypus (Ornithorhynchus anatinus) is among nature's most unlikely animals. In fact, the first scientists to examine a specimen believed they were the victims of a hoax. The animal is best described as a hodgepodge of more familiar species: the duck (bill and webbed feet), beaver (tail), and otter (body and fur). Males are also venomous. They have sharp stingers on the heels of their rear feet and can use them to deliver a strong toxic blow to any foe.")
tagText("#text2","Platypuses hunt underwater, where they swim gracefully by paddling with their front webbed feet and steering with their hind feet and beaverlike tail. Folds of skin cover their eyes and ears to prevent water from entering, and the nostrils close with a watertight seal. In this posture, a platypus can remain submerged for a minute or two and employ its sensitive bill to find food.</br> These Australian mammals are bottom feeders. They scoop up insects and larvae, shellfish, and worms in their bill along with bits of gravel and mud from the bottom. All this material is stored in cheek pouches and, at the surface, mashed for consumption. Platypuses do not have teeth, so the bits of gravel help them to “chew” their meal.")
tagText("#footer_text","By Victor Campos")
imgSrc("#img_footer","./assets/images/the-platypus-cartoon-detective-clipart.png")