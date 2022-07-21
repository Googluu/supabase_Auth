import { Grid, GridItem } from "@chakra-ui/react"
import LoginForm from "./LoginForm"
import MagicLinkForm from "./MagicLinkForm"
import SignUpForm from "./SignUpForm"

const Auth = () => {
    return(
        <Grid templateColumns='repeat(3, 400px)' gap={70} placeContent='center' w='auto' h='100%'>
            <GridItem>
                <SignUpForm />
            </GridItem>

            <GridItem>
                <LoginForm />
            </GridItem>

            <GridItem>
                <MagicLinkForm />
            </GridItem>
        </Grid>
    )
}

export default Auth