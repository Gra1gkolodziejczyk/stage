import React from "react";

import HeaderWrapper, {
  ImgWrapperLeft,
  ImgWrapperRight,
  Text,
  ContainerMenu,
  WrapperTitle,
  Title,
} from "./Header.style";

// NEXT WIDGETS
import Image from "next/image";
import Link from "next/link";

// IMAGES
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";
import Profil from "../../public/image/profil.png";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <ImgWrapperLeft>
          <Link href="/portraitscopie">
            <a>
              <Image
                src={PortraitScopie}
                alt={"PortraitScopie"}
                width={300}
                height={75}
              />
            </a>
          </Link>
        </ImgWrapperLeft>

        <ImgWrapperRight>
          <Link href="/profile">
            <a>
              <Image src={Profil} alt={"Profile"} height={50} width={50} />
            </a>
          </Link>
          <Text>Jhon</Text>
        </ImgWrapperRight>
      </HeaderWrapper>

      <ContainerMenu>
        <WrapperTitle>
          <Link href="/accueil">
            <a>
              <Title>Accueil</Title>
            </a>
          </Link>
          <Link href="/offres">
            <a>
              <Title>Offres</Title>
            </a>
          </Link>
        </WrapperTitle>
      </ContainerMenu>
    </>
  );
};

export default Header;
