import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='logister'>
            <Container>
                <Title>Logister <Badge>2022</Badge></Title>
                <P>
                    Logistic Management System is a combination of software tools
                    that optimize all process from making an import in warehouse to
                    exporting the product to the retailer.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://jay-prajapati.vercel.app/'>
                            https://jay-prajapati.vercel.app/ <ExternalLinkIcon mx='2px' />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows iOS Android MacOS Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology Used</Meta>
                        <span>Next Js, Node Js, Framer Motion, Three Js, React </span>
                    </ListItem>
                </List>
                <WorkImage src="/images/project01.png" alt="Logister" />
            </Container>
        </Layout>
    )
}

export default Work;