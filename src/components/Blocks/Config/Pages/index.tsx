import { Card, Title, Divider, Text, Highlight, List, ListItem } from '@mantine/core';
import { ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function Pages() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder id="pages" className='mt-4 py-8'>
            <Title className="mb-4" order={2}>Pages</Title>
            <Divider mb={20} />
            <Text mb={10}>To create a new page, follow these below steps:</Text>
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
                    <Title order={5}>
                        <Highlight highlight="Pages">
                            Step 1: Click Pages menu on the left sidebar of the admin panel
                        </Highlight>
                    </Title>
                </ListItem>
                <ListItem>
                    <Title order={5}>
                        <Highlight highlight="create new">
                            Step 2: Click create new button
                        </Highlight>
                    </Title>
                </ListItem>
                <ListItem>
                    <Title order={5}>
                        <Highlight highlight="title">
                            Step 3: Enter the page name in the title field
                        </Highlight>
                    </Title>
                </ListItem>

                <ListItem>
                    <Title order={5}>
                        <Highlight highlight="Content and SEO">
                            Step 4: There are two tabs Content and SEO. Add column and component under the Content tab.Then give the SEO inpormation of the page under the SEO tab
                        </Highlight>
                    </Title>
                </ListItem>

                <ListItem>
                    <Title order={5}>
                        <Highlight highlight="Publish changes">
                            Step 5: Click the Publish changes  button to publish your changes.
                        </Highlight>
                    </Title>
                </ListItem>

                <ListItem>
                    <Title order={5}>
                        <Highlight highlight="Publish changes">
                            Step 5: Click the Publish changes the button to publish your changes.
                        </Highlight>
                    </Title>
                </ListItem>

                <ListItem>
                    <Title order={5}>
                        <Highlight highlight="Live Preview">
                            Step 5: If you want to see the changes live, click the Live Preview button before publishing the changes.
                        </Highlight>
                    </Title>
                </ListItem>

            </List>
        </Card>
    )
}