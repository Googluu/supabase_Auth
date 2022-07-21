import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { supabase } from '../api/supabaseClient'
import useForm from '../hooks/useForm'

import { signUpWithEmail, updateProfile } from '../services/auth'



const initialState = {
    fullname: '',
    email: '',
    password: ''
}

const SignUpForm = () => {

    const { formValues, handleInputChange } = useForm(initialState)
    const { fullname, email, password } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
       const { fullname, email, password } = formValues
       const result = await signUpWithEmail({ email, password })
       if(result){
        const user = supabase.auth.user()
        const data = {
            id: user.id,
            full_name: fullname
        }
        await updateProfile(data)
       }
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