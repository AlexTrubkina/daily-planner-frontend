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
    Icon
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LayoutPage from "../../layout/LayoutPage";

import { AiFillGoogleCircle } from "react-icons/ai";
import { FaYandex } from "react-icons/fa"

function SignIn(): JSX.Element {
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
                                Войдите в аккаунт
                            </Heading>

                            <Text fontWeight="semibold" mb="8px">Введите почту</Text>
                            <Input backgroundColor="white" />
                            <Text fontWeight="semibold" mb="8px" mt="10px">
                                Введите пароль
                            </Text>
                            <Input backgroundColor="white" />
                            <Box mt="20px" textDecoration="underline">
                                <Link to="#">Забыли пароль?</Link>
                            </Box>
                            <Flex gap="10px" alignItems="center" mt="20px">
                                <Icon color="orange" fontSize="2rem" as={AiFillGoogleCircle}/>
                                <Icon color="red" fontSize="1.5rem" as={FaYandex}/>
                            </Flex>
                            <Button colorScheme="facebook" w="100px" mt="30px">
                                Войти
                            </Button>
                        </CardBody>
                    </Card>
                </Container>
            </Flex>
        </LayoutPage>
    );
}

export default SignIn;
