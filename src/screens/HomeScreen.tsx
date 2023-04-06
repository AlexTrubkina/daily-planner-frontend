import React from "react";

import {
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

import Header from "../components/Header";

import LayoutPage from "../layout/LayoutPage";

function HomeScreen() {
    return (
        <LayoutPage>
            <Header />
            <Container>
                <Grid
                    alignItems="center"
                    templateColumns="1.5fr 1fr"
                    gap="30px"
                >
                    <GridItem>
                        <Heading mb="20px" fontWeight="bold">
                            Удобный и понятный планер для ваших дел
                        </Heading>
                        <Text mb="20px">Попробуйте его прямо сейчаc</Text>
                        <Stack direction='row' spacing={4}>
                            <Button colorScheme='pink' variant='solid'>
                                Попробовать
                            </Button>
                            <Button colorScheme="teal">
                                Узнать подробнее
                            </Button>
                        </Stack>
                    </GridItem>
                    <GridItem>
                        <Image src="/images/firstBlockImg.jpg" alt="Блокноты" />
                    </GridItem>
                </Grid>
            </Container>
        </LayoutPage>
    );
}

export default HomeScreen;
