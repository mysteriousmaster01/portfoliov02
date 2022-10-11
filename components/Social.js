import { Flex, HStack, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import NextLink from 'next/link';
import { PhoneIcon } from '@chakra-ui/icons';



function Social() {

    return (
        <HStack spacing='10' 
        ml={{ sm: '18', md: '52' }}>
                <Link 
                href='https://devaslife-portfolio.vercel.app/'
                target='_blank'
                color='hotpink'
                >
                    <Icon as={FaInstagram}
                        boxSize='42' />
                </Link>

            <Link href='https://www.linkedin.com/in/jay-prajapati-8095721a2/'
                target='_blank'
                color='linkedin.400'
                >
                <Icon as={FaLinkedinIn}
                    boxSize='42'
                    textDecoration='none'
                />
            </Link>
            <Link href='https://github.com/mysteriousmaster01'
                target='_blank'
                color='gray.200'
                >
                <Icon as={FaGithub}
                    boxSize='42' />
            </Link>
            <Link href='mailto:jayprajapati2101@gmail.com'
                target='_blank'
                color='red.500'
                >
                <Icon as={FaGoogle}
                    boxSize='42' />
            </Link>
            <Link href='tel:+916351151815'
            target='_blank'
            color='whatsapp.300'
            >
                <Icon as={PhoneIcon}
                boxSize='39'
                />
            </Link>
        </HStack>
    )
}

export default Social
