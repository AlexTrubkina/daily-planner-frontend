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
import DescriptionCard from "../components/DescriptionCards";

function HomeScreen() {
    return (
        <LayoutPage>
            <Header />
            <Container maxW='3xl'>
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
                        <Stack direction="row" spacing={4}>
                            <Button colorScheme="pink" variant="solid">
                                Попробовать
                            </Button>
                            <Button colorScheme="teal">Узнать подробнее</Button>
                        </Stack>
                    </GridItem>
                    <GridItem>
                        <Image src="/images/firstBlockImg.jpg" alt="Блокноты" />
                    </GridItem>
                </Grid>
                <DescriptionCard
                    left={true}
                    heading="Удобно и практично"
                    imgLink="/images/previewImgFirst.svg"
                    text="Вы сможете использовать наш планнер каждый день. Это удобно и практично. Запишите свои эмоции или пометьте важные события"
                />
                <DescriptionCard
                    left={false}
                    heading="Отмечайте свое настроение"
                    imgLink="/images/previewImgSecond.svg"
                    text="На каждый предусмотен индикатор настроения, который вы можете поставить в завиимости от вашего желания. Поделитесь с миром своей радостью или печалью."
                />
            </Container>
        </LayoutPage>
    );
}

export default HomeScreen;
