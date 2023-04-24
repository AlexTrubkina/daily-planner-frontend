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
} from "@chakra-ui/react";

import { BsFillCalendarDateFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

function Header(): JSX.Element {
    const isDesktop: boolean | undefined = useBreakpointValue({
        base: false,
        lg: true,
    });

    const navLinks: Array<string | null | undefined> = [
        "О нас",
        "Тарифы",
        "Поддержка",
    ];

    const { isOpen, onOpen, onClose } = useDisclosure();
    const mobileToggle: React.RefObject<HTMLButtonElement> = React.useRef(null);
    return (
        <Box bg="teal.100" as="nav">
            <HStack py="4" px="20px" spacing="10" justify="space-between">
                <Flex gap="20px" alignItems="center">
                    <Icon
                        as={BsFillCalendarDateFill}
                        boxSize={10}
                        color="teal"
                    />
                    <Text fontWeight="bold" fontSize="xl">
                        Daily Planner
                    </Text>
                </Flex>
                {isDesktop ? (
                    <Flex justify="space-between" flex="1">
                        <ButtonGroup variant="link" spacing="8">
                            {navLinks.map((item) => (
                                <Button key={item}>{item}</Button>
                            ))}
                        </ButtonGroup>
                        <HStack spacing="3">
                            <Button variant="ghost">Войти</Button>
                            <Button variant="primary">
                                Зарегистрироваться
                            </Button>
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
                        {navLinks.map((item) => (
                            <Button key={item}>{item}</Button>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Header;
