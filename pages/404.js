import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import NexLink from 'next/link';

const NotFound = () => {
    return (
        <Container>
            <Heading as='h1'>Not Found</Heading>
            <Text>The Page you're looking for was not found.</Text>
            <Divider mt={24} />

            <Box my={6} align='center'>
                <NexLink href='/'>
                    <Button colorScheme='telegram'>Return To Home</Button>
                </NexLink>

            </Box>
        </Container>
    )
}

export default NotFound;