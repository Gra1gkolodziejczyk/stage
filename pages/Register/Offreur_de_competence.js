import React from "react";
import Link from 'next/link';
import Footer from '../Footer/Footer';

import WrapperContent,{
  WrapperInscription,
  Title,
  Text,
  Subtitle,
  Button,
  WrapperInput,
  WrapperButton,
} from "./Institutionnel.style";

const Offreur_de_competence = () => {
  return (
    <WrapperContent>
      <WrapperInscription>
      <Title>Pseudo</Title>
        <WrapperInput>
          <input placeholder="Speudo" />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input placeholder="Mot de passe" />
        </WrapperInput>
        <Title>Confirmer mot de passe</Title>
        <WrapperInput>
          <input placeholder="Confirmer mot de passe" />
        </WrapperInput>
        <Subtitle>Vous avez déjà un compte ?
          <Link href="/Login/Demandeur_competence">
            <a>Connectez-vous</a>
          </Link>
        </Subtitle>
        
        <WrapperButton>
        {/* Wrapper coche */}
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
  )
}

export default Offreur_de_competence;