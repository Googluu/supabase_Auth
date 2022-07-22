import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import useForm from '../hooks/useForm'

import { signInWithEmail, signInWithGithub } from '../services/auth'

const initialState = {
    email: '',
    password: ''
}


const LoginForm = () => {

    const { formValues, handleInputChange } = useForm(initialState)
    const { email, password } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signInWithEmail(formValues)
    }

    const handleSubmitWithGithub = async () => {
        await signInWithGithub()
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

            <Button leftIcon={<AiFillGithub />} variant='outline' onClick={handleSubmitWithGithub}>
                Sign in with Github
            </Button>
            </Stack>
        </form>
    </>
    )
}

export default LoginForm