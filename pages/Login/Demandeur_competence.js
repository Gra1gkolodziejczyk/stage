import React, {useState} from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header1 from "../Header/Header1";
import axios from 'axios'
import config from '../../config.json';

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

  let item = {firstName, lastName, password, email, };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPasssword] = useState("");
  const [email, setEmail] = useState("");

  async function signIn() {
    let item = await fetch(config.api_url+"/api/users/", {
      method: 'GET',
      body: JSON.stringify(item),
      headers:{
        'Content-Type' : 'application/json',
        'accept' : 'application/json'
      }
    });
    result = await result.json();
    localStorage.setItem(JSON.stringify(result));
    console.warn(result);
  }

  // verify user_exist !
  // -> créate function (=> conditions)   => get_api_data.js faire la function dedans et l'importer

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
            <Button onClick={() => {signIn()}}>
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
