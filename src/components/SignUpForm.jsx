import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import useForm from '../hooks/useForm'

const initialState = {
    fullname: '',
    email: '',
    password: ''
}

const SignUpForm = () => {

    const { formValues, handleInputChange } = useForm(initialState)
    const { fullname, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return(
        <>
            <Heading fontSize='2xl' mb='20px'>Sign Up</Heading>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id='fullname'>
                        <FormLabel>Full Name</FormLabel>
                        <Input 
                        type='text' 
                        name='fullname' 
                        value={fullname}
                        onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id='email'>
                        <FormLabel>Email</FormLabel>
                        <Input 
                        type='email' 
                        name='email' 
                        value={email}
                        onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl id='password'>
                        <FormLabel>Password</FormLabel>
                        <Input 
                        type='password' 
                        name='password' 
                        value={password}
                        onChange={handleInputChange}
                        />
                    </FormControl>
                <Button type='submit' colorScheme='blue'>Register</Button>
                </Stack>
            </form>
        </>
    )
}

export default SignUpForm