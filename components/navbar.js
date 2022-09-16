import Logo from './logo';
import NextLink from 'next/link';
import {
    Box,
    Container, 
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useColorModeValue } from '@chakra-ui/react';
import ThemeToggleButton from "../components/theme-toggle-button";


const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return (

        <Box
        position='fixed'
        as='nav'
        w='100%'
        bg={useColorModeValue('#ffffff40',"#20202380")}
        style={{backdropFilter:'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container 
              display='flex'
              maxW='container.md'
              wrap='wrap'
              align='center'
              mt={1}
              justify='space-between'
            >
                <Flex align='center' mr='5'>
                    <Heading as='h1' size='lg' letterSpacing='tighter'>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                  direction={{base:'column', md: 'row'}}
                  display={{base:'none', md:'flex'}}
                  wigth={{base:'full', md:'auto'}}
                  alignItems='center'
                  flexGrow={1}
                  mt={{base:4, nmd:0}}
                >
                    <LinkItem href='/works' path={path}>Works</LinkItem>
                    <LinkItem href='blogs' path={path}>Blogs</LinkItem>
                </Stack>

                <Box flex={1} mb={2} align='right'>
                    
                    <ThemeToggleButton />
                    
                    
                    <Box ml={2} mt={2} display={{base:'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton
                              as={IconButton}
                              icon={<HamburgerIcon/>}
                              variant='outline'
                              aria-label='Options'
                            />
                            <MenuList>
                                <NextLink href='/' passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href='/works' passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href='/blogs' passHref>
                                    <MenuItem as={Link}>Blogs</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;