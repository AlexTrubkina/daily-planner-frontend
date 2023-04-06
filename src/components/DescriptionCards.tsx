import {
    Grid,
    GridItem,
    Text,
    Image,
    Heading,
    Button,
    Flex,
} from "@chakra-ui/react";
import React from "react";

function DescriptionCard({
    imgLink,
    text,
    heading,
    left,
}: {
    imgLink: string;
    text: string;
    heading: string;
    left: boolean;
}) {
    return (
        <Grid
            alignItems="center"
            templateColumns="1fr 1fr"
            mt="80px"
            mb="50px"
            gap="30px"
        >
            <GridItem>
                {left ? (
                    <Flex flexDirection="column" gap="20px">
                        <Heading size="lg">{heading}</Heading>
                        <Text>{text}</Text>
                        <Button colorScheme="teal" width="150px">Попробовать</Button>
                    </Flex>
                ) : (
                    <Image src={imgLink} />
                )}
            </GridItem>
            <GridItem>
                {left ? (
                    <Image src={imgLink} />
                ) : (
                    <Flex flexDirection="column" gap="20px">
                        <Heading size="lg">{heading}</Heading>
                        <Text>{text}</Text>
                        <Button colorScheme="teal" width="150px">Попробовать</Button>
                    </Flex>
                )}
            </GridItem>
        </Grid>
    );
}

export default DescriptionCard;
