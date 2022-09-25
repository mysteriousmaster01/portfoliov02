import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    Link,
    List,
    SimpleGrid,
    useColorModeValue
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Section from '../components/section';
import NextLink from 'next/link';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoGithub, IoLogoInstagram,IoLogoGoogle, IoLogoWhatsapp } from 'react-icons/io5';

const Page = () => {
    return (
        <Layout>
            <Container maxW='container.xl'>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={2} align="center">
                    Hello There, Jay Prajapati here, Full Stack Developer In India
                </Box>
                <Box display={{ md: 'flex' }} mt={3}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant="page-title" align='center' fontFamily='mono'>Jay Prajapati</Heading>
                        <p align='center'>Digital Craftman Developer / Artist / Designer </p>

                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
                        <Image
                            maxWidth='150px'
                            display='inline-block'
                            src="/images/Profile.png"
                            alt='profile img' />
                    </Box>
                </Box>
                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title' fontFamily='body'>
                        Intro
                    </Heading>
                    <Paragraph>I am a 4th year Bachelors of Engineering Student in Information
                        Technology at Sardar Vallabhbhai Patel Institute of Technology,
                        Vasad. I’m seeking an opportunity to discover the professional
                        world that I want to integrate into after my studies .
                    </Paragraph>
                    <Box align='center' my={4}>
                        <NextLink href='/works'>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme='telegram'>
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.4}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        Born In Anand, Gujarat.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Pesuing B.E (I.T) from GTU, Ahmedabad.
                    </BioSection>
                </Section>
                <Section delay={0.4}>
                    <Heading as='h3' variant='section-title'>
                        My Hobbies
                    </Heading>
                    <BioSection>
                        Flute, Football, Swimming, Travelling, Reading, Gaming
                        Cycling, Chess, Vollyball, Music, Movies, Stick Perfomance.
                    </BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as='h3' variant='section-title'>
                        CONNECT WITH ME
                    </Heading>
                    <SimpleGrid columns={[4, 4, 4]} align='center'>
                        <Link href='https://www.google.com/' color='telegram.600'>
                            <IoLogoGithub size={50} />
                        </Link>
                        <Link href='https://www.google.com/'>
                            <IoLogoInstagram size={50} />
                        </Link>
                        <Link href='mailto:jayprajapati2101@gmail.com' color='red'>
                            <IoLogoGoogle size={50} />
                        </Link>
                        <Link href='tel:+916351151815' color='green'>
                            <IoLogoWhatsapp size={50} />
                        </Link>
                    </SimpleGrid>

                </Section>
            </Container>
        </Layout>
    )
}

export default Page;