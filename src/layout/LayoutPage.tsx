import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

function LayoutPage({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    );
}

export default LayoutPage;
