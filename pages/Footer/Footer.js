import React from "react";
import FooterWrapper, {
  Text,
  TextC,
  ImageWrapper,
  TextWrapper,
  ContentWrapper,
} from "./Footer.style";
import Image from "next/image";

import Myrhmica from "../../public/image/Myrhmica_remove.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <ImageWrapper>
        <Image src={Myrhmica} alt={"Myrhmica"} width={200} height={120} />
      </ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Text>Contact</Text>
          <Text>Mention Légales</Text>
          <Text>Politique de confidentialité</Text>
        </TextWrapper>
        <TextC>
          Copyright © 2021 SAS Human Vision Global Solution - Consulting - Hvgs
          Innnovation Based Company
        </TextC>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
