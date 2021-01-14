import Head from 'next/head';
import {Text, Flex, Box} from '@chakra-ui/react'
import { useAuth } from '../lib/auth'
export default function Index() {
  const auth = useAuth()
  return auth.user ? (
    <>
    <Box bg="gray.100" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
      <Text mb={4} fontSize="lg" py={4}>
      <Text as="span" fontWeight="bold" display="inline">
              NPD InfoCore
      </Text>
      </Text>
      </Flex>
      </Box>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </>
  ) : (
    <button onClick={(e) => auth.signinWithGoogle()}>With Google</button>
  ) 
    
}