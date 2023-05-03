import React from "react";
import DashBoardLayout from "../../layout/DashboardLayout";
import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { feeling } from "../../data/datasets";

function MyFeeligs() {
    return ( <DashBoardLayout>
        <Heading color="blackAlpha.700" mt="20px">
            Выберите свое настроение
        </Heading>
        <Flex flexWrap="wrap" gap="20px" padding="20px">
        {
            feeling.map((feel) => (
                <Box borderRadius="5px" padding="10px" _hover={{background: "linear-gradient(145deg, #cacaca, #f0f0f0);", cursor:"pointer"}}>
                    <Icon viewBox='0 0 17 15' fontSize="30px" color="blackAlpha.600">
                        {feel.emoji}
                    </Icon>
                </Box>
            ))
        }
        </Flex>
    </DashBoardLayout> );
}

export default MyFeeligs;