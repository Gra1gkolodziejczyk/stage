import React from "react";
import Image from "next/image";
import Link from 'next/link';
import WrapperContent, { WrapperContentLeft, WrapperImageTop, WrapperImageBottom, Text, WrapperButton, WrapperContentRight, WrapperContentMiddle } from './HomePage.style';

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
              alt={'Myrhmica'}
              width={300}
              height={200}
            />
          </WrapperImageTop>

          <WrapperContentMiddle>
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
          <WrapperContentRight>
            <Link href="/Login/Demandeur_offre">
              <a>
                <WrapperButton>
                  <Text>Login</Text>
                </WrapperButton>
              </a>
            </Link>
            <Link href="/Register/Demandeur_offre">
              <a>
                <WrapperButton>
                  <Text>Register</Text>
                </WrapperButton>
              </a>
            </Link>

            <Link href="/Login/Institutionnel">
              <a>
                <WrapperButton>
                  <Text>Login</Text>
                </WrapperButton>
              </a>
            </Link>
            <Link href="/Register/Institutionnel">
              <a>
                <WrapperButton>
                  <Text>Register</Text>
                </WrapperButton>
              </a>
            </Link>

            <Link href="/Login/Offreur_de_competence">
              <a>
                <WrapperButton>
                  <Text>Login</Text>
                </WrapperButton>
              </a>
            </Link>
            <Link href="/Register/Offreur_de_competence">
              <a>
                <WrapperButton>
                  <Text>Register</Text>
                </WrapperButton>
              </a>
            </Link>
            
          </WrapperContentRight>
          </WrapperContentMiddle>

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