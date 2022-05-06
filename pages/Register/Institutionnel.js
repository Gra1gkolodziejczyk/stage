import React from "react";
//import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer/Footer";

import WrapperContent, {
  WrapperInscription,
  WrapperInput,
  WrapperButton,
  Button,
  Title,
  Subtitle,
  Text,
} from "./Institutionnel.style";

const Institutionnel = () => {
  return (
    <WrapperContent>
      <WrapperInscription>
        <Title>Création du compte</Title>
        <WrapperInput>
          <input placeholder="Creation du compte" />
        </WrapperInput>
        <Title>Entité / Raisons sociale ou Nom Prénom</Title>
        <WrapperInput>
          <input placeholder="Entité / Raisons sociale ou Nom Prénom" />
        </WrapperInput>
        <Title>Mail</Title>
        <WrapperInput>
          <input placeholder="Mail" />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input placeholder="Mot de passe" />
        </WrapperInput>
        <Title>Confirmer mot de passe</Title>
        <WrapperInput>
          <input placeholder="Confirmer mot de passe" />
        </WrapperInput>
        <Subtitle>
          Vous avez déjà un compte ?
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
  );
};

export default Institutionnel;
