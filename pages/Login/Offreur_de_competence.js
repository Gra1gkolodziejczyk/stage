// import des packages nécessaire au bon fonctionnement
import React from "react";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Image from "next/image";
import axios from "axios";
import config from "../../config.json";

// Import Images
import Myrhmica from "../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";

import WrapperContent, {
  WrapperInscription,
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
  WrapperImage,
} from "./Offreur_de_competence.style";

const Offreur_de_competence = () => {

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
      <WrapperImage>
        <Link href="/">
          <a>
            <Image
              src={Myrhmica}
              alt={"Myrhmica"}
              width={200}
              height={125}
              quality={100}
            />
          </a>
        </Link>
        <Link href="/https://myrhmica.fr.">
          <a>
            <Image
              src={PortraitScopie}
              alt={"PortraitScopie"}
              quality={100}
              width={400}
              height={100}
            />
          </a>
        </Link>
      </WrapperImage>
      <WrapperInscription>
        <Title>Email</Title>
        <WrapperInput>
          <input placeholder="Pseudo" />
        </WrapperInput>
        <Title>Mot de passe</Title>
        <WrapperInput>
          <input placeholder="Mot de passe" />
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
          <Link href="/OffreurDeCompetence/Conseil">
          <Button onClick={() => {signIn()}}>
            <a>
                <Text>Connexion</Text>
            </a>
            </Button>
          </Link>
        </WrapperButton>
      </WrapperInscription>
      <Footer />
    </WrapperContent>
  );
};

export default Offreur_de_competence;
