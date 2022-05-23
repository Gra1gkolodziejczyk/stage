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
            <Image src={Recherche} alt={"Myrhmica"} quality={100} width={70} />
          </WrapperTop>
          <Text>
            Citez ou choisissez dans la liste une compétence dans laquelle vous
            excellez
          </Text>
          <WrapperInput>
            <input placeholder="Compétence" />
          </WrapperInput>
          <WrapperButton>
            <ButtonLinkLeft>
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
