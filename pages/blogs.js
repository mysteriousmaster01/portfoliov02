import { Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";


const Blog = () => {
    return (
        <Layout title='Blogs'>
            <Heading as='h1' fontSize={72} align='center' mt={24}>
                BLOGS ARE COMMING SOON
            </Heading>
        </Layout>
    )
}

export default Blog;
