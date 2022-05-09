import React from "react";
import Link from "next/link";
import Header1 from "../Header/Header1";
import Footer from "../Footer/Footer";

import WrapperContent, {
  WrapperTitle,
  Title,
  Text,
  WrapperCocheLeft,
  WrapperCocheRight,
  Coche,
  ButtonLink,
} from "./Raison.style";

const Raison = () => {
  return (
    <>
      <Header1 />
      <WrapperContent>
        <WrapperTitle>
          <Title>Pour quoi souhaitez-vous faire votre PortraiScopie ?</Title>
          <Text>
            Ces information sont anonymes et n'apparaîtront pas dans votre
            PortraiScopie. Vous pouvez enregistrer plusieurs réponses
          </Text>
        </WrapperTitle>
        <WrapperCocheLeft>
          <Coche></Coche>
          <Text>Entrer sur le marché du travail</Text>
          <Coche></Coche>
          <Text>Préparer mon entretien d'embauche</Text>
          <Coche></Coche>
          <Text>
            Convaincre ma hiérarchie que je suis compétent(e) ou le candidat
            idéal à une promotion
          </Text>
          <Coche></Coche>
          <Text>Rechercher une formation</Text>
          <Coche></Coche>
          <Text>Rechercher d'autres pistes de métiers</Text>
          <Coche></Coche>
          <Text>Changer de métiers, de secteur, de domaine d'activité</Text>
          <Coche></Coche>
          <Text>
            Intégrer une nouvelle équipe, une nouvelle entreprise, un nouveau
            secteur d’activité
          </Text>
          <Coche></Coche>
          <Text>Me reconvertir</Text>
        </WrapperCocheLeft>
        <WrapperCocheRight>
          <Coche></Coche>
          <Text>
            Je déménage dans une nouvelle région (pays) mes compétences
            sont-elles recherchées ?
          </Text>
          <Coche></Coche>
          <Text>
            Faire un état des lieux de mes compétences car je n’ai aucune idée
            et on avenir professionnel semble flou
          </Text>
          <Coche></Coche>
          <Text>
            Je souhaite valoriser et faire reconnaître un talent auprès de ma
            hiérarchie
          </Text>
          <Coche></Coche>
          <Text>
            Je souhaite comprendre pourquoi je ne me sens plus aussi « heureux »
            dans mon travail
          </Text>
          <Coche></Coche>
          <Text>Je souhaite savoir pourquoi je vais à reculons au travail</Text>
          <Coche></Coche>
          <Text>Autres</Text>
        </WrapperCocheRight>
        <ButtonLink>
          <Link href="/OffreurDeCompetence/Competence">
            <a>
              <Text>Valider</Text>
            </a>
          </Link>
        </ButtonLink>
      </WrapperContent>
      <Footer />
    </>
  );
};

export default Raison;
