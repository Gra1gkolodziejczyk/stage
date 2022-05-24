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
  WrapperCercle,
} from "./Valeurs.style";

const Valeurs = () => {

  const [valeurs, setValeurs] = useState("");

  const handleSubmit = async (e) =>  {
    console.log("Le click fonctionne");
    try {
    const response = await axios.post(config.api_url+"/api/portraiscopie/", 
      JSON.stringify({ valeurs }),
      {
        headers : { 'Content-Type' : 'application/json' },
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(response?.data));
  } catch(err) {
    if (!err?.response) {
      console.log("Il y a une erreur");
    }
  }
}

  return (
    <>
      <Header />
      <WrapperTitle>
        <WrapperCercle>
          <Title>Mon PortraiScopie</Title>
          <Title>{/*Compétence choisie*/}</Title>
        </WrapperCercle>
      </WrapperTitle>

      <Wrapper>
        <WrapperProgression>
          {/* image de la progression bar ou la coder ? */}
        </WrapperProgression>

        <WrapperContent>
          <Title>Mes Valeurs</Title>
          {/* Image = Indices
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Divider></Divider>

          <WrapperMenuDeroulant>
            <Text>Vos valeurs pour cette compétence</Text>
            <input 
              placeholder="Donnez ici une valeur relative à cette compétence"
              value={valeurs}
              onChange={(e) => setValeurs(e.target.value)}
               />
          </WrapperMenuDeroulant>

          {/* Image du +
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Text>Ajouté</Text>
          <ButtonLink>
            <Link href="/OffreurDeCompetence/Qualites">
              <a>
                <Text>Précédent</Text>
              </a>
            </Link>
          </ButtonLink>
          <ButtonLink>
            <Link href="/OffreurDeCompetence/Talents">
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

export default Valeurs;
