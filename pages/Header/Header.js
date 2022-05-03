import React from "react";
import HeaderWrapper, { ImgWrapperLeft, ImgWrapperRight,Text } from './Header.style';
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <ImgWrapperLeft>
                    <Link href='/'>
                        <Image 
                            src={}
                            alt={'PortraitScopie'}
                            width={350}
                            height={69}
                        />
                    </Link>
                </ImgWrapperLeft>
                <ImgWrapperRight>
                    <Link href='/profile'>
                        <Image 
                            src={}
                            alt={'PortraitScopie'}
                            width={350}
                            height={69}
                        />
                        <Text>Jhon</Text>
                    </Link> 
                </ImgWrapperRight>
            </HeaderWrapper>
        </>
    );
}

export default Header;