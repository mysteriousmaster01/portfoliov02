import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from '../components/section';
import WorkGridItem from '../components/grid-item'
import logisterImg from '../public/images/project01.png';
import portfolioImg from '../public/images/Profile.png'
import Layout from "../components/layouts/article";


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as='h3' fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="logister"
                            title="Logistic Management Website"
                            thumbnail={logisterImg}
                        >
                            Logistic Management System is a combination of software tools
                            that optimize all process from making an import in warehouse to
                            exporting the product to the retailer.

                        </WorkGridItem>
                    </Section>

                    <Section delay={1}>
                        <WorkGridItem
                            id="portfolio"
                            title="Portfolio Website of Jay Prajapati"
                            thumbnail={portfolioImg}
                        >
                            In This Project I Made a portfolio website with the latest framework of
                            react js called next js and the tailwind css,  check it out.

                        </WorkGridItem>
                    </Section>

                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works;