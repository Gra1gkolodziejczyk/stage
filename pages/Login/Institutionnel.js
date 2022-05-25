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

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post("https://portraiscopie-dev.herokuapp.com/api/authenticate",
        {
          "email" : email,
          "password" : pwd
        });  
        console.log(response);
      } catch(err) {
        console.log('il y a une erreur');
    }
  }

  return (
    <WrapperContent>
      <WrapperInscription>
        <Title>Mail</Title>
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
          <Button onClick={() => {handleSubmit()}}>
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
