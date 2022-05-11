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
} from "./Taches.style";

const Taches = () => {
  return (
    <>
      <Header />
      <WrapperTitle>
        <Title>Mon PortraiScopie</Title>
        <Title>{/*Compétence choisie*/}</Title>
      </WrapperTitle>

      <Wrapper>
        <WrapperProgression>
          {/* image de la progression bar ou la coder ? */}
        </WrapperProgression>

        <WrapperContent>
          <Title>Tâches réalisées</Title>
          {/* Image = Indices
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Divider></Divider>

          <WrapperMenuDeroulant>
            <Text>Tâches pour cette compétence</Text>
            {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          </WrapperMenuDeroulant>

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
                <Text>Précédent</Text>
              </a>
            </Link>
          </ButtonLink>
          <ButtonLink>
            <Link href="/OffreurDeCompetence/Techniques">
              <a>
                <Text>Suivant</Text>
              </a>
            </Link>
          </ButtonLink>
        </WrapperContent>
      </Wrapper>
    </>
  );
};

export default Taches;
