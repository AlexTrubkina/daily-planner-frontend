import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    Icon,
    Text,
    useBreakpointValue,
    IconButton,
} from "@chakra-ui/react";

import { BsFillCalendarDateFill } from "react-icons/bs";

function Header() {
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    return (
            <Box bg="teal.100" as="nav">
                {/* <Flex py={{ base: "4", lg: "5" }}> */}
                    <HStack py={{ base: "4", lg: "5" }} px="20px" spacing="10" justify="space-between">
                    <Flex gap="20px" alignItems="center">
                        <Icon as={BsFillCalendarDateFill} boxSize={10} color="teal"/>
                        <Text fontWeight="bold" fontSize="xl">
                            Daily Planner
                        </Text>
                    </Flex>
                    
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
                {/* </Flex> */}
            </Box>
        
    );
}

export default Header;
