import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

const LoginForm = () => {
    return(
        <>
        <Heading fontSize='2xl' mb='20px'>Sign In</Heading>
        <form>
            <Stack spacing={4}>
                <FormControl id='lemail'>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' name='email' />
                </FormControl>

                <FormControl id='lpassword'>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password' />
                </FormControl>
            <Button colorScheme='blue'>Button</Button>

            <Button leftIcon={<FcGoogle />} variant='outline'>
                Sign in with Google
            </Button>
            </Stack>
        </form>
    </>
    )
}

export default LoginForm