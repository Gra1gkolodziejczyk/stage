import React, {useState,useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header/Header2";

import WrapperTitle, {
  WrapperProgression,
  DividerTop,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Wrapper4,
  Wrapper5,
  Wrapper6,
  Wrapper7,
  Wrapper8,
  Wrapper9,
  Wrapper10,
  Wrapper11,
  TextTop,
  TextBottom,
  WrapperTop,
  TitleTop,
  TitleColor,
  Title,
  TitleImp,
  Text,
  TextAjout,
  Wrapper,
  WrapperAll,
  WrapperImp,
  WrapperImage,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperAjout,
  ButtonLink,
  ButtonLinkPrec,
  WrapperButton,
} from "./Valeurs.style";

import Idea from "../../public/image/idea.png";
import Plus from "../../public/image/plus.png";

const Valeurs = () => {

   const [valeurs, setValeurs] = useState("");

  useEffect(() => {
  localStorage.setItem("valeurss", JSON.stringify(valeurs));
}, [valeurs]);

  const handleSubmit = async (e) => {
      try {
        const response = await axios.post("https://portraiscopie-dev.herokuapp.com/api/portraiscopies/",
          {
            "valeurs" : valeurs,
          });  
          console.log(response);
        } catch(err) {
          console.log('il y a une erreur');
      }
    }

  return (
    <>
      <Header />
      <WrapperTitle>
        <WrapperTop>
          <TitleTop>Mon PortraiScopie</TitleTop>
          <TitleColor>{/*Compétence choisie*/}</TitleColor>
        </WrapperTop>
      </WrapperTitle>

      <Wrapper>
        <WrapperAll>
          <WrapperProgression>
            <Wrapper1>
              <TextTop>1</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Métier</TextBottom>
            </Wrapper1>
            <Wrapper2>
              <DividerTop></DividerTop>
              <TextTop>2</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Activités</TextBottom>
            </Wrapper2>
            <Wrapper3>
              <DividerTop></DividerTop>
              <TextTop>3</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Tâches</TextBottom>
            </Wrapper3>
            <Wrapper4>
              <DividerTop></DividerTop>
              <TextTop>4</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Techniques</TextBottom>
            </Wrapper4>
            <Wrapper5>
              <DividerTop></DividerTop>
              <TextTop>5</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Technologies</TextBottom>
            </Wrapper5>
            <Wrapper6>
              <DividerTop></DividerTop>
              <TextTop>6</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Diplômes</TextBottom>
            </Wrapper6>
            <Wrapper7>
              <DividerTop></DividerTop>
              <TextTop>7</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Capacités</TextBottom>
            </Wrapper7>
            <Wrapper8>
              <DividerTop></DividerTop>
              <TextTop>8</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Qualités</TextBottom>
            </Wrapper8>
            <Wrapper9>
              <DividerTop></DividerTop>
              <TextTop>9</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Valeurs</TextBottom>
            </Wrapper9>
            <Wrapper10>
              <DividerTop></DividerTop>
              <TextTop>10</TextTop>
              <DividerTop></DividerTop>
              <TextBottom>Talents</TextBottom>
            </Wrapper10>
            <Wrapper11>
              <DividerTop></DividerTop>
              <TextTop>11</TextTop>
              <TextBottom>Centre d'intérêt</TextBottom>
            </Wrapper11>
          </WrapperProgression>

          <WrapperImp>
            <TitleImp>Mes valeurs</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Idée"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Vos valeurs pour cette compétence</Title>x
          <WrapperMenuDeroulant>
            <Text>Vos valeurs pour cette compétence</Text>
            <input 
              placeholder="Donnez ici une valeur relative à cette compétence"
              value={valeurs}
              onChange={(e) => setValeurs(e.target.value)}
            />
          </WrapperMenuDeroulant>

            <WrapperAjout>
              <Image src={Plus} alt={"PortraiScopie"} quality={100} />
              <TextAjout>Ajouter</TextAjout>
            </WrapperAjout>
            <WrapperButton>
              <ButtonLinkPrec>
                <Link href="/OffreurDeCompetence/Qualites">
                  <a>
                    <Text>Précédent</Text>
                  </a>
                </Link>
              </ButtonLinkPrec>
              <ButtonLink onClick={() => {handleSubmit()}}>
                <Link href="/OffreurDeCompetence/Talents">
                  <a>
                    <Text>Suivant</Text>
                  </a>
                </Link>
              </ButtonLink>
            </WrapperButton>
          </WrapperContent>
        </WrapperAll>
      </Wrapper>
    </>
  );
};

export default Valeurs;