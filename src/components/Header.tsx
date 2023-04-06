import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";

function Header() {
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    return (
        <Box as="section" pb={{ base: "12", md: "24" }}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container py={{ base: "4", lg: "5" }}>
                    <HStack spacing="10" justify="space-between">
                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">
                                <ButtonGroup variant="link" spacing="8">
                                    {[
                                        "О нас",
                                        "Тарифы",
                                        "Поддержка",
                                    ].map((item) => (
                                        <Button key={item}>{item}</Button>
                                    ))}
                                </ButtonGroup>
                                <HStack spacing="3">
                                    <Button variant="ghost">Войти</Button>
                                    <Button variant="primary">Зарегистрироваться</Button>
                                </HStack>
                            </Flex>
                        ) : (
                            <IconButton
                                variant="ghost"
                                aria-label="Open Menu"
                            />
                        )}
                    </HStack>
                </Container>
            </Box>
        </Box>
    );
}

export default Header;
