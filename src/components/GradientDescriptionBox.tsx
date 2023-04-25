import { Box, Heading, Image, Container } from "@chakra-ui/react";

import React from "react";

function GradientDescriptionBox(): JSX.Element {
    return (
        <Box
            padding="30px"
            mb="20px"
            bgGradient="linear(to-r, teal.500, green.500)"
        >
            <Container boxShadow="2xl" padding="30px" borderRadius="15px">
                <Heading mb="30px" color="white" fontWeight="bold">
                    Начните планировать свой день как профссионал
                </Heading>
                <Image
                    src="/images/firstBlockImg.jpg"
                    borderRadius="15px"
                    alt="together"
                />
            </Container>
        </Box>
    );
}

export default GradientDescriptionBox;
