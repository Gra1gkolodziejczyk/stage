import React from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header1 from "../Header/Header1";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
} from "./Demandeur_competence.style";

const Demandeur_competence = () => {
  return (
    <>
      <Header1 />
      <WrapperContent>
        <WrapperInscription>
          <Title>Pseudo</Title>
          <WrapperInput>
            <input placeholder="Pseudo" />
          </WrapperInput>
          <Title>Mot de passe</Title>
          <WrapperInput>
            <input placeholder="Mot de passe" />
          </WrapperInput>
          <Subtitle>
            Pas encore de compte ?
            <Link href="/Register/Demandeur_competence">
              <a>Inscrivez-vous</a>
            </Link>
          </Subtitle>

          <WrapperButton>
            <Button>
              <Link href="/">
                <a>
                  <Text>Changer de mot de passe</Text>
                </a>
              </Link>
            </Button>
            <Button>
              <Link href="/OffreurDeCompetence/Conseil">
                <a>
                  <Text>Connexion</Text>
                </a>
              </Link>
            </Button>
          </WrapperButton>
        </WrapperInscription>
      </WrapperContent>
      <Footer />
    </>
  );
};

export default Demandeur_competence;
