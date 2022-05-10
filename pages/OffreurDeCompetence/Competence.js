import React from "react";
import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WrapperContent, {
  WrapperTitle,
  Titre,
  Text,
  WrapperCompetence,
  WrapperInput,
  ButtonLink,
  WrapperButton,
} from "./Competence.style";

const Competence = () => {
  return (
    <>
      <Header />
      <WrapperContent>
        <WrapperTitle>
          <Titre>Mon PortraiScopie Mes Compétences mises en Avant!</Titre>
          <Text>
            PortraiScopie ouvre la voie à l'expression de la compétence et aux
            savoirs comportementaux rattachés
          </Text>
        </WrapperTitle>
        <WrapperCompetence>
          <Text>Ma compétence</Text>
          <Text>
            Citez ou choisissez dans la liste une compétence dans laquelle vous
            excellez
          </Text>
          <WrapperInput>
            <input placeholder="Compétence" />
          </WrapperInput>
          <WrapperButton>
            <ButtonLink>
              <Link href="/OffreurDeCompetence/Competence">
                <a>
                  <Text>Enregistrer et Quitter</Text>
                </a>
              </Link>
            </ButtonLink>
            <ButtonLink>
              <Link href="/OffreurDeCompetence/Metier">
                <a>
                  <Text>Valider</Text>
                </a>
              </Link>
            </ButtonLink>
          </WrapperButton>
        </WrapperCompetence>
      </WrapperContent>
      <Footer />
    </>
  );
};

export default Competence;
