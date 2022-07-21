import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const SignUpForm = () => {
    return(
        <>
            <Heading fontSize='2xl' mb='20px'>Sign Up</Heading>
            <form>
                <Stack spacing={4}>
                    <FormControl id='fullname'>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' name='fullname' />
                    </FormControl>

                    <FormControl id='email'>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name='email' />
                    </FormControl>

                    <FormControl id='password'>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' name='password' />
                    </FormControl>
                <Button colorScheme='blue'>Button</Button>
                </Stack>
            </form>
        </>
    )
}

export default SignUpForm