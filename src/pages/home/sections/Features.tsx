import { Container, Flex } from "@chakra-ui/react"
import { CardFeatures } from "components/layout/cards/CardFeatures"





function Features (){


    return(
        <Container maxW="100vw" bgGradient="linear(to-l, #121215 ,#284736)">
            <Flex alignItems="center"> 
               <CardFeatures />
               <CardFeatures />
               <CardFeatures />
            </Flex>
        </Container>
    )

}

export {Features}