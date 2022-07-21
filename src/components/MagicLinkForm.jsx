import { Heading, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'


const MagicLinkForm = () => {
    return(
        <>
        <Heading fontSize='2xl' mb='20px'>Login using Magic Link</Heading>
        <form>
            <Stack spacing={4}>
                <FormControl id='memail'>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' name='email' />
                </FormControl>
            <Button colorScheme='blue'>Button</Button>
            </Stack>
        </form>
    </>
    )
}

export default MagicLinkForm