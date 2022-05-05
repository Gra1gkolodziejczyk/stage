import React from "react";
import Link from 'next/link';
import Footer from '../Footer/Footer';

import WrapperContent, {
WrapperInscription,
Title,
Subtitle,
WrapperInput,
WrapperButton,
Button,
Text
} from './Demandeur_competence.style';

const Demandeur_competence  = () => {
  return (
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
        <Subtitle>Pas encore de compte ?
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
          <Link href="/">
          <a>
            <Text>Connexion</Text>
          </a>
          </Link>
        </Button>
        </WrapperButton>
        </WrapperInscription>
        <Footer />
    </WrapperContent>
  );
}

export default Demandeur_competence;