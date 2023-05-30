import React from "react";

import { ChakraProvider, Box, Grid } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";



function DashBoardLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <ChakraProvider>
            <Box backgroundColor="#fae0eb"  minH="110vh" pb="20px" mt="-20px" pt="20px">
            <Grid m="20px" gridTemplateColumns="1fr 3fr" columnGap="20px">

                <Sidebar />

                <Box
                    borderRadius="20px" 
                >
                    {children}
                </Box>
            </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default DashBoardLayout;
