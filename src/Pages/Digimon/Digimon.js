import React, { useState, useEffect } from 'react';
import IMAGES from '../../Images/DigimonIndex';
import './Digimon.css';
import '../../Fonts/Pixel Digivolve.otf';

export default function Digimon() {
  const [imageElements, setImageElements] = useState([]);

    const refreshImages = () => {
        const availableImages = { ...IMAGES }; // Create a copy of IMAGES object
        const newImageElements = [];

        for (let i = 0; i < 11; i++) {
            const imageKeys = Object.keys(availableImages);
            const randomIndex = Math.floor(Math.random() * imageKeys.length);
            const randomKey = imageKeys[randomIndex];

            if (availableImages.hasOwnProperty(randomKey)) {
                const imgElement = (
                    <div key={i}>
                        <img src={availableImages[randomKey]} alt="Digimon" className="digimon" />
                        <div className='digiName'>{randomKey}</div>
                    </div>
                );
                newImageElements.push(imgElement);
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
          <div className='Text'>This is an application that will randomly select 11 digimon from the final digivolution stages where they cannot digivolve into anyting else  to use in Digimon Story Cyber Sleuth Complete Edition.</div>
          <button type="button" onClick={refreshImages}>Refresh Images</button>
            <div className='Digimon'>
                {imageElements.map((imageElement, index) => (
                    <div key={index} className='DigimonSlot'>
                        {imageElement}
                    </div>
                ))}
            </div>
        </div>
  );
}