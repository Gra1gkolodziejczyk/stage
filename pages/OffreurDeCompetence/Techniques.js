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
} from "./Techniques.style";

const Techniques = () => {

  const items = [techniques];

  const [techniques, setTechniques] = useState("");

  const handleSubmit = async (e) =>  {
    console.log("Le click fonctionne");
    try {
    const response = await axios.post(config.api_url+"/api/portraiscopie/", 
      JSON.stringify({ techniques, items }),
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
          <Title>Techniques</Title>
          {/* Image = Indices
                    src={}
                    alt={}
                    width={}
                    height={}
                /> */}
          <Divider></Divider>
          <input 
            placeholder="mettez votre techniques"
            value={techniques}
            onChange={(e) => setTechniques(e.target.value)}
             />

          <WrapperMenuDeroulant>
            <Text>Techniques pour cette compétence</Text>
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
            <Link href="/OffreurDeCompetence/Taches">
              <a>
                <Text>Précédent</Text>
              </a>
            </Link>
          </ButtonLink>
          <ButtonLink onClick={() => {handleSubmit()}}>
            <Link href="/OffreurDeCompetence/Technologies">
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

export default Techniques;
