import React, { useState } from "react";

import DashBoardLayout from "../../layout/DashboardLayout";

import { createEditor } from "slate";

import { Slate, Editable, withReact } from "slate-react";

import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { Box, Flex } from "@chakra-ui/react";

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

    const initialValue: Descendant[] = [
        {
            type: "paragraph",
            children: [{ text: "Новый день - новые записи!" }],
        },
    ];

    return (
        <DashBoardLayout>
            <Box
                borderRadius="15px"
                background="linear-gradient(145deg, #cacaca, #f0f0f0);"
                boxShadow="14px 14px 28px #bebebe,-14px -14px 28px #ffffff;"
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
                backgroundColor="linear-gradient(145deg, #f0f0f0, #cacaca)"
                boxShadow="9px 9px 18px #bebebe, -9px -9px 18px #ffffff"
                _hover={{
                    background:
                        "linear-gradient(145deg,#cacaca, #f0f0f0)",
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
