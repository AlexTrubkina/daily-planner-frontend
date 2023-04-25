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
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    Divider,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

import { BsFillCalendarDateFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

import { navLinks } from "../data/datasets";

function Header({ color }: { color: string }): JSX.Element {
    const isDesktop: boolean | undefined = useBreakpointValue({
        base: false,
        lg: true,
    });
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const mobileToggle: React.RefObject<HTMLButtonElement> = React.useRef(null);
    return (
        <Box backgroundColor={color} as="nav">
            <HStack py="4" px="20px" spacing="10" justify="space-between">
                <Flex gap="20px" alignItems="center">
                    <NavLink to="/">
                        <Icon
                            as={BsFillCalendarDateFill}
                            boxSize={10}
                            color="teal"
                        />
                    </NavLink>
                    <NavLink to="/">
                        <Text fontWeight="bold" fontSize="xl">
                            Daily Planner
                        </Text>
                    </NavLink>
                </Flex>
                {isDesktop ? (
                    <Flex justify="space-between" flex="1">
                        <ButtonGroup variant="link" spacing="8">
                            {navLinks.map((item) => (
                                <Button key={item}>{item}</Button>
                            ))}
                        </ButtonGroup>
                        <HStack spacing="3">
                            <NavLink to="/signin">
                                <Button variant="ghost">Войти</Button>
                            </NavLink>
                            <NavLink to="/signup">
                                <Button variant="primary">
                                    Зарегистрироваться
                                </Button>
                            </NavLink>
                        </HStack>
                    </Flex>
                ) : (
                    <IconButton
                        onClick={onOpen}
                        ref={mobileToggle}
                        variant="ghost"
                        aria-label="Open Menu"
                        icon={<FiMenu fontSize="1.25rem" />}
                    />
                )}
            </HStack>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={mobileToggle}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Icon
                            as={BsFillCalendarDateFill}
                            boxSize={10}
                            color="teal"
                        />
                        <Text fontWeight="bold" fontSize="xl">
                            Daily Planner
                        </Text>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex flexDirection="column" gap="4" alignItems="start">
                            {navLinks.map((item) => (
                                <Button variant="ghost" key={item}>
                                    {item}
                                </Button>
                            ))}
                            <Divider />
                            <Button variant="ghost">Войти</Button>
                            <Button variant="primary">
                                Зарегистрироваться
                            </Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Header;
