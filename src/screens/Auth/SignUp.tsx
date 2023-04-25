import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    Flex,
    Heading,
    Input,
    Text,
    Icon,
    GridItem,
    Grid,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LayoutPage from "../../layout/LayoutPage";

import { AiOutlineGoogle } from "react-icons/ai";
import { FaYandex } from "react-icons/fa";

function SignUp(): JSX.Element{
    return (
        <LayoutPage>
            <Header color="white" />
            <Flex
                h="100vh"
                fontSize="md"
                alignItems="center"
                justifyContent="center"
            >
                <Container>
                    <Card
                        w={{ base: "100%", md: "600px" }}
                        padding="30px"
                        backgroundColor="cyan.100"
                    >
                        <CardBody>
                            <Heading mb="30px" fontWeight="bold">
                                Зарегистрируйтесь
                            </Heading>

                            <Text fontWeight="semibold" mb="8px">
                                Введите почту
                            </Text>
                            <Input backgroundColor="white" />
                            <Text fontWeight="semibold" mb="8px" mt="10px">
                                Введите пароль
                            </Text>
                            <Input backgroundColor="white" />
                            <Text fontWeight="semibold" mb="8px" mt="10px">
                                Повторите пароль
                            </Text>
                            <Input backgroundColor="white" />
                            <Box mt="20px" textDecoration="underline">
                                <Link to="#">Уже есть аккаунт?</Link>
                            </Box>
                            <Grid
                                mt="30px"
                                gridTemplateColumns="5fr 1fr"
                                alignItems="center"
                            >
                                <GridItem>
                                    <Button colorScheme="facebook" w="100px">
                                        Войти
                                    </Button>
                                </GridItem>
                                <GridItem>
                                    <Flex gap="10px" alignItems="center">
                                        <Flex
                                            transition="0.2s"
                                            alignItems="center"
                                            color="white"
                                            _hover={{
                                                backgroundColor: "orange",
                                                cursor: "pointer",
                                            }}
                                            borderRadius="5px"
                                            justifyContent="center"
                                            w="45px"
                                            h="45px"
                                            backgroundColor="blackAlpha.800"
                                        >
                                            <Icon
                                                fontSize="2rem"
                                                as={AiOutlineGoogle}
                                            />
                                        </Flex>
                                        <Flex
                                            transition="0.2s"
                                            alignItems="center"
                                            color="white"
                                            _hover={{
                                                backgroundColor: "red",
                                                cursor: "pointer",
                                            }}
                                            justifyContent="center"
                                            borderRadius="5px"
                                            w="45px"
                                            h="45px"
                                            backgroundColor="blackAlpha.800"
                                        >
                                            <Icon
                                                fontSize="2rem"
                                                as={FaYandex}
                                            />
                                        </Flex>
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </CardBody>
                    </Card>
                </Container>
            </Flex>
        </LayoutPage>
    );
}

export default SignUp;
