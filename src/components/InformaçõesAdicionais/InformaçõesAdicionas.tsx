import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function InformçõesAdicionais() {
    return (
      <Flex
        w={'full'}
        h={'70vh'}
        backgroundImage='/img/background.jpg'
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack 
            maxW={'4xl'}
            align={'flex-start'}
            spacing={10}
            bgColor='blackAlpha.400'
            borderRadius={'lg'}
            p='5rem'>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
                Crie seus requerimentos
                Totalmente online!
            </Text>
            <Stack direction={'row'} justify='center'>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Faça seu Requerimento aqui
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }