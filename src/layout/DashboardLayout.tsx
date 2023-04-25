import React from "react";

import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

function DashBoardLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <ChakraProvider>
            <Flex m="20px" gap="20px">
                <Sidebar />

                <Box
                    borderRadius="20px" 
                >
                    {children}
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default DashBoardLayout;
