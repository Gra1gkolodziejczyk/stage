import React from "react";
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
  Title,
  TitleImp,
  WrapperImage,
  TitleTop,
  TitleColor,
  Text,
  TextAjout,
  Wrapper,
  WrapperAll,
  WrapperImp,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperDate,
  WrapperCoche,
  WrapperDuCoche,
  WrapperAjout,
  ButtonLink,
  WrapperButton,
} from "./Metier.style";

import Progression from "../../public/image/Progression-remove.png";
import Idea from "../../public/image/idea.png";
import Plus from "../../public/image/plus.png";

const Metier = () => {
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
            <TitleImp>Métiers</TitleImp>
            <WrapperImage>
              <Image src={Idea} alt={"Myrhmica"} quality={100} />
            </WrapperImage>
          </WrapperImp>
          <Divider></Divider>
          <WrapperContent>
            <Title>Le metier exercé pour cette compétence</Title>
            <WrapperMenuDeroulant>
              <input placeholder="Métier 1" />

              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>
            <Title>Date de début</Title>
            <WrapperDate>
              <input placeholder="Mois" />

              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
              <input placeholder="Année" />
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperDate>
            <Title>Date de fin</Title>
            <WrapperDate>
              <input placeholder="Mois" />
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
              <input placeholder="Année" />
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperDate>
            <WrapperDuCoche>
              <WrapperCoche></WrapperCoche>
              <Text>J'occupe actuellement ce poste</Text>
            </WrapperDuCoche>
            <WrapperAjout>
              <Image src={Plus} alt={"PortraiScopie"} quality={100} />
              <TextAjout>Ajouter</TextAjout>
            </WrapperAjout>
            <WrapperButton>
              <ButtonLink>
                <Link href="/OffreurDeCompetence/Activites">
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

export default Metier;
