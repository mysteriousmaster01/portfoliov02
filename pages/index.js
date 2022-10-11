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
import { DownloadIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoGithub, IoLogoInstagram, IoLogoGoogle, IoLogoWhatsapp } from 'react-icons/io5';
import Typical from "react-typical";
import Social from "../components/Social";


const Page = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }




    return (
        <Layout>
            <Container maxW='container-xl'>
                {/* <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={3} align="center">
                    Hello There, Jay Prajapati here, Full Stack Developer In India
                </Box> */}
                <Box display={{ md: 'flex' }} mt={3}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant="page-title" align='center' fontFamily='cursive'>Jay Prajapati</Heading>
                        <Heading as='h4' align='center' mt={5} fontFamily=''>
                            <span style={{color:'orangered'}}>
                                <Typical
                                    steps={["A Developer", 3000, "An Artist", 3000, "A Designer", 3000]}
                                    loop={Infinity}
                                    wrapper='i'
                                    className='anitque'
                                />
                            </span> 
                        </Heading>
                        {/* <p align='center'>Developer / Artist / Designer </p> */}

                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
                        <Image
                            maxWidth='200px'
                            display='inline-block'
                            src="/images/Profile.png"
                            alt='profile img' />
                    </Box>
                </Box>
                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title' fontFamily='body'>
                        Objective
                    </Heading>
                    <Paragraph>I am a Final Year Student Persuing Bachelor's of Engineering
                        in Information Technology at Sardar Vallabhbhai Patel Institute of Technology,
                        Vasad. I’m seeking an opportunity to discover the professional
                        world that I want to integrate into after my studies .
                    </Paragraph>
                    <Box align='center' my={4}>
                        
                            <Button 
                            rightIcon={<DownloadIcon />} 
                            colorScheme='telegram'
                            onClick={onButtonClick}
                            >
                                Resume
                            </Button>
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
                    <Social/>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;