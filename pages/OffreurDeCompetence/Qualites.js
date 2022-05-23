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
} from "./Qualites.style";

const Qualites = () => {

  const [qualites, setQualites] = useState("");
  
  const handleSubmit = async (e) =>  {
    console.log("Le click fonctionne");
    try {
    const response = await axios.post(config.api_url+"/api/portraiscopie/", 
      JSON.stringify({ qualites, items }),
      {
        headers : { 'Content-Type' : 'application/json' },
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(response?.data));
  } catch(err) {
    if (!err?.response) {
      console.log("Il y à une erreur...");
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
          <Title>Mes qualités</Title>
          {/* Image = Indices
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Divider></Divider>

          <WrapperMenuDeroulant>
            <Text>Vos qualités mise en avant pour cette compétence</Text>
            <input 
              placeholder="Donnez ici une qualité relative à cette personne" 
              value={qualites}
              onChange={(e) => setQualites(e.target.value)}
              />
          </WrapperMenuDeroulant>

          {/* Image du +
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Text>Ajouté</Text>
          <ButtonLink onClick={() => {handleSubmit()}}>
            <Link href="/OffreurDeCompetence/Capacites">
              <a>
                <Text>Précédent</Text>
              </a>
            </Link>
          </ButtonLink>
          <ButtonLink>
            <Link href="/OffreurDeCompetence/Valeurs">
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

export default Qualites;
