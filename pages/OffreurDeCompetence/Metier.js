import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header/Header2";

import WrapperTitle, {
  WrapperTop,
  Title,
  TitleTop,
  TitleColor,
  Text,
  TextAjout,
  Wrapper,
  WrapperAll,
  WrapperProgression,
  WrapperImp,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperInput,
  WrapperDate,
  ButtonLink,
  WrapperCoche,
  WrapperDuCoche,
  WrapperAjout,
} from "./Metier.style";

import Progression from "../../public/image/Progression-remove.png";
import Recherche from "../../public/image/rechercher.png";
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
            <Image src={Progression} alt={"Progression"} quality={100} />
          </WrapperProgression>
          <WrapperImp>
            <Title>Métiers</Title>
            <Image
              src={Recherche}
              alt={"Myrhmica"}
              quality={100}
              width={70}
              height={40}
            />
            <Divider></Divider>
          </WrapperImp>
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
            <ButtonLink>
              <Link href="/OffreurDeCompetence/Activites">
                <a>
                  <Text>Suivant</Text>
                </a>
              </Link>
            </ButtonLink>
          </WrapperContent>
        </WrapperAll>
      </Wrapper>
    </>
  );
};

export default Metier;
