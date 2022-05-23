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
  Wrapper,
  WrapperAll,
  WrapperProgression,
  WrapperImp,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  WrapperInput,
  ButtonLink,
  WrapperCoche,
  WrapperDuCoche,
} from "./Metier.style";

import Progression from "../../public/image/Progression-remove.png";
import Recherche from "../../public/image/rechercher.png";

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
              <WrapperInput>
                <input placeholder="Métier 1" />
              </WrapperInput>
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>

            <Title>Date de début</Title>
            <WrapperMenuDeroulant>
              <WrapperInput>
                <input placeholder="Mois" />
              </WrapperInput>
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>

            <WrapperMenuDeroulant>
              <Text>Année</Text>
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>

            <Title>Date de fin</Title>
            <WrapperMenuDeroulant>
              <Text>Mois</Text>
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>

            <WrapperMenuDeroulant>
              <Text>Année</Text>
              {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>

            <WrapperDuCoche>
              <WrapperCoche></WrapperCoche>
              <Text>J'occupe actuellement ce poste</Text>
            </WrapperDuCoche>
            {/* Image du +
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            <Text>Ajouté</Text>
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
