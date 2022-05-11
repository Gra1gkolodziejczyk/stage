import * as React from "react";
import Link from 'next/link';
import Footer from '../Footer/Footer';
import config from '../../config.json';

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let item = { entityName, firstName, lastName, email, pseudo, password}
    console.log(item);

    let result = await fetch(config.api_url+"/api/users/", {
      method: "POST",
      body: JSON.stringify(item),
      headers:{
        'Content-Type' : 'application/json',
        'accept' : 'application/json'
      }
    });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
  }

  return (
    <WrapperContent>
      <WrapperInscription>
        <Title>Entité / Raisons sociale ou Nom Prénom</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Entité / Raisons sociale"

          />
        </WrapperInput>
        <Title>Nom</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Nom"
          />
        </WrapperInput>
        <Title>Prénom</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Prénom"
          />
        </WrapperInput>
        <Title>Pseudo</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Pseudo"
          />
        </WrapperInput>
        <Title>Email</Title>
        <WrapperInput>
          <input 
            type="email"
            placeholder="email"
          />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input 
            type="text"
            placeholder="Mot de passe"
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
}

export default Demandeur_competence;