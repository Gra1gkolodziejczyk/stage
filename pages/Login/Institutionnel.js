import React from "react";
import Footer from "../Footer/Footer";
import Link from "next/link";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
} from "./Institutionnel.style";

const Institutionnel = () => {
  return (
    <WrapperContent>
      <WrapperInscription>
        <Title>Mail</Title>
        <WrapperInput>
          <input placeholder="Mail" />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input placeholder="Mot de passe" />
        </WrapperInput>
        <Subtitle>
          Pas encore de compte ?
          <Link href="/Register/Institutionnel">
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
      <Footer />
    </WrapperContent>
  );
};

export default Institutionnel;
