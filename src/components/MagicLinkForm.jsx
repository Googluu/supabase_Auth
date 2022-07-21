import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import useForm from '../hooks/useForm'


const MagicLinkForm = () => {

    const { formValues, handleInputChange } = useForm({ email: '' })
    const { email } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }


    return(
        <>
        <Heading fontSize='2xl' mb='20px'>Login using Magic Link</Heading>
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl id='memail'>
                    <FormLabel>Email</FormLabel>
                    <Input 
                    type='email' 
                    name='email' 
                    value={email}
                    onChange={handleInputChange}
                    />
                </FormControl>
            <Button type='submit' colorScheme='blue'>Send Link</Button>
            </Stack>
        </form>
    </>
    )
}

export default MagicLinkForm