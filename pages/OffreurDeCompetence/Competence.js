import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";

import WrapperContent, {
  WrapperTitle,
  Title,
  TextTitle,
  TextTop,
  Text,
  TextBottom,
  WrapperCompetence,
  WrapperTop,
  WrapperInput,
  ButtonLinkLeft,
  ButtonLinkRight,
  WrapperButton,
} from "./Competence.style";

import Recherche from "../../public/image/rechercher.png";

const Competence = () => {

  const items = [competence];

  const [competence, setCompetence] = useState("");

  const handleSubmit = async (e) =>  {
    console.log("Le click fonctionne");
    try {
    const response = await axios.post(config.api_url+"/api/portraiscopie/", 
      JSON.stringify({ competence, items }),
      {
        headers : { 'Content-Type' : 'application/json' },
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(response?.data));
  } catch(err) {
    if (!err?.response) {
      console.log("Il y à une erreur...");
    }
  }
}

  return (
    <>
      <Header2 />
      <WrapperContent>
        <WrapperTitle>
          <Title>Mon PortraiScopie Mes Compétences mises en Avant !</Title>
          <TextTitle>
            PortraiScopie ouvre la voie à l'expression de la compétence et aux
            savoirs comportementaux rattachés
          </TextTitle>
        </WrapperTitle>
        <WrapperCompetence>
          <WrapperTop>
            <TextTop>Ma compétence</TextTop>
            <Image
              src={Recherche}
              alt={"Myrhmica"}
              quality={100}
              width={70}
              height={40}
            />
          </WrapperTop>
          <Text>
            Citez ou choisissez dans la liste une compétence dans laquelle vous
            excellez
          </Text>
          <WrapperInput>
            <input 
              placeholder="Compétence" 
              value={competence}
              onChange={(e) => setCompetence(e.target.value)}
            />
          </WrapperInput>
          <WrapperButton>
            <ButtonLinkLeft onClick={() => {handleSubmit()}}>
              <Link href="/OffreurDeCompetence/Competence">
                <a>
                  <TextBottom>Enregistrer et Quitter</TextBottom>
                </a>
              </Link>
            </ButtonLinkLeft>
            <ButtonLinkRight>
              <Link href="/OffreurDeCompetence/Metier">
                <a>
                  <TextBottom>Valider</TextBottom>
                </a>
              </Link>
            </ButtonLinkRight>
          </WrapperButton>
        </WrapperCompetence>
      </WrapperContent>
      <Footer />
    </>
  );
};

export default Competence;
