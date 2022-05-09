// import des packages nécessaire au bon fonctionnement
import React from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
} from "./Offreur_de_competence.style";

const Offreur_de_competence = () => {
  return (
    <WrapperContent>
      <WrapperInscription>
        <Title>Email</Title>
        <WrapperInput>
          <input placeholder="Pseudo" />
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
      <Footer />
    </WrapperContent>
  );
};

export default Offreur_de_competence;
