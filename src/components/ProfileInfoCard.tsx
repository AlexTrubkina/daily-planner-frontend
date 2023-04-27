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

function ProfileInfoCard(): JSX.Element {
    return (
        <Card boxShadow="lg" borderRadius="20px" background="linear-gradient(145deg, #f0f0f0, #cacaca)" mt="20px">
            <CardHeader >
                <Heading color="blackAlpha.700" size="md">Информация о вас</Heading>
            </CardHeader>
            <CardBody color="blackAlpha.700">
                <Stack spacing={4}>
                    <Box>
                        <Heading size="xs">Имя и фамилия</Heading>
                        <Text>Валентина Ползункова</Text>
                    </Box>
                    <Box>
                        <Heading size="xs">Описание</Heading>
                        <Text>Валентина Ползункова</Text>
                    </Box>
                    <Box>
                        <Heading size="xs">Настроение на сегодня</Heading>
                        <Text>Валентина Ползункова</Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProfileInfoCard;
