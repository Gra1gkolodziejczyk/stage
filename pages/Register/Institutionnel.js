import React, {useState} from "react";
import Link from 'next/link';
import Footer from '../Footer/Footer';
import axios from 'axios'
import config from '../../config.json';

import WrapperContent,{
  WrapperInscription,
  Title,
  Text,
  Subtitle,
  Button,
  WrapperInput,
  WrapperButton,
} from "./Institutionnel.style";

const Institutionnel = () => {

  const [entityName, setEntityName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    
    let item = {entityName, firstName, lastName, pseudo, email, password};
    console.warn(item);

    let result = await fetch(config.api_url+"/api/users/", {
      method: "POST",
      body:JSON.stringify(item),
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    });
    result = await result.json();
    console.warn("result");
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
            type="text"
            placeholder="Mail" 
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
        {/*
          <Title>Confirmer mot de passe</Title>
          <WrapperInput>
            <input placeholder="Confirmer mot de passe" />
          </WrapperInput> 
          */}
        <Subtitle>
          Vous avez déjà un compte ?
          <Link href="/Login/Demandeur_competence">
            <a>Connectez-vous</a>
          </Link>
        </Subtitle>

        <WrapperButton>
        <Button onClick={() => {signUp()}}>
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
