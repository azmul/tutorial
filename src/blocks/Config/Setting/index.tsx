import { Title, Divider, Text, List, ListItem, Highlight } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function Setting() {
    return (
        <>
            <Title className="mb-4" order={2}>Setting</Title>
            <Divider my={20} />
            <Text mb={10}>Apply the common setting for the your website, follow these below steps:</Text>
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
                    <Text>                <Highlight highlight="Setting">
                        Click the Setting menu on the left sidebar of the admin panel.                        </Highlight>
                    </Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>
                        Theme Primary Color</Title>
                    <Text>There is a default primary color. Select a primary color for the your website.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>
                        Font Family
                    </Title>
                    <Text> There is a default font family. Select a font family for the your website.</Text>
                </ListItem>

            </List>
        </>
    )
}