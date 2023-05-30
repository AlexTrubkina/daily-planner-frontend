import React, { useState } from "react";

import DashBoardLayout from "../../layout/DashboardLayout";

import { createEditor } from "slate";

import { Slate, Editable, withReact } from "slate-react";

import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { Box, Flex, Text } from "@chakra-ui/react";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

function DairyEditor(): JSX.Element {
    const [editor] = useState(() => withReact(createEditor()));

    const today = new Date().toDateString();
    console.log(today);
    

    const initialValue: Descendant[] = [
        {
            type: "paragraph",
            children: [{ text: "Новый день - новые записи!" }],
        },
    ];

    return (
        <DashBoardLayout>
            <Text fontWeight="bold" color="blackAlpha.700">
                {today}
            </Text>
            <Box
                borderRadius="15px"
                border="2px solid #47a6ff"
                backgroundColor="#fff"
                minH="50vh"
                padding="30px"
                mb="20px"
            >
                <Slate editor={editor} value={initialValue}>
                    <Editable />
                </Slate>
            </Box>
            <Flex
                fontWeight="semibold"
                color="blackAlpha.600"
                border="2px solid #47a6ff"
                _hover={{
                    background: "#47a6ff",
                    cursor: "pointer",
                }}
                borderRadius="10px"
                padding="10px"
                maxW="170px"
                justifyContent="center"
                
            >
                Сохранить
            </Flex>
        </DashBoardLayout>
    );
}

export default DairyEditor;
