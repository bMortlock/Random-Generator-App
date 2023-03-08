import FEIMAGES from '../../Images/FireEmblemIndex';

export default function FireEmblem() {
    var myArray = [
    "Vander",
    "Clanne",
    "Framme"]
    
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem2 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem3 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem4 = myArray[Math.floor(Math.random()*myArray.length)];
    var Image2;
    var Image3;
    var Image4;



    if ((randomItem === "Vander")){
       Image2 = <img src={FEIMAGES.Vander} alt="Vander" className="FEchar"/>
     }   else if ((randomItem === "Clanne")){
       Image2 = <img src={FEIMAGES.Clanne} alt="Clanne" className="FEchar"/>
     }  else if ((randomItem === "Framme")){
       Image2 = <img src={FEIMAGES.Framme} alt="Framme" className="FEchar"/>
     }
    
    return( 
        <div>
    <h1>Fire Emblem</h1>


    <img src={FEIMAGES.Alear} alt="Alear" className="FEchar"/>
Alear

{Image2}
{randomItem}
</div>
    

    )
}