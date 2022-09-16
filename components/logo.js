import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
line-height: 20px;
padding: 10px;

&hover img {
    transform: rotate(20deg);
}
`
const Logo = () => {

    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='cursive'
                        fontWeight='bold'
                        ml='3'
                        >
                            Jay Prajapati
                        </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;