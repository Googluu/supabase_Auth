import { Button, Heading, Text, Box, Flex } from '@chakra-ui/react'
import useProfile from '../hooks/useProfile'
import {logout} from '../services/auth'

const Welcome = () => {

    const userProfile= useProfile()
    console.log(useProfile)

    const signOut = async () => {
        await logout()

    }

    return (
        <>
            <Flex mt={4} pr={8} pl={8} flexDirection={'row'} justifyContent={'space-between'}>
            <Box>
                <Heading as='h3' size='md' mb={2}>
                    Welcome
                </Heading>
                <Text fontSize='sm' color='blue.800' fontWeight={'600'}>
                    {
                        userProfile ? userProfile.username : 'Sin Datos'
                    }
                </Text>
            </Box>
                <Button colorScheme='blue' onClick={signOut}>Logout</Button>
            </Flex>
        </>
      )
    }

export default Welcome