import { Title, Divider, Text, List, ListItem } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function Column() {
    return (
        <>
            <Divider my={20} />
            <Text mb={10}>To create a new column for a page, follow these below steps:</Text>
            <List
                spacing="xs"
                size="sm"
                icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                        <IconCircleCheck size={16} />
                    </ThemeIcon>
                }
            >
                <ListItem>
                    <Title order={4}>
                        Column Size (One to Twelve)</Title>
                    <Text>The container will be divided into twelve columns. Select the number of columns you want to use for a block. Default is four (four columns).</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>
                        Start (One to Twelve)</Title>
                    <Text>The block will start from the left side of the container. Default is zero (zero column).</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>
                        Margin Top</Title>
                    <Text>The block will have a margin top.</Text>
                </ListItem>
            </List>
        </>
    )
}