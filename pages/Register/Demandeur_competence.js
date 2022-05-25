import React, { useState } from "react";
import Link from 'next/link';
import Footer from '../Footer/Footer';
import axios from 'axios';

import WrapperContent, {
  WrapperInscription,
  Title,
  WrapperInput,
  Subtitle,
  WrapperButton,
  Button,
  Text
} from "./Demandeur_competence.style";

const Demandeur_competence = () => {

  const [entityName, setEntityName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudo, setPseudo] = useState("");

  const handleSubmit = async (e) =>  {
    console.log('Le lien a été cliqué.');
    try {
    const response = await axios.post("https://portraiscopie-dev.herokuapp.com/api/users/", 
      JSON.stringify({ entityName, firstName, lastName, password, email, pseudo }),
      {
        headers : {'Content-Type' : 'application/json'},
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(response?.data));
  } catch(err) {
    if (!err?.response) {
      console.log("No server Response");
    } else if (err.response?.status === 405) {
      console.log('Invalid url');
    } else {
      console.log('Registration Failed');
    }
  }
}

  return (
    <WrapperContent>
      <WrapperInscription>
        <Title>Entité / Raisons sociale ou Nom Prénom</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Entité / Raisons sociale"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
          />
        </WrapperInput>
        <Title>Nom</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </WrapperInput>
        <Title>Prénom</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </WrapperInput>
        <Title>Pseudo</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </WrapperInput>
        <Title>Email</Title>
        <WrapperInput>
          <input 
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </WrapperInput>
        {
          /*
          <Title>Confirmer mot de passe</Title>
          <WrapperInput>
            <input placeholder="Confirmer mot de passe" />
          </WrapperInput> 
          */
        }
        <Subtitle>
          Vous avez déjà un compte ?
          <Link href="/Login/Demandeur_competence">
            <a>Connectez-vous</a>
          </Link>
        </Subtitle>

        <WrapperButton>
        <Button onClick={() => { handleSubmit() }}>
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
}

export default Demandeur_competence;