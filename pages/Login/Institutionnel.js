import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Link from "next/link";
import axios from "axios";
import Header1 from "../Header/Header1";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
  Footer1,
} from "./Institutionnel.style";

const Institutionnel = () => {
  
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "https://portraiscopie-dev.herokuapp.com/api/authenticate",
        {
          email: email,
          password: pwd,
        }
      );
      console.log(response);
    } catch (err) {
      console.log("il y a une erreur");
    }
  };

  return (
    <WrapperContent>
      <Header1 />
      <WrapperInscription>
        <Title>Email</Title>
        <WrapperInput>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input
            placeholder="Mot de passe"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
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
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            <Link href="/OffreurDeCompetence/Conseil">
              <a>
                <Text>Connexion</Text>
              </a>
            </Link>
          </Button>
        </WrapperButton>
      </WrapperInscription>
      <Footer1>
        <Footer />
      </Footer1>
    </WrapperContent>
  );
};

export default Institutionnel;
