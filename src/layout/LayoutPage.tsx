import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

function LayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <ChakraProvider>{children}</ChakraProvider>
        </body>
    );
}

export default LayoutPage;
