import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";
import WrapperContent, {
  WrapperTitle,
  WrapperImage,
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
  Footer1,
} from "./Competence.style";

import Idea from "../../public/image/Idea.png";

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
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
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
      <Footer1>
        <Footer />
      </Footer1>
    </>
  );
};

export default Competence;
