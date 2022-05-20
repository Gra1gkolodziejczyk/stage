import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header/Header2";

import WrapperTitle, {
  Title,
  Text,
  Wrapper,
  WrapperProgression,
  Divider,
  WrapperContent,
  WrapperMenuDeroulant,
  ButtonLink,
} from "./Diplomes.style";

const Diplomes = () => {
  return (
    <>
      <Header />
      <WrapperTitleMiddle>
        <Title>Rechercher une offre</Title>
      </WrapperTitleMiddle>
      <WrapperTitleRight>
        <Title>Générer mon PortraiScopie</Title>
      </WrapperTitleRight>

      <Wrapper>
        <Title>
          Boujour {/*Pseudo*/}, prêt à rentrer de nouvelles compétences ?
        </Title>
        <WrapperCompetence>
          <Title>Compétence</Title>
          <Divide>{/*Barre de finition*/}</Divide>
          <WrapperModifier></WrapperModifier>
          <WrapperSupprimer></WrapperSupprimer>
        </WrapperCompetence>
        <WrapperAdd>
          <Link href="/OffreurDeCompetence/Competence">
            <a>
              <Text>Ajouter une nouvelle compétence</Text>
            </a>
          </Link>
        </WrapperAdd>
      </Wrapper>
    </>
  );
};

export default Diplomes;
