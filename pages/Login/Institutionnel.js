import React from "react";
import Footer from "../Footer/Footer";
import Link from "next/link";

import {
  WrapperContent,
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
} from "./Institutionnel.style";

const Institutionnel = () => {

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
          <Button onClick={() => {signIn()}}>
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
