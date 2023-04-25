import React from "react";

import { BsFillCalendarDateFill } from "react-icons/bs";

import {
    Icon,
    Flex,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    Box,
} from "@chakra-ui/react";

import Header from "../components/Header";

import LayoutPage from "../layout/LayoutPage";
import DescriptionCard from "../components/DescriptionCards";
import GradientDescriptionBox from "../components/GradientDescriptionBox";

function HomeScreen() {
    return (
        <LayoutPage>
            <Header color="teal.100"/>
            <Flex bg="teal.100" h="89vh" alignItems="center">
                <Container maxW="70%">
                    <Grid
                        alignItems="center"
                        templateColumns={{base: "1fr", lg: "1.5fr 1fr"}}
                        gap="30px"
                    >
                        <GridItem>
                            <Heading mb="20px" size="3xl" fontWeight="bold">
                                Удобный и понятный планер для ваших дел
                            </Heading>
                            <Text mb="20px">Попробуйте его прямо сейчаc</Text>
                            <Flex direction="row" flexWrap="wrap" gap="20px">
                                <Button colorScheme="pink" variant="solid">
                                    Попробовать
                                </Button>
                                <Button colorScheme="teal">
                                    Узнать подробнее
                                </Button>
                            </Flex>
                        </GridItem>
                        <GridItem display={{base: "none", lg: "grid"}} justifyContent="center">
                            <Flex direction="column" alignItems="center" gap="20px">
                                <Box border="1px" textAlign="center" p="10px" borderRadius="15px" borderColor="teal" color="teal">Откройте для себя большие возможности</Box>
                                <Icon as={BsFillCalendarDateFill} color="teal" boxSize={150} />
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>
            </Flex>
            <Container maxW="70%">
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
            <GradientDescriptionBox/>
            
        </LayoutPage>
    );
}

export default HomeScreen;
