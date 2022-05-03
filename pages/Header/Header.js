import React from "react";
import HeaderWrapper, {
  ImgWrapperLeft,
  ImgWrapperRight,
  Text,
} from "./Header.style";
import Image from "next/image";
import Link from "next/link";
import PortraitScopie from "../../public/image/PortraitScopie-remove.png";
import Profil from "../../public/image/profil.png";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <ImgWrapperLeft>
          <Link href="/">
            <Image
              src={PortraitScopie}
              alt={"PortraitScopie"}
              width={350}
              height={69}
            />
          </Link>
        </ImgWrapperLeft>
        <ImgWrapperRight>
          <Link href="/">
            <a>
              <Image
                src={Profil}
                alt={"PortraitScopie"}
                width={350}
                height={69}
              />
              <Text>Jhon</Text>
            </a>
          </Link>
        </ImgWrapperRight>
      </HeaderWrapper>
    </>
  );
};

export default Header;
