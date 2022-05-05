import React from "react";
import Image from "next/image";
import Link from "next/link";
import WrapperContent, {
  WrapperContentLeft,
  WrapperImageTop,
  WrapperImageBottom,
  Text,
  Button,
  WrapperButton,
  WrapperContentRight,
  WrapperContentMiddle,
} from "./HomePage.style";

// IMAGES
import FourmiBleu from "../../public/image/FourmiBleu-removebg-preview.png";
import boiteDeDialogue from "../../public/image/boitededialogue.png";
import Myrhmica from "../../public/image/Myrhmica_logocolor-removebg.png";
import PortraiScopie from "../../public/image/PortraitScopie-remove.png";

const HomePage = () => {
  return (
    <WrapperContent>
      <WrapperImageTop>
        <Image src={Myrhmica} alt={"Myrhmica"} quality={100} />
      </WrapperImageTop>

      <WrapperContentMiddle>
        <WrapperContentLeft>
          <Image
            src={boiteDeDialogue}
            alt={"Boite De dialogue"}
            quality={100}
            width={500}
            height={400}
          />
          <Image className="img" src={FourmiBleu} alt={"FourmiBleu"} />
        </WrapperContentLeft>

        <WrapperContentRight>
          <WrapperButton>
            <Link href="/Register/Demandeur_offre">
              <a>
                <Button>
                  <Text>Crée un compte Demandeur de compétence</Text>
                </Button>
              </a>
            </Link>
            <Link href="/Login/Demandeur_offre">
              <a>
                <Button>
                  <Text>Connexion Demandeur de compétence</Text>
                </Button>
              </a>
            </Link>
          </WrapperButton>

          <WrapperButton>
            <Link href="/Register/Institutionnel">
              <a>
                <Button>
                  <Text>Crée un compte Institutionnels</Text>
                </Button>
              </a>
            </Link>
            <Link href="/Login/Institutionnel">
              <a>
                <Button>
                  <Text>Connexion Institutionnels</Text>
                </Button>
              </a>
            </Link>
          </WrapperButton>

          <WrapperButton>
            <Link href="/Register/Offreur_de_competence">
              <a>
                <Button>
                  <Text>Crée un compte Offreur de compétence</Text>
                </Button>
              </a>
            </Link>
            <Link href="/Login/Offreur_de_competence">
              <a>
                <Button>
                  <Text>Connexion Offreur de compétence</Text>
                </Button>
              </a>
            </Link>
          </WrapperButton>
        </WrapperContentRight>
      </WrapperContentMiddle>
      <WrapperImageBottom>
        <Image
          src={PortraiScopie}
          alt={"PortraiScopie"}
          width={410}
          height={80}
        />
      </WrapperImageBottom>
    </WrapperContent>
  );
};

export default HomePage;
