import React from "react";

import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";

function ProfileInfoCard({
    firstName,
    lastName,
    description,
    feeling
}: {
    firstName: string,
    lastName: string,
    description: string,
    feeling: string
}): JSX.Element {
    return (
        <Card
            borderRadius="20px"
            border="2px solid #47a6ff"
            mt="20px"
        >
            <CardHeader>
                <Heading color="blackAlpha.700" size="md">
                    Информация о вас
                </Heading>
            </CardHeader>
            <CardBody color="blackAlpha.700">
                <Stack spacing={4}>
                    <Box>
                        <Heading size="xs">Имя и фамилия</Heading>
                        <Text>{firstName} {lastName}</Text>
                    </Box>
                    <Box>
                        <Heading size="xs">Описание</Heading>
                        <Text>{description}</Text>
                    </Box>
                    <Box>
                        <Heading size="xs">Настроение на сегодня</Heading>
                        <Text>{feeling}</Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProfileInfoCard;
