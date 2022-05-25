// import des packages nécessaire au bon fonctionnement
import React from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Image from "next/image";
import axios from "axios";
import config from "../../config.json";

// Import Images
import Myrhmica from "../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
  WrapperImage,
  Footer1,
} from "./Demandeur_competence.style";

const Demandeur_competence = () => {
  return (
    <WrapperContent>
      <WrapperImage>
        <Link href="/">
          <a>
            <Image
              src={Myrhmica}
              alt={"Myrhmica"}
              width={200}
              height={125}
              quality={100}
            />
          </a>
        </Link>
        <Link href="/https:/myrhmica.fr.">
          <a>
            <Image
              src={PortraitScopie}
              alt={"PortraitScopie"}
              quality={100}
              width={400}
              height={100}
            />
          </a>
        </Link>
      </WrapperImage>
      <WrapperInscription>
        <Title>Email</Title>
        <WrapperInput>
          <input placeholder="Email" />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input placeholder="Mot de passe" />
        </WrapperInput>
        <Subtitle>
          Pas encore de compte ?
          <Link href="/Register/Offreur_de_competence">
            <a>Inscrivez-vous</a>
          </Link>
        </Subtitle>
        <WrapperButton>
          <Link href="/">
            <a>
              <Button>
                <Text>Changer de mot de passe</Text>
              </Button>
            </a>
          </Link>
          <Link href="/OffreurDeCompetence/Conseil">
            <a>
              <Button>
                <Text>Connexion</Text>
              </Button>
            </a>
          </Link>
        </WrapperButton>
      </WrapperInscription>
      <Footer1>
        <Footer />
      </Footer1>
    </WrapperContent>
  );
};

export default Demandeur_competence;
