import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import WrapperTitle, {
    Title,
    Text,
    Wrapper,
    WrapperProgression,
    Divider,
    WrapperContent,
    WrapperMenuDeroulant,
    ButtonLink,
    WrapperCoche,
    WrapperDuCoche
} from './Metier.style';

const Metier = () => {
  return (
    <>
        <Header />
        <WrapperTitle>
          <Title>Pour quoi souhaitez-vous faire votre PortraiScopie ?</Title>
          <Text>
            Ces information sont anonymes et n'apparaîtront pas dans votre
            PortraiScopie. Vous pouvez enregistrer plusieurs réponses
          </Text>
        </WrapperTitle>

        <Wrapper>
            <WrapperProgression>
                {/* image de la progression bar ou la coder ? */}
            </WrapperProgression>
            <Divider></Divider>
            <WrapperContent>
            <Title>Le metier exercé pour cette compétence</Title>
            <WrapperMenuDeroulant>
                <Text>Metier 1</Text>
                {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
            </WrapperMenuDeroulant>
            <Title>Date de début</Title>
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
              <Link href="/OffreurDeCompetence/Activités">
                <a>
                  <Text>Suivant</Text>
                </a>
              </Link>
            </ButtonLink>
            </WrapperContent>
        </Wrapper>
        <Footer />
    </>
  )
}

export default Metier;
