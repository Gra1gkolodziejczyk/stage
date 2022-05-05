import React from "react";
import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Conseils, { ConseilsCard, Text, Button, TextTop } from "./Conseil.style";

const Conseil = () => {
  return (
    <>
      <Header />
      <Conseils>
        <TextTop>
          Pour une bonne prise en main de votre PortraiScopie, veuillez suivre
          attentivement les conseils ci-dessous
        </TextTop>
      </Conseils>
      <ConseilsCard>
        <Text>
          Prenez le temps de consulter tous les outils à votre disposition comme
          les définitions ou le sommaire
        </Text>
      </ConseilsCard>
      <ConseilsCard>
        <Text>
          Munissez-vous de tous documents retraçant votre parcours professionnel
          (contrat de travail, fiche de poste, ...)
        </Text>
      </ConseilsCard>
      <ConseilsCard>
        <Text>
          Vous pouvez enrichir votre PortraiScopie à votre rythme. Il est
          possible de le réaliser en plusieurs fois
        </Text>
      </ConseilsCard>
      <Link href="/OffreurDeCompetence/Raison">
        <a>
          <Button>Commencez votre PortraiScopie</Button>
        </a>
      </Link>
      <Footer />
    </>
  );
};

export default Conseil;
