import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import useForm from '../hooks/useForm'

const initialState = {
    email: '',
    password: ''
}


const LoginForm = () => {

    const { formValues, handleInputChange } = useForm(initialState)
    const { email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return(
        <>
        <Heading fontSize='2xl' mb='20px'>Sign In</Heading>
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl id='lemail'>
                    <FormLabel>Email</FormLabel>
                    <Input 
                    type='email' 
                    name='email' 
                    value={email}
                    onChange={handleInputChange}
                    />
                </FormControl>

                <FormControl id='lpassword'>
                    <FormLabel>Password</FormLabel>
                    <Input 
                    type='password' 
                    name='password' 
                    value={password}
                    onChange={handleInputChange}
                    />
                </FormControl>
            <Button type='submit' colorScheme='blue'>Login</Button>

            <Button leftIcon={<FcGoogle />} variant='outline'>
                Sign in with Google
            </Button>
            </Stack>
        </form>
    </>
    )
}

export default LoginForm