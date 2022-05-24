import React, {useState} from "react";
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
} from "./Technologies.style";

const Technologies = () => {

  const [technologie, setTechnologie] = useState("");

  const handleSubmit = async (e) =>  {
    console.log("Le click fonctionne");
    try {
    const response = await axios.post(config.api_url+"/api/portraiscopie/", 
      JSON.stringify({ technologie }),
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
        <Title>Mon PortraiScopie</Title>
        <Title>{/*Compétence choisie*/}</Title>
      </WrapperTitle>

      <Wrapper>
        <WrapperProgression>
          {/* image de la progression bar ou la coder ? */}
        </WrapperProgression>

        <WrapperContent>
          <Title>Technologies</Title>
          {/* Image = Indices
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Divider></Divider>

          <WrapperMenuDeroulant>
            <Text>Technologies pour cette compétence</Text>
            {/* Image 
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          </WrapperMenuDeroulant>

          <input 
            placeholder="technologies"
            value={technologie}
            onChange={(e) => setTechnologie(e.target.value)} 
            />
          <Text>Ajouté</Text>
          <ButtonLink>
            <Link href="/OffreurDeCompetence/Techniques">
              <a>
                <Text>Précédent</Text>
              </a> 
            </Link>
          </ButtonLink>
          <ButtonLink onClick={() => {handleSubmit()}}>
            <Link href="/OffreurDeCompetence/Diplomes">
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

export default Technologies;
