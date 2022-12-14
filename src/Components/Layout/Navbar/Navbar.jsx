import { Box, Button, Flex, HStack, Hide, Image, Link } from '@chakra-ui/react'
import { links, pagesRoutes } from '@/Helpers'

import Dropdown from '@/Components/ShoppingCart/DropDown'
import Logo from '@/assets/navBar/Logo.svg'
import NavBarMobileScreen from './NavBarMobileScreen'
import { NavLink } from 'react-router-dom'
import ProfilePhoto from '@/assets/navBar/ProfilePhoto.svg'

function Navbar() {
  return (
    <>
      <Box borderBottom='1px' borderColor='empty'>
        <Flex
          gap={{ base: '2', md: '3', lg: 4, xl: 4 }}
          h='92px'
          maxW={'1440px'}
          alignItems='center'
          justifyContent='space-between'
          display={['none', 'none', 'none', 'flex']}
          mx={'auto'}
          pr={2}
        >
          <HStack spacing={{ md: 4, lg: 12 }} pl={{ md: 2, lg: 6 }}>
            <Link as={NavLink} to={'/'}>
              <Image src={Logo} h='30px' w='40px' alt='' />
            </Link>
            <Flex gap={{ md: 3, lg: 6, xl: 8 }}>
              {links.map(link => {
                const { id, title } = link

                return (
                  <HStack key={id}>
                    <Link
                      as={NavLink}
                      to={pagesRoutes[id - 1]}
                      fontSize={{
                        base: 'small',
                        lg: 'description',
                        xl: 'general',
                      }}
                      fontWeight='semibold'
                      display={'flex'}
                      align={'center'}
                    >
                      {title}
                    </Link>
                  </HStack>
                )
              })}
              <Box>
                <Button
                  borderWidth={'2px'}
                  border={'solid'}
                  borderColor={'logo'}
                  color={'logo'}
                  fontSize={{ md: 'description', lg: 'general' }}
                  fontWeight={'semibold'}
                  w={{ md: '6rem', xl: '7.5rem' }}
                  borderRadius='66px'
                >
                  Our deals
                </Button>
              </Box>
            </Flex>
          </HStack>
          <HStack align='center'>
            <Dropdown />
            <Button w='60px' h='36px' bgColor='transparent'>
              <Image src={ProfilePhoto} alt='profile-icon' />
            </Button>
          </HStack>
        </Flex>
      </Box>

      {/* mobile view */}
      <Hide above='md'>
        <NavBarMobileScreen />
      </Hide>
    </>
  )
}
export default Navbar
