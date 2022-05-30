import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../Header/Header2";

import WrapperTitle, { Title, Text, Wrapper } from "../Diplomes/Diplomes.style";

const Diplomes = () => {
  const [compte, setCompte] = useState("");

  const handleSubmit = async (e) => {
    console.log("Le click fonctionne");
    try {
      const response = await axios.post(
        config.api_url + "/api/portraiscopie/",
        JSON.stringify({ compte, items }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (err) {
      if (!err?.response) {
        console.log("Il y à une erreur...");
      }
    }
  };

  return (
    <>
      <Header />
      <WrapperTitleMiddle>
        <Title>Rechercher une offre</Title>
      </WrapperTitleMiddle>
      <WrapperTitleRight>
        <Title>Générer mon PortraiScopie</Title>
      </WrapperTitleRight>

      <Wrapper>
        <Title>
          Boujour {/*Pseudo*/}, prêt à rentrer de nouvelles compétences ?
        </Title>
        <WrapperCompetence>
          <Title>Compétence</Title>
          <input
            placeholder="mettre compétences"
            value={compte}
            onChange={(e) => setCompte(e.target.value)}
          />
          <Divide>{/*Barre de finition*/}</Divide>
          <WrapperModifier></WrapperModifier>
          <WrapperSupprimer></WrapperSupprimer>
        </WrapperCompetence>
        <WrapperAdd
          onClick={() => {
            handleSubmit();
          }}
        >
          <Link href="/OffreurDeCompetence/Competence">
            <a>
              <Text>Ajouter une nouvelle compétence</Text>
            </a>
          </Link>
        </WrapperAdd>
      </Wrapper>
    </>
  );
};

export default Diplomes;
