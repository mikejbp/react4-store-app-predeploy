import '@/Components/Testimonials/carousel.css'
import { testimonials } from '@/Helpers'
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Testimonials() {
  return (
    <>
      <Box
        bg={'divBg'}
        mx={6}
        pt={8}
        pb={{ base: 1, xs: 4, md: 1 }}
        borderTopRadius={'1rem'}
      >
        <Carousel
          autoPlay={true}
          interval={2500}
          infiniteLoop={true}
          emulateTouch={true}
          showStatus={false}
          showArrows={false}
          transitionTime={10}
        >
          {testimonials.map((review) => {
            const { id, text, name } = review

            return (
              <Stack
                key={id}
                py={{ base: 2, xs: 10 }}
                mx={{ base: 10, md: 36, xl: 56 }}
                spacing={4}
                fontFamily={'body'}
              >
                <HStack spacing={6}>
                  <Box
                    fontSize={{ base: '52px', md: '96px' }}
                    fontWeight={'normal'}
                  >
                    ‘’
                  </Box>
                  <Text
                    textAlign={'left'}
                    color={'black'}
                    fontWeight={'normal'}
                    fontSize={{ base: 'description', md: 'paragraph' }}
                  >
                    {text}
                  </Text>
                </HStack>
                <Text
                  display={'flex'}
                  justifyContent={'flex-end'}
                  color={'black'}
                  fontWeight={'normal'}
                  fontSize={{ base: 'stock', md: 'general' }}
                >
                  {name}
                </Text>
                <Button
                  w={{ base: '10rem', sm: '11.375rem' }}
                  border={'solid'}
                  borderColor={'logo'}
                  color={'logo'}
                  borderRadius={'1.5rem'}
                  fontWeight={'semibold'}
                  fontSize={'general'}
                >
                  Leave Us A Review
                </Button>
              </Stack>
            )
          })}
        </Carousel>
      </Box>
    </>
  )
}
export default Testimonials
