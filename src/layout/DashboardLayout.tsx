import React from "react";

import { ChakraProvider, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

function DashBoardLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <ChakraProvider>
            <Sidebar />
            <Box>{children}</Box>
        </ChakraProvider>
    );
}

export default DashBoardLayout;
