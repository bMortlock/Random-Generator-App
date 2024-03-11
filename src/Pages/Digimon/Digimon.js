import React, { useState, useEffect } from 'react';
import IMAGES from '../../Images/DigimonIndex';
import './Digimon.css';
import '../../Fonts/Pixel Digivolve.otf';
import LINKS from './digimonLinks';

export default function Digimon() {
    const [imageElements, setImageElements] = useState([]);


    const formatDigimonName = (name) => {
        // Handle special cases where the name needs formatting
        if (name === "Imperialdramonpm") {
            return "Imperialdramon PM"; // Corrected name
        } else if (name === "Rosemonbm") {
            return "Rosemon BM"; // Corrected name
        } else if (name === "Chaosmonva") {
            return "Chaosmon VA"; // Corrected name
        } else if (name === "Miragegaogamonbm") {
            return "Miragegaogamon BM"; // Corrected name
        } else if (name === "Ravemonbm") {
            return "Ravemon BM"; // Corrected name
        } else if (name === "Gallantmoncm") {
            return "Gallantmon CM"; // Corrected name
        } else if (name === "Belphemonrm") {
            return "Belphemon RM"; // Corrected name
        } else if (name === "Lucemonsm") {
            return "Lucemon SM"; // Corrected name
        } else if (name === "Rapidmonarmor") {
            return "Rapidmon Armor"; // Corrected name
        } else if (name === "Alphamonouryuken") {
            return "Alphamon Ouryuken"; // Corrected name
        } else if (name === "Arcadiamonultra") {
            return "Arcadiamon Ultra"; // Corrected name
        } else if (name === "KerpymonB") {
            return "Kerpymon B"; // Corrected name
        } else if (name === "KerpymonG") {
            return "Kerpymon G"; // Corrected name
        } else if (name === "BeelzemonBM") {
            return "Beelzemon BM "; 
        } else if (name === "ShinegreymonBM") {
            return "ShineGreymon BM "; // Corrected name
        }else if (name === "Sistermonbawake") {
                return "Sistermon B Awakened"; // Corrected name
            } else if (name === "Sistermoncawake") {
                return "Sistermon C Awakened"; // Corrected name    
        } else {
            // Return the original name if no formatting is needed
            return name;
        } 
    };
    // Function to refresh images
    const refreshImages = () => {
        const availableImages = { ...IMAGES }; // Create a copy of IMAGES object
        const newImageElements = [];

        for (let i = 0; i < 11; i++) {
            const imageKeys = Object.keys(availableImages);
            const randomIndex = Math.floor(Math.random() * imageKeys.length);
            const randomKey = imageKeys[randomIndex];

            if (availableImages.hasOwnProperty(randomKey)) {
                const formattedName = formatDigimonName(randomKey); // Format the Digimon name
                const imgElement = (
                    <div className="card" key={i}>
                        <img src={availableImages[randomKey]} alt="Digimon" className="digimon" />
                        <div className='digiName'>{formattedName}</div>
                    </div>
                );
                const cardElement = (
                    <a href={LINKS[randomKey]} target="_blank" rel="noopener noreferrer" key={i} className="card-link">
                        {imgElement}
                    </a>
                );
                newImageElements.push(cardElement);
                delete availableImages[randomKey]; // Remove the chosen image key
                
            }
        }

        setImageElements(newImageElements);
    };

    useEffect(() => {
        refreshImages(); // Call refreshImages when component mounts
    }, []); // Empty dependency array means this effect runs only once after the first render

  return (
      <div>
          <h1>Random Digimon Team Picker</h1>
          <div className='Text '>This is an application that will randomly select 11 digimon from the final digivolution stages where they cannot digivolve into anyting else  to use in Digimon Story Cyber Sleuth Complete Edition.</div>
          <button type="button" onClick={refreshImages} className='digiName'>Refresh Images</button>
            <div className='Digimon'>
                {imageElements.map((imageElement, index) => (
                    <div key={index} className='DigimonSlot Card'>
                        {imageElement}
                    </div>
                ))}
            </div>
        </div>
  );
}