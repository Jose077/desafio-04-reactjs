import { Box, Heading, Flex,  CircularProgress } from '@chakra-ui/react';

export function Loading(): JSX.Element {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDir="column"
    >
      <Flex
        flexDir="column"
        alignItems="center"
      >
        <Heading>Carregando aplicação...</Heading>

        <CircularProgress
          mt={4}
          size={120}
          isIndeterminate
          bgColor="transparent"
          color="orange"
        />
      </Flex>
    </Flex>
  );
}
