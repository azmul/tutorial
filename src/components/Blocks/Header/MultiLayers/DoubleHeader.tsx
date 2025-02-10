"use client";
import { useState } from 'react';
import { Anchor, Box, Burger, Container, Group, Card, Title, Divider, Text, List, ListItem, Highlight, Code } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './DoubleHeader.module.css';
import { ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import LOGO from "@/assets/logo.png";
import Image from 'next/image';

const userLinks = [
    { link: '#', label: 'Privacy & Security' },
    { link: '#', label: 'Account settings' },
    { link: '#', label: 'Support options' },
];

const mainLinks = [
    { link: '#', label: 'Book a demo' },
    { link: '#', label: 'Documentation' },
    { link: '#', label: 'Community' },
    { link: '#', label: 'Academy' },
    { link: '#', label: 'Forums' },
];

export function DoubleHeader() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(0);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor<'a'>
            href={item.link}
            key={item.label}
            className={classes.mainLink}
            data-active={index === active || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(index);
            }}
        >
            {item.label}
        </Anchor>
    ));

    const secondaryItems = userLinks.map((item) => (
        <Anchor
            href={item.link}
            key={item.label}
            onClick={(event) => event.preventDefault()}
            className={classes.secondaryLink}
        >
            {item.label}
        </Anchor>
    ));

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder id="header-multiLayers" className='mt-4 py-8'>
            <Title className="mb-4" order={3}>Header - Multi Layers</Title>

            <Divider mb={20} />

            <header className={classes.header}>
                <Container className={classes.inner}>
                    <Image src={LOGO} alt="Blocks" width={70} height={70} />
                    <Box className={classes.links} visibleFrom="sm">
                        <Group justify="flex-end">{secondaryItems}</Group>
                        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
                            {mainItems}
                        </Group>
                    </Box>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </Container>
            </header>
            <Text mb={10}>To create the multi layers header like above header, follow these below steps:</Text>
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
                    <Text>
                        <Highlight highlight="Header">
                            Click the Header menu on the left sidebar of the admin panel.
                        </Highlight>
                    </Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Type</Title>
                    <Text>Select <Code>Multi Layers</Code> from the <Code>Select Header Type</Code> dropdown.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Logo</Title>
                    <Text>Upload the logo image of your website.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Primary Links</Title>
                    <Text> Add Primary Links like (<Code>Book a demo, Documentation, Community, Academy, Forums</Code> ) </Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Secondary Links</Title>
                    <Text> Add Secondary Links like (<Code>privacy & security, account settings, Support options</Code> ) </Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Show Search</Title>
                    <Text>Select <Code>Show search</Code> if you want to show search in the header.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Show Localisation</Title>
                    <Text>Select <Code>Show localisation</Code> if you want to show localisation in the header.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Show Theme Icon</Title>
                    <Text>Select <Code>Show theme icon</Code> if you want to show theme icon in the header.</Text>
                </ListItem>
            </List>
        </Card>

    );
}