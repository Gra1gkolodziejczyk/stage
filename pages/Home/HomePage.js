import React from "react";
import Image from "next/image";
import WrapperContent, { WrapperContentLeft, WrapperImageTop, WrapperImageBottom } from './HomePage.style';

// IMAGES
import FourmiBleu from '../../public/image/FourmiBleu-removebg-preview.png';
import boiteDeDialogue from '../../public/image/boitededialogue.png';
import Myrhmica from '../../public/image/Myrhmica_logocolor-removebg.png';
import PortraitScopie from '../../public/image/PortraitScopie-remove.png';

const HomePage = () => {
    return (
        <WrapperContent>
          <WrapperImageTop>
            <Image 
              src={Myrhmica}
              alt={''}
              width={300}
              height={200}
            />
          </WrapperImageTop>
          <WrapperContentLeft>
            <Image 
              src={boiteDeDialogue}
              alt={'Boite De dialogue'}
              width={569}
              height={404}
            />
            <Image 
              className="img"
              src={FourmiBleu}
              alt={'FourmiBleu'}
            />
          </WrapperContentLeft>
          <WrapperImageBottom>
            <Image 
              src={PortraitScopie}
              alt={'PortraitScopie'}
              width={410}
              height={80}
            />
          </WrapperImageBottom>
        </WrapperContent>
    );
}

export default HomePage;