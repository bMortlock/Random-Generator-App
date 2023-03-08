
import IMAGES from '../../Images/DigimonIndex';
import './Digimon.css'
import '../../Fonts/Pixel Digivolve.otf'

export default function Digimon() {
    var myArray = ["leopardmon",
    "dorugoramon",
    "neptunemon",
    "hiandromon",
    "pilevolcamon",
    "barbamon",
    "platinumnumemon",
    "princemamemon",
    "plesiomon",
    "beelzemonbm",
    "belphemonsm",
    "hououmon",
    "magnadramon",
    "boltmon",
    "mastemon",
    "marineangemon",
    "minervamon",
    "miragegaogamonbm",
    "megidramon",
    "metaletemon",
    "merukimon",
    "rusttyranomon",
    "leviamon",
    "lilithmon",
    "ravemonbm",
    "crusadermon",
    "rosemonbm",
    "lotosmon",
    "armageddemon",
    "arcadiamonultra",
    "alphamonouryuken",
    "imperialdramonpm",
    "examon",
    "omnimon",
    "omnimonzwart",
    "chaosmon",
    "chaosmonva",
    "susanomon",
    "gallantmoncm",
    "belphemonrm",
    "lucemonsm",
    "magnamon",
    "rapidmonarmor",
    "omnishoutmon",
    "apocalymon",
    "sistermonbawake",
    "sistermoncawake",
    "ulforceveedramon",
    "ebemon",
    "vikemon",
    "valkyrimon",
    "venommyotismon",
    "ophanimon",
    "gaiomon",
    "chaosgallantmon",
    "chaosdramon",
    "gankoomon",
    "kingetemon",
    "kuzuhamon",
    "grankuwagamon",
    "grandracmon",
    "groundlocomon",
    "gryphomon",
    "craniamon",
    "kerpymonblk",
    "kerpymongood",
    "goldramon",
    "saberleomon",
    "sakuyamon",
    "jesmon",
    "shinegreymonbm",
    "justimon",
    "kentaurosmon",
    "seraphimon",
    "megagargomon",
    "tigervespamon",
    "titamon",
    "tyrantkabuterimon",
    "dianamon",
    "creepymon",
    "dynasmon",
    "durandamon"]
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem2 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem3 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem4 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem5 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem6 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem7 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem8 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem9 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem10 = myArray[Math.floor(Math.random()*myArray.length)];
    var randomItem11 = myArray[Math.floor(Math.random()*myArray.length)];
    var Image1;
    var Image2;
    var Image3;
    var Image4;
    var Image5;
    var Image6;
    var Image7;
    var Image8;
    var Image9;
    var Image10;
    var Image11;

    

   

    if (randomItem === "ulforceveedramon"){
       Image1 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "ebemon")){
      Image1 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
    }   else if ((randomItem === "vikemon")){
      Image1 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "valkyrimon")){
      Image1 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "venommyotismon")){
      Image1 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "ophanimon")){
      Image1 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "gaiomon")){
      Image1 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "chaosgallantmon")){
      Image1 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "chaosdramon")){
      Image1 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "gankoomon")){
      Image1 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "kingetemon")){
      Image1 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "kuzuhamon")){
      Image1 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "grankuwagamon")){
      Image1 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "grandracmon")){
      Image1 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "groundlocomon")){
      Image1 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "gryphomon")){
      Image1 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "craniamon")){
      Image1 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "kerpymonblk")){
      Image1 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "kerpymongood")){
      Image1 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "goldramon")){
      Image1 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "saberleomon")){
      Image1 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "sakuyamon")){
      Image1 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "jesmon")){
      Image1 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
    }  else if ((randomItem === "shinegreymonbm")){
      Image1 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "justimon")){
      Image1 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "kentaurosmon")){
      Image1 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "seraphimon")){
      Image1 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "megagargomon")){
      Image1 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "tigervespamon")){
      Image1 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "titamon")){
      Image1 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "tyrantkabuterimon")){
      Image1 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "dianamon")){
      Image1 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "creepymon")){
      Image1 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "dynasmon")){
      Image1 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "durandamon")){
      Image1 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "leopardmon")){
      Image1 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "dorugoramon")){
      Image1 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "neptunemon")){
      Image1 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "hiandromon")){
      Image1 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "pilevolcamon")){
      Image1 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "barbamon")){
      Image1 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "platinumnumemon")){
      Image1 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "princemamemon")){
      Image1 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "plesiomon")){
      Image1 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "beelzemonbm")){
      Image1 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "belphemonsm")){
      Image1 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "hououmon")){
      Image1 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "magnadramon")){
      Image1 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "boltmon")){
      Image1 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "mastemon")){
      Image1 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "marineangemon")){
      Image1 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "minervamon")){
      Image1 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "miragegaogamonbm")){
      Image1 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "megidramon")){
      Image1 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "metaletemon")){
      Image1 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "merukimon")){
      Image1 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "rusttyranomon")){
      Image1 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "leviamon")){
      Image1 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "lilithmon")){
      Image1 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "ravemonbm")){
      Image1 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "crusadermon")){
      Image1 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "rosemonbm")){
      Image1 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "lotosmon")){
      Image1 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "armageddemon")){
      Image1 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "arcadiamonultra")){
      Image1 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "alphamonouryuken")){
      Image1 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "imperialdramonpm")){
      Image1 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "examon")){
      Image1 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "omnimon")){
      Image1 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "omnimonzwart")){
      Image1 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "chaosmon")){
      Image1 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "chaosmonva")){
      Image1 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "susanomon")){
      Image1 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "gallantmoncm")){
      Image1 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "belphemonrm")){
      Image1 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "lucemonsm")){
      Image1 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "magnamon")){
      Image1 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "rapidmonarmor")){
      Image1 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "omnishoutmon")){
      Image1 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "apocalymon")){
      Image1 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "sistermonbawake")){
      Image1 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
    } else if ((randomItem === "sistermoncawake")){
      Image1 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
    }

    if (randomItem2 === "ulforceveedramon"){
      Image2 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "ebemon")){
     Image2 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
   }   else if ((randomItem2 === "vikemon")){
     Image2 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "valkyrimon")){
     Image2 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "venommyotismon")){
     Image2 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "ophanimon")){
     Image2 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "gaiomon")){
     Image2 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "chaosgallantmon")){
     Image2 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "chaosdramon")){
     Image2 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "gankoomon")){
     Image2 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "kingetemon")){
     Image2 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "kuzuhamon")){
     Image2 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "grankuwagamon")){
     Image2 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "grandracmon")){
     Image2 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "groundlocomon")){
     Image2 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "gryphomon")){
     Image2 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "craniamon")){
     Image2 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "kerpymonblk")){
     Image2 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "kerpymongood")){
     Image2 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "goldramon")){
     Image2 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "saberleomon")){
     Image2 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "sakuyamon")){
     Image2 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "jesmon")){
     Image2 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem2 === "shinegreymonbm")){
     Image2 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "justimon")){
     Image2 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "kentaurosmon")){
     Image2 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "seraphimon")){
     Image2 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "megagargomon")){
     Image2 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "tigervespamon")){
     Image2 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "titamon")){
     Image2 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "tyrantkabuterimon")){
     Image2 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "dianamon")){
     Image2 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "creepymon")){
     Image2 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "dynasmon")){
     Image2 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "durandamon")){
     Image2 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "leopardmon")){
     Image2 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "dorugoramon")){
     Image2 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "neptunemon")){
     Image2 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "hiandromon")){
     Image2 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "pilevolcamon")){
     Image2 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "barbamon")){
     Image2 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "platinumnumemon")){
     Image2 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "princemamemon")){
     Image2 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "plesiomon")){
     Image2 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "beelzemonbm")){
     Image2 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "belphemonsm")){
     Image2 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "hououmon")){
     Image2 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "magnadramon")){
     Image2 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "boltmon")){
     Image2 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "mastemon")){
     Image2 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "marineangemon")){
     Image2 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "minervamon")){
     Image2 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "miragegaogamonbm")){
     Image2 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "megidramon")){
     Image2 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "metaletemon")){
     Image2 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "merukimon")){
     Image2 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "rusttyranomon")){
     Image2 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "leviamon")){
     Image2 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "lilithmon")){
     Image2 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "ravemonbm")){
     Image2 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "crusadermon")){
     Image2 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "rosemonbm")){
     Image2 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "lotosmon")){
     Image2 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "armageddemon")){
     Image2 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "arcadiamonultra")){
     Image2 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "alphamonouryuken")){
     Image2 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "imperialdramonpm")){
     Image2 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "examon")){
     Image2 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "omnimon")){
     Image2 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "omnimonzwart")){
     Image2 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "chaosmon")){
     Image2 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "chaosmonva")){
     Image2 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "susanomon")){
     Image2 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "gallantmoncm")){
     Image2 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "belphemonrm")){
     Image2 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "lucemonsm")){
     Image2 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "magnamon")){
     Image2 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "rapidmonarmor")){
     Image2 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "omnishoutmon")){
     Image2 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "apocalymon")){
     Image2 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "sistermonbawake")){
     Image2 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
   } else if ((randomItem2 === "sistermoncawake")){
     Image2 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
   }
     
   if (randomItem3 === "ulforceveedramon"){
      Image3 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "ebemon")){
     Image3 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
   }   else if ((randomItem3 === "vikemon")){
     Image3 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "valkyrimon")){
     Image3 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "venommyotismon")){
     Image3 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "ophanimon")){
     Image3 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "gaiomon")){
     Image3 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "chaosgallantmon")){
     Image3 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "chaosdramon")){
     Image3 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "gankoomon")){
     Image3 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "kingetemon")){
     Image3 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "kuzuhamon")){
     Image3 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "grankuwagamon")){
     Image3 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "grandracmon")){
     Image3 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "groundlocomon")){
     Image3 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "gryphomon")){
     Image3 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "craniamon")){
     Image3 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "kerpymonblk")){
     Image3 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "kerpymongood")){
     Image3 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "goldramon")){
     Image3 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "saberleomon")){
     Image3 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "sakuyamon")){
     Image3 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "jesmon")){
     Image3 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem3 === "shinegreymonbm")){
     Image3 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "justimon")){
     Image3 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "kentaurosmon")){
     Image3 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "seraphimon")){
     Image3 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "megagargomon")){
     Image3 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "tigervespamon")){
     Image3 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "titamon")){
     Image3 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "tyrantkabuterimon")){
     Image3 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "dianamon")){
     Image3 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "creepymon")){
     Image3 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "dynasmon")){
     Image3 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "durandamon")){
     Image3 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "leopardmon")){
     Image3 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "dorugoramon")){
     Image3 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "neptunemon")){
     Image3 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "hiandromon")){
     Image3 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "pilevolcamon")){
     Image3 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "barbamon")){
     Image3 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "platinumnumemon")){
     Image3 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "princemamemon")){
     Image3 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "plesiomon")){
     Image3 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "beelzemonbm")){
     Image3 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "belphemonsm")){
     Image3 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "hououmon")){
     Image3 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "magnadramon")){
     Image3 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "boltmon")){
     Image3 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "mastemon")){
     Image3 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "marineangemon")){
     Image3 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "minervamon")){
     Image3 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "miragegaogamonbm")){
     Image3 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "megidramon")){
     Image3 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "metaletemon")){
     Image3 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "merukimon")){
     Image3 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "rusttyranomon")){
     Image3 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "leviamon")){
     Image3 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "lilithmon")){
     Image3 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "ravemonbm")){
     Image3 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "crusadermon")){
     Image3 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "rosemonbm")){
     Image3 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "lotosmon")){
     Image3 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "armageddemon")){
     Image3 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "arcadiamonultra")){
     Image3 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "alphamonouryuken")){
     Image3 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "imperialdramonpm")){
     Image3 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "examon")){
     Image3 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "omnimon")){
     Image3 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "omnimonzwart")){
     Image3 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "chaosmon")){
     Image3 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "chaosmonva")){
     Image3 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "susanomon")){
     Image3 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "gallantmoncm")){
     Image3 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "belphemonrm")){
     Image3 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "lucemonsm")){
     Image3 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "magnamon")){
     Image3 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "rapidmonarmor")){
     Image3 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "omnishoutmon")){
     Image3 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "apocalymon")){
     Image3 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "sistermonbawake")){
     Image3 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
   } else if ((randomItem3 === "sistermoncawake")){
     Image3 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
   }

   if (randomItem4 === "ulforceveedramon"){
      Image4 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "ebemon")){
     Image4 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
   }   else if ((randomItem4 === "vikemon")){
     Image4 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "valkyrimon")){
     Image4 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "venommyotismon")){
     Image4 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "ophanimon")){
     Image4 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "gaiomon")){
     Image4 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "chaosgallantmon")){
     Image4 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "chaosdramon")){
     Image4 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "gankoomon")){
     Image4 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "kingetemon")){
     Image4 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "kuzuhamon")){
     Image4 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "grankuwagamon")){
     Image4 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "grandracmon")){
     Image4 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "groundlocomon")){
     Image4 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "gryphomon")){
     Image4 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "craniamon")){
     Image4 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "kerpymonblk")){
     Image4 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "kerpymongood")){
     Image4 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "goldramon")){
     Image4 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "saberleomon")){
     Image4 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "sakuyamon")){
     Image4 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "jesmon")){
     Image4 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem4 === "shinegreymonbm")){
     Image4 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "justimon")){
     Image4 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "kentaurosmon")){
     Image4 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "seraphimon")){
     Image4 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "megagargomon")){
     Image4 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "tigervespamon")){
     Image4 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "titamon")){
     Image4 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "tyrantkabuterimon")){
     Image4 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "dianamon")){
     Image4 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "creepymon")){
     Image4 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "dynasmon")){
     Image4 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "durandamon")){
     Image4 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "leopardmon")){
     Image4 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "dorugoramon")){
     Image4 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "neptunemon")){
     Image4 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "hiandromon")){
     Image4 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "pilevolcamon")){
     Image4 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "barbamon")){
     Image4 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "platinumnumemon")){
     Image4 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "princemamemon")){
     Image4 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "plesiomon")){
     Image4 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "beelzemonbm")){
     Image4 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "belphemonsm")){
     Image4 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "hououmon")){
     Image4 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "magnadramon")){
     Image4 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "boltmon")){
     Image4 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "mastemon")){
     Image4 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "marineangemon")){
     Image4 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "minervamon")){
     Image4 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "miragegaogamonbm")){
     Image4 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "megidramon")){
     Image4 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "metaletemon")){
     Image4 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "merukimon")){
     Image4 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "rusttyranomon")){
     Image4 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "leviamon")){
     Image4 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "lilithmon")){
     Image4 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "ravemonbm")){
     Image4 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "crusadermon")){
     Image4 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "rosemonbm")){
     Image4 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "lotosmon")){
     Image4 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "armageddemon")){
     Image4 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "arcadiamonultra")){
     Image4 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "alphamonouryuken")){
     Image4 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "imperialdramonpm")){
     Image4 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "examon")){
     Image4 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "omnimon")){
     Image4 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "omnimonzwart")){
     Image4 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "chaosmon")){
     Image4 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "chaosmonva")){
     Image4 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "susanomon")){
     Image4 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "gallantmoncm")){
     Image4 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "belphemonrm")){
     Image4 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "lucemonsm")){
     Image4 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "magnamon")){
     Image4 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "rapidmonarmor")){
     Image4 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "omnishoutmon")){
     Image4 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "apocalymon")){
     Image4 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "sistermonbawake")){
     Image4 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
   } else if ((randomItem4 === "sistermoncawake")){
     Image4 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
   }

   if (randomItem5 === "ulforceveedramon"){
      Image5 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "ebemon")){
     Image5 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
   }   else if ((randomItem5 === "vikemon")){
     Image5 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "valkyrimon")){
     Image5 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "venommyotismon")){
     Image5 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "ophanimon")){
     Image5 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "gaiomon")){
     Image5 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "chaosgallantmon")){
     Image5 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "chaosdramon")){
     Image5 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "gankoomon")){
     Image5 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "kingetemon")){
     Image5 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "kuzuhamon")){
     Image5 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "grankuwagamon")){
     Image5 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "grandracmon")){
     Image5 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "groundlocomon")){
     Image5 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "gryphomon")){
     Image5 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "craniamon")){
     Image5 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "kerpymonblk")){
     Image5 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "kerpymongood")){
     Image5 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "goldramon")){
     Image5 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "saberleomon")){
     Image5 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "sakuyamon")){
     Image5 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "jesmon")){
     Image5 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
   }  else if ((randomItem5 === "shinegreymonbm")){
     Image5 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "justimon")){
     Image5 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "kentaurosmon")){
     Image5 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "seraphimon")){
     Image5 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "megagargomon")){
     Image5 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "tigervespamon")){
     Image5 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "titamon")){
     Image5 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "tyrantkabuterimon")){
     Image5 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "dianamon")){
     Image5 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "creepymon")){
     Image5 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "dynasmon")){
     Image5 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "durandamon")){
     Image5 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "leopardmon")){
     Image5 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "dorugoramon")){
     Image5 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "neptunemon")){
     Image5 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "hiandromon")){
     Image5 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "pilevolcamon")){
     Image5 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "barbamon")){
     Image5 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "platinumnumemon")){
     Image5 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "princemamemon")){
     Image5 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "plesiomon")){
     Image5 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "beelzemonbm")){
     Image5 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "belphemonsm")){
     Image5 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "hououmon")){
     Image5 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "magnadramon")){
     Image5 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "boltmon")){
     Image5 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "mastemon")){
     Image5 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "marineangemon")){
     Image5 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "minervamon")){
     Image5 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "miragegaogamonbm")){
     Image5 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "megidramon")){
     Image5 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "metaletemon")){
     Image5 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "merukimon")){
     Image5 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "rusttyranomon")){
     Image5 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "leviamon")){
     Image5 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "lilithmon")){
     Image5 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "ravemonbm")){
     Image5 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "crusadermon")){
     Image5 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "rosemonbm")){
     Image5 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "lotosmon")){
     Image5 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "armageddemon")){
     Image5 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "arcadiamonultra")){
     Image5 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "alphamonouryuken")){
     Image5 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "imperialdramonpm")){
     Image5 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "examon")){
     Image5 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "omnimon")){
     Image5 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "omnimonzwart")){
     Image5 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "chaosmon")){
     Image5 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "chaosmonva")){
     Image5 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "susanomon")){
     Image5 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "gallantmoncm")){
     Image5 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "belphemonrm")){
     Image5 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "lucemonsm")){
     Image5 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "magnamon")){
     Image5 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "rapidmonarmor")){
     Image5 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "omnishoutmon")){
     Image5 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "apocalymon")){
     Image5 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "sistermonbawake")){
     Image5 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
   } else if ((randomItem5 === "sistermoncawake")){
     Image5 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
   }

   if (randomItem6 === "ulforceveedramon"){
    Image6 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "ebemon")){
   Image6 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
 }   else if ((randomItem6 === "vikemon")){
   Image6 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "valkyrimon")){
   Image6 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "venommyotismon")){
   Image6 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "ophanimon")){
   Image6 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "gaiomon")){
   Image6 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "chaosgallantmon")){
   Image6 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "chaosdramon")){
   Image6 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "gankoomon")){
   Image6 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "kingetemon")){
   Image6 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "kuzuhamon")){
   Image6 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "grankuwagamon")){
   Image6 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "grandracmon")){
   Image6 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "groundlocomon")){
   Image6 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "gryphomon")){
   Image6 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "craniamon")){
   Image6 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "kerpymonblk")){
   Image6 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "kerpymongood")){
   Image6 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "goldramon")){
   Image6 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "saberleomon")){
   Image6 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "sakuyamon")){
   Image6 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "jesmon")){
   Image6 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
 }  else if ((randomItem6 === "shinegreymonbm")){
   Image6 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "justimon")){
   Image6 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "kentaurosmon")){
   Image6 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "seraphimon")){
   Image6 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "megagargomon")){
   Image6 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "tigervespamon")){
   Image6 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "titamon")){
   Image6 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "tyrantkabuterimon")){
   Image6 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "dianamon")){
   Image6 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "creepymon")){
   Image6 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "dynasmon")){
   Image6 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "durandamon")){
   Image6 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "leopardmon")){
   Image6 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "dorugoramon")){
   Image6 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "neptunemon")){
   Image6 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "hiandromon")){
   Image6 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "pilevolcamon")){
   Image6 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "barbamon")){
   Image6 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "platinumnumemon")){
   Image6 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "princemamemon")){
   Image6 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "plesiomon")){
   Image6 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "beelzemonbm")){
   Image6 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "belphemonsm")){
   Image6 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "hououmon")){
   Image6 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "magnadramon")){
   Image6 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "boltmon")){
   Image6 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "mastemon")){
   Image6 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "marineangemon")){
   Image6 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "minervamon")){
   Image6 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "miragegaogamonbm")){
   Image6 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "megidramon")){
   Image6 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "metaletemon")){
   Image6 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "merukimon")){
   Image6 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "rusttyranomon")){
   Image6 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "leviamon")){
   Image6 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "lilithmon")){
   Image6 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "ravemonbm")){
   Image6 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "crusadermon")){
   Image6 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "rosemonbm")){
   Image6 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "lotosmon")){
   Image6 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "armageddemon")){
   Image6 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "arcadiamonultra")){
   Image6 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "alphamonouryuken")){
   Image6 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "imperialdramonpm")){
   Image6 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "examon")){
   Image6 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "omnimon")){
   Image6 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "omnimonzwart")){
   Image6 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "chaosmon")){
   Image6 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "chaosmonva")){
   Image6 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "susanomon")){
   Image6 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "gallantmoncm")){
   Image6 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "belphemonrm")){
   Image6 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "lucemonsm")){
   Image6 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "magnamon")){
   Image6 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "rapidmonarmor")){
   Image6 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "omnishoutmon")){
   Image6 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "apocalymon")){
   Image6 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "sistermonbawake")){
   Image6 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
 } else if ((randomItem6 === "sistermoncawake")){
   Image6 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
 }
 if (randomItem7 === "ulforceveedramon"){
  Image7 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "ebemon")){
 Image7 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
}   else if ((randomItem7 === "vikemon")){
 Image7 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "valkyrimon")){
 Image7 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "venommyotismon")){
 Image7 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "ophanimon")){
 Image7 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "gaiomon")){
 Image7 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "chaosgallantmon")){
 Image7 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "chaosdramon")){
 Image7 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "gankoomon")){
 Image7 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "kingetemon")){
 Image7 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "kuzuhamon")){
 Image7 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "grankuwagamon")){
 Image7 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "grandracmon")){
 Image7 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "groundlocomon")){
 Image7 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "gryphomon")){
 Image7 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "craniamon")){
 Image7 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "kerpymonblk")){
 Image7 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "kerpymongood")){
 Image7 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "goldramon")){
 Image7 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "saberleomon")){
 Image7 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "sakuyamon")){
 Image7 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "jesmon")){
 Image7 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem7 === "shinegreymonbm")){
 Image7 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "justimon")){
 Image7 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "kentaurosmon")){
 Image7 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "seraphimon")){
 Image7 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "megagargomon")){
 Image7 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "tigervespamon")){
 Image7 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "titamon")){
 Image7 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "tyrantkabuterimon")){
 Image7 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "dianamon")){
 Image7 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "creepymon")){
 Image7 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "dynasmon")){
 Image7 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "durandamon")){
 Image7 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "leopardmon")){
 Image7 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "dorugoramon")){
 Image7 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "neptunemon")){
 Image7 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "hiandromon")){
 Image7 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "pilevolcamon")){
 Image7 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "barbamon")){
 Image7 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "platinumnumemon")){
 Image7 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "princemamemon")){
 Image7 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "plesiomon")){
 Image7 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "beelzemonbm")){
 Image7 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "belphemonsm")){
 Image7 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "hououmon")){
 Image7 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "magnadramon")){
 Image7 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "boltmon")){
 Image7 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "mastemon")){
 Image7 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "marineangemon")){
 Image7 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "minervamon")){
 Image7 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "miragegaogamonbm")){
 Image7 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "megidramon")){
 Image7 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "metaletemon")){
 Image7 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "merukimon")){
 Image7 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "rusttyranomon")){
 Image7 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "leviamon")){
 Image7 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "lilithmon")){
 Image7 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "ravemonbm")){
 Image7 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "crusadermon")){
 Image7 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "rosemonbm")){
 Image7 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "lotosmon")){
 Image7 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "armageddemon")){
 Image7 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "arcadiamonultra")){
 Image7 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "alphamonouryuken")){
 Image7 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "imperialdramonpm")){
 Image7 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "examon")){
 Image7 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "omnimon")){
 Image7 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "omnimonzwart")){
 Image7 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "chaosmon")){
 Image7 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "chaosmonva")){
 Image7 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "susanomon")){
 Image7 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "gallantmoncm")){
 Image7 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "belphemonrm")){
 Image7 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "lucemonsm")){
 Image7 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "magnamon")){
 Image7 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "rapidmonarmor")){
 Image7 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "omnishoutmon")){
 Image7 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "apocalymon")){
 Image7 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "sistermonbawake")){
 Image7 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
} else if ((randomItem7 === "sistermoncawake")){
 Image7 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
}

if (randomItem8 === "ulforceveedramon"){
  Image8 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "ebemon")){
 Image8 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
}   else if ((randomItem8 === "vikemon")){
 Image8 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "valkyrimon")){
 Image8 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "venommyotismon")){
 Image8 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "ophanimon")){
 Image8 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "gaiomon")){
 Image8 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "chaosgallantmon")){
 Image8 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "chaosdramon")){
 Image8 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "gankoomon")){
 Image8 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "kingetemon")){
 Image8 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "kuzuhamon")){
 Image8 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "grankuwagamon")){
 Image8 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "grandracmon")){
 Image8 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "groundlocomon")){
 Image8 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "gryphomon")){
 Image8 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "craniamon")){
 Image8 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "kerpymonblk")){
 Image8 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "kerpymongood")){
 Image8 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "goldramon")){
 Image8 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "saberleomon")){
 Image8 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "sakuyamon")){
 Image8 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "jesmon")){
 Image8 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem8 === "shinegreymonbm")){
 Image8 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "justimon")){
 Image8 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "kentaurosmon")){
 Image8 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "seraphimon")){
 Image8 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "megagargomon")){
 Image8 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "tigervespamon")){
 Image8 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "titamon")){
 Image8 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "tyrantkabuterimon")){
 Image8 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "dianamon")){
 Image8 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "creepymon")){
 Image8 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "dynasmon")){
 Image8 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "durandamon")){
 Image8 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "leopardmon")){
 Image8 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "dorugoramon")){
 Image8 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "neptunemon")){
 Image8 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "hiandromon")){
 Image8 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "pilevolcamon")){
 Image8 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "barbamon")){
 Image8 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "platinumnumemon")){
 Image8 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "princemamemon")){
 Image8 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "plesiomon")){
 Image8 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "beelzemonbm")){
 Image8 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "belphemonsm")){
 Image8 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "hououmon")){
 Image8 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "magnadramon")){
 Image8 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "boltmon")){
 Image8 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "mastemon")){
 Image8 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "marineangemon")){
 Image8 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "minervamon")){
 Image8 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "miragegaogamonbm")){
 Image8 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "megidramon")){
 Image8 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "metaletemon")){
 Image8 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "merukimon")){
 Image8 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "rusttyranomon")){
 Image8 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "leviamon")){
 Image8 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "lilithmon")){
 Image8 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "ravemonbm")){
 Image8 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "crusadermon")){
 Image8 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "rosemonbm")){
 Image8 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "lotosmon")){
 Image8 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "armageddemon")){
 Image8 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "arcadiamonultra")){
 Image8 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "alphamonouryuken")){
 Image8 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "imperialdramonpm")){
 Image8 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "examon")){
 Image8 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "omnimon")){
 Image8 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "omnimonzwart")){
 Image8 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "chaosmon")){
 Image8 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "chaosmonva")){
 Image8 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "susanomon")){
 Image8 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "gallantmoncm")){
 Image8 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "belphemonrm")){
 Image8 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "lucemonsm")){
 Image8 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "magnamon")){
 Image8 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "rapidmonarmor")){
 Image8 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "omnishoutmon")){
 Image8 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "apocalymon")){
 Image8 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "sistermonbawake")){
 Image8 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
} else if ((randomItem8 === "sistermoncawake")){
 Image8 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
}

if (randomItem9 === "ulforceveedramon"){
  Image9 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "ebemon")){
 Image9 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
}   else if ((randomItem9 === "vikemon")){
 Image9 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "valkyrimon")){
 Image9 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "venommyotismon")){
 Image9 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "ophanimon")){
 Image9 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "gaiomon")){
 Image9 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "chaosgallantmon")){
 Image9 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "chaosdramon")){
 Image9 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "gankoomon")){
 Image9 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "kingetemon")){
 Image9 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "kuzuhamon")){
 Image9 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "grankuwagamon")){
 Image9 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "grandracmon")){
 Image9 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "groundlocomon")){
 Image9 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "gryphomon")){
 Image9 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "craniamon")){
 Image9 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "kerpymonblk")){
 Image9 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "kerpymongood")){
 Image9 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "goldramon")){
 Image9 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "saberleomon")){
 Image9 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "sakuyamon")){
 Image9 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "jesmon")){
 Image9 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem9 === "shinegreymonbm")){
 Image9 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "justimon")){
 Image9 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "kentaurosmon")){
 Image9 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "seraphimon")){
 Image9 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "megagargomon")){
 Image9 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "tigervespamon")){
 Image9 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "titamon")){
 Image9 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "tyrantkabuterimon")){
 Image9 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "dianamon")){
 Image9 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "creepymon")){
 Image9 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "dynasmon")){
 Image9 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "durandamon")){
 Image9 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "leopardmon")){
 Image9 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "dorugoramon")){
 Image9 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "neptunemon")){
 Image9 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "hiandromon")){
 Image9 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "pilevolcamon")){
 Image9 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "barbamon")){
 Image9 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "platinumnumemon")){
 Image9 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "princemamemon")){
 Image9 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "plesiomon")){
 Image9 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "beelzemonbm")){
 Image9 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "belphemonsm")){
 Image9 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "hououmon")){
 Image9 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "magnadramon")){
 Image9 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "boltmon")){
 Image9 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "mastemon")){
 Image9 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "marineangemon")){
 Image9 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "minervamon")){
 Image9 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "miragegaogamonbm")){
 Image9 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "megidramon")){
 Image9 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "metaletemon")){
 Image9 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "merukimon")){
 Image9 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "rusttyranomon")){
 Image9 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "leviamon")){
 Image9 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "lilithmon")){
 Image9 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "ravemonbm")){
 Image9 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "crusadermon")){
 Image9 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "rosemonbm")){
 Image9 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "lotosmon")){
 Image9 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "armageddemon")){
 Image9 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "arcadiamonultra")){
 Image9 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "alphamonouryuken")){
 Image9 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "imperialdramonpm")){
 Image9 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "examon")){
 Image9 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "omnimon")){
 Image9 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "omnimonzwart")){
 Image9 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "chaosmon")){
 Image9 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "chaosmonva")){
 Image9 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "susanomon")){
 Image9 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "gallantmoncm")){
 Image9 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "belphemonrm")){
 Image9 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "lucemonsm")){
 Image9 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "magnamon")){
 Image9 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "rapidmonarmor")){
 Image9 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "omnishoutmon")){
 Image9 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "apocalymon")){
 Image9 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "sistermonbawake")){
 Image9 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
} else if ((randomItem9 === "sistermoncawake")){
 Image9 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
}

if (randomItem10 === "ulforceveedramon"){
  Image10 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "ebemon")){
 Image10 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
}   else if ((randomItem10 === "vikemon")){
 Image10 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "valkyrimon")){
 Image10 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "venommyotismon")){
 Image10 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "ophanimon")){
 Image10 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "gaiomon")){
 Image10 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "chaosgallantmon")){
 Image10 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "chaosdramon")){
 Image10 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "gankoomon")){
 Image10 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "kingetemon")){
 Image10 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "kuzuhamon")){
 Image10 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "grankuwagamon")){
 Image10 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "grandracmon")){
 Image10 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "groundlocomon")){
 Image10 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "gryphomon")){
 Image10 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "craniamon")){
 Image10 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "kerpymonblk")){
 Image10 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "kerpymongood")){
 Image10 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "goldramon")){
 Image10 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "saberleomon")){
 Image10 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "sakuyamon")){
 Image10 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "jesmon")){
 Image10 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem10 === "shinegreymonbm")){
 Image10 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "justimon")){
 Image10 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "kentaurosmon")){
 Image10 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "seraphimon")){
 Image10 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "megagargomon")){
 Image10 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "tigervespamon")){
 Image10 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "titamon")){
 Image10 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "tyrantkabuterimon")){
 Image10 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "dianamon")){
 Image10 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "creepymon")){
 Image10 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "dynasmon")){
 Image10 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "durandamon")){
 Image10 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "leopardmon")){
 Image10 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "dorugoramon")){
 Image10 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "neptunemon")){
 Image10 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "hiandromon")){
 Image10 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "pilevolcamon")){
 Image10 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "barbamon")){
 Image10 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "platinumnumemon")){
 Image10 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "princemamemon")){
 Image10 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "plesiomon")){
 Image10 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "beelzemonbm")){
 Image10 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "belphemonsm")){
 Image10 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "hououmon")){
 Image10 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "magnadramon")){
 Image10 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "boltmon")){
 Image10 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "mastemon")){
 Image10 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "marineangemon")){
 Image10 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "minervamon")){
 Image10 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "miragegaogamonbm")){
 Image10 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "megidramon")){
 Image10 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "metaletemon")){
 Image10 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "merukimon")){
 Image10 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "rusttyranomon")){
 Image10 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "leviamon")){
 Image10 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "lilithmon")){
 Image10 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "ravemonbm")){
 Image10 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "crusadermon")){
 Image10 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "rosemonbm")){
 Image10 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "lotosmon")){
 Image10 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "armageddemon")){
 Image10 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "arcadiamonultra")){
 Image10 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "alphamonouryuken")){
 Image10 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "imperialdramonpm")){
 Image10 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "examon")){
 Image10 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "omnimon")){
 Image10 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "omnimonzwart")){
 Image10 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "chaosmon")){
 Image10 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "chaosmonva")){
 Image10 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "susanomon")){
 Image10 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "gallantmoncm")){
 Image10 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "belphemonrm")){
 Image10 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "lucemonsm")){
 Image10 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "magnamon")){
 Image10 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "rapidmonarmor")){
 Image10 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "omnishoutmon")){
 Image10 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "apocalymon")){
 Image10 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "sistermonbawake")){
 Image10 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
} else if ((randomItem10 === "sistermoncawake")){
 Image10 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
}

if (randomItem11 === "ulforceveedramon"){
  Image11 = <img src={IMAGES.UlforceVeedramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "ebemon")){
 Image11 = <img src={IMAGES.Ebemon} alt="Digimon" className="digimon"/>
}   else if ((randomItem11 === "vikemon")){
 Image11 = <img src={IMAGES.Vikemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "valkyrimon")){
 Image11 = <img src={IMAGES.Valkyrimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "venommyotismon")){
 Image11 = <img src={IMAGES.VenomMyotismon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "ophanimon")){
 Image11 = <img src={IMAGES.Ophanimon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "gaiomon")){
 Image11 = <img src={IMAGES.Gaiomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "chaosgallantmon")){
 Image11 = <img src={IMAGES.ChaosGallantmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "chaosdramon")){
 Image11 = <img src={IMAGES.Chaosdramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "gankoomon")){
 Image11 = <img src={IMAGES.Gankoomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "kingetemon")){
 Image11 = <img src={IMAGES.KingEtemon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "kuzuhamon")){
 Image11 = <img src={IMAGES.Kuzuhamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "grankuwagamon")){
 Image11 = <img src={IMAGES.GranKuwagamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "grandracmon")){
 Image11 = <img src={IMAGES.Grandracmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "groundlocomon")){
 Image11 = <img src={IMAGES.Groundlocomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "gryphomon")){
 Image11 = <img src={IMAGES.Gryphomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "craniamon")){
 Image11 = <img src={IMAGES.Craniamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "kerpymonblk")){
 Image11 = <img src={IMAGES.KerpymonB} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "kerpymongood")){
 Image11 = <img src={IMAGES.KerpymonG} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "goldramon")){
 Image11 = <img src={IMAGES.Goldramon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "saberleomon")){
 Image11 = <img src={IMAGES.Saberleomon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "sakuyamon")){
 Image11 = <img src={IMAGES.Sakuyamon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "jesmon")){
 Image11 = <img src={IMAGES.Jesmon} alt="Digimon" className="digimon"/>
}  else if ((randomItem11 === "shinegreymonbm")){
 Image11 = <img src={IMAGES.ShinegreymonBM} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "justimon")){
 Image11 = <img src={IMAGES.Justimon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "kentaurosmon")){
 Image11 = <img src={IMAGES.Kentaurosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "seraphimon")){
 Image11 = <img src={IMAGES.Seraphimon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "megagargomon")){
 Image11 = <img src={IMAGES.Megagargomon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "tigervespamon")){
 Image11 = <img src={IMAGES.Tigervespamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "titamon")){
 Image11 = <img src={IMAGES.Titamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "tyrantkabuterimon")){
 Image11 = <img src={IMAGES.Tyrantkabuterimon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "dianamon")){
 Image11 = <img src={IMAGES.Dianamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "creepymon")){
 Image11 = <img src={IMAGES.Creepymon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "dynasmon")){
 Image11 = <img src={IMAGES.Dynasmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "durandamon")){
 Image11 = <img src={IMAGES.Durandamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "leopardmon")){
 Image11 = <img src={IMAGES.Leopardmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "dorugoramon")){
 Image11 = <img src={IMAGES.Dorugoramon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "neptunemon")){
 Image11 = <img src={IMAGES.Neptunemon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "hiandromon")){
 Image11 = <img src={IMAGES.Hiandromonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "pilevolcamon")){
 Image11 = <img src={IMAGES.Pilevolcamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "barbamon")){
 Image11 = <img src={IMAGES.Barbamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "platinumnumemon")){
 Image11 = <img src={IMAGES.Platinumnumemon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "princemamemon")){
 Image11 = <img src={IMAGES.Princemamemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "plesiomon")){
 Image11 = <img src={IMAGES.Plesiomonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "beelzemonbm")){
 Image11 = <img src={IMAGES.Beelzemonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "belphemonsm")){
 Image11 = <img src={IMAGES.Belphemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "hououmon")){
 Image11 = <img src={IMAGES.Hououmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "magnadramon")){
 Image11 = <img src={IMAGES.Magnadramonmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "boltmon")){
 Image11 = <img src={IMAGES.Boltmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "mastemon")){
 Image11 = <img src={IMAGES.Mastemon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "marineangemon")){
 Image11 = <img src={IMAGES.Marineangemon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "minervamon")){
 Image11 = <img src={IMAGES.Minervamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "miragegaogamonbm")){
 Image11 = <img src={IMAGES.Miragegaogamonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "megidramon")){
 Image11 = <img src={IMAGES.Megidramon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "metaletemon")){
 Image11 = <img src={IMAGES.Metaletemon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "merukimon")){
 Image11 = <img src={IMAGES.Merukimon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "rusttyranomon")){
 Image11 = <img src={IMAGES.Rusttyranomon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "leviamon")){
 Image11 = <img src={IMAGES.Leviamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "lilithmon")){
 Image11 = <img src={IMAGES.Lilithmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "ravemonbm")){
 Image11 = <img src={IMAGES.Ravemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "crusadermon")){
 Image11 = <img src={IMAGES.Crusadermon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "rosemonbm")){
 Image11 = <img src={IMAGES.Rosemonbm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "lotosmon")){
 Image11 = <img src={IMAGES.Lotosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "armageddemon")){
 Image11 = <img src={IMAGES.Armageddemon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "arcadiamonultra")){
 Image11 = <img src={IMAGES.Arcadiamonultra} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "alphamonouryuken")){
 Image11 = <img src={IMAGES.Alphamonouryuken} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "imperialdramonpm")){
 Image11 = <img src={IMAGES.Imperialdramonpm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "examon")){
 Image11 = <img src={IMAGES.Examon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "omnimon")){
 Image11 = <img src={IMAGES.Omnimon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "omnimonzwart")){
 Image11 = <img src={IMAGES.Omnimonzwart} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "chaosmon")){
 Image11 = <img src={IMAGES.Chaosmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "chaosmonva")){
 Image11 = <img src={IMAGES.Chaosmonva} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "susanomon")){
 Image11 = <img src={IMAGES.Susanomon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "gallantmoncm")){
 Image11 = <img src={IMAGES.Gallantmoncm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "belphemonrm")){
 Image11 = <img src={IMAGES.Belphemonrm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "lucemonsm")){
 Image11 = <img src={IMAGES.Lucemonsm} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "magnamon")){
 Image11 = <img src={IMAGES.Magnamon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "rapidmonarmor")){
 Image11 = <img src={IMAGES.Rapidmonarmor} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "omnishoutmon")){
 Image11 = <img src={IMAGES.Omnishoutmon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "apocalymon")){
 Image11 = <img src={IMAGES.Apocalymon} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "sistermonbawake")){
 Image11 = <img src={IMAGES.Sistermonbawake} alt="Digimon" className="digimon"/>
} else if ((randomItem11 === "sistermoncawake")){
 Image11 = <img src={IMAGES.Sistermoncawake} alt="Digimon" className="digimon"/>
}



    return (
    <div>
    <h1>Random Digimon Team Picker</h1>
    This is an application that will randomly select 11 digimon from a list for the User to use in Digimon Story Cyber Sleuth Complete Edition
    
   <div className='Digimon'>

    <div className='DigimonSlot'>

    {Image1}
    <div className='digiName'>{randomItem}</div>

    </div>

    <div className='DigimonSlot'>
      
    {Image2}
    <div className='digiName'>{randomItem2}</div>

    </div>
    
    
    <div className='DigimonSlot'>
      
    {Image3}
    <div className='digiName'>{randomItem3}</div>

    </div>

    <div className='DigimonSlot'>

    {Image4}
    <div className='digiName'>{randomItem4}</div>

    </div>

    <div className='DigimonSlot'>

    {Image5}
    <div className='digiName'>{randomItem5}</div>

    </div>

    <div className='DigimonSlot'>

    {Image6}
    <div className='digiName'>{randomItem6}</div>

    

    </div>

    <div className='DigimonSlot'>

    {Image7}
    <div className='digiName'>{randomItem7}</div>

    

    </div>
    
    <div className='DigimonSlot'>

{Image8}
<div className='digiName'>{randomItem8}</div>



</div>
<div className='DigimonSlot'>

{Image9}
<div className='digiName'>{randomItem9}</div>



</div>
<div className='DigimonSlot'>

{Image10}
<div className='digiName'>{randomItem10}</div>



</div>
<div className='DigimonSlot'>

{Image11}
<div className='digiName'>{randomItem11}</div>



</div>

    </div>
    </div>
    )

}