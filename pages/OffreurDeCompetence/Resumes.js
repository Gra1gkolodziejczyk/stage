import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header/Header2";

import WrapperTitle, {
  Title,
  Text,
  Wrapper,
  WrapperActivite,
  WrapperTaches,
  WrapperTechnologies,
  WrapperDiplomes,
  WrapperMetiers,
  WrapperCompetence,
  WrapperCentre_interet,
  WrapperCapacites,
  WrapperQualites,
  WrapperTalents,
  WrapperValeurs,
  WrapperCopyright,
  WrapperButton,
} from "./Resumes.style";

const Resumes = () => {
  return (
    <>
      <Header />
      <WrapperTitle>
        <Title>Imprimer mon PortraiScopie</Title>
      </WrapperTitle>

      <Wrapper>
        <WrapperActivite>
          <Title>Activites</Title>
          {/**/}
        </WrapperActivite>
        <WrapperTaches>
          <Title>Tâches</Title>
          {/**/}
        </WrapperTaches>
        <WrapperTechnologies>
          <Title>Technologies/Techniques</Title>
          {/**/}
        </WrapperTechnologies>
        <WrapperDiplomes>
          <Title>Diplômes / Habilitations / Certificats</Title>
          {/**/}
        </WrapperDiplomes>
        <WrapperMetiers>
          <Title>Métiers</Title>
          {/**/}
        </WrapperMetiers>
        <WrapperCompetence>
          <Title>Libellé de compétences</Title>
          {/**/}
        </WrapperCompetence>
        <WrapperCentre_interet>
          <Title>Centre d'intérêt</Title>
          {/**/}
        </WrapperCentre_interet>
        <WrapperCapacites>
          <Title>Capacités</Title>
          {/**/}
        </WrapperCapacites>
        <WrapperQualites>
          <Title>Qualités</Title>
          {/**/}
        </WrapperQualites>
        <WrapperTalents>
          <Title>Talents</Title>
          {/**/}
        </WrapperTalents>
        <WrapperValeurs>
          <Title>Valeurs</Title>
          {/**/}
        </WrapperValeurs>
        <WrapperCopyright>
          <Text>PortraiScopie © (copyright)</Text>
        </WrapperCopyright>
      </Wrapper>
      <WrapperButton>
        <Link href="/OffreurDeCompetence/Compte">
          <a>
            <Text>Accéder à votre compte</Text>
          </a>
        </Link>
      </WrapperButton>
    </>
  );
};

export default Resumes;
