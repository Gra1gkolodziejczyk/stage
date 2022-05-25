import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer/Footer";
import config from "../../config.json";

import WrapperContent, {
  WrapperImage,
  WrapperInscription,
  Title,
  WrapperInput,
  WrapperCoche,
  CheckBox,
  Subtitle,
  WrapperButton,
  Button,
  Text,
  Footer1,
} from "./Demandeur_competence.style";

// Import Images
import Myrhmica from "../../public/image/Myrhmica-color-remove.png";
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";

import axios from "axios";

const Demandeur_competence = () => {
  const [entityName, setEntityName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let item = { entityName, firstName, lastName, email, pseudo, password };
    console.warn(item);

    let result = await fetch(config.api_url + "/api/users/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem(JSON.stringify(result));
    console.warn(result);
  }

  return (
    <WrapperContent>
      <WrapperImage>
        <Link href="/">
          <a>
            <Image src={Myrhmica} alt={"Myrhmica"} quality={100} />
          </a>
        </Link>
        <Link href="/https:/myrhmica.fr.">
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
        <WrapperInput>
          <Title>Entité / Raisons sociale ou Nom Prénom</Title>
          <input
            type="text"
            placeholder="Entité / Raisons sociale"
            value={entityName}
            onChange={(e) => setEntityName(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Nom</Title>
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Prénom</Title>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Pseudo</Title>
          <input
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Email</Title>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </WrapperInput>

        <WrapperInput>
          <Title>Mot de passe</Title>
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
        <WrapperCoche>
          <CheckBox></CheckBox>
          <Text>
            J’ai pris connaissance et j’accepte la
            <Link href="/Login/Demandeur_competence">
              <a> politique de confidentialité</a>
            </Link>
          </Text>
        </WrapperCoche>

        <WrapperButton>
          <Button
            onClick={() => {
              signUp();
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

export default Demandeur_competence;
