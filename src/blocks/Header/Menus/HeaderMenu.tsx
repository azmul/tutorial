"use client";
import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu, Title, Divider, Text, List, ListItem, Highlight, Code, ThemeIcon, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import LOGO from "@/assets/logo.png";
import Image from 'next/image';
import { IconCircleCheck } from '@tabler/icons-react';

const links = [
    { link: '/about', label: 'Features' },
    {
        link: '#1',
        label: 'Learn',
        links: [
            { link: '/docs', label: 'Documentation' },
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { link: '/about', label: 'About' },
    { link: '/pricing', label: 'Pricing' },
    {
        link: '#2',
        label: 'Support',
        links: [
            { link: '/faq', label: 'FAQ' },
            { link: '/demo', label: 'Book a demo' },
            { link: '/forums', label: 'Forums' },
        ],
    },
];

export function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size={14} stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <div>
            <Title ta="center" mt={20} order={3}>Header - Menus</Title>

            <Divider my={20} />
            <header className={classes.header}>
                <Container size="md">
                    <div className={classes.inner}>
                        <Image src={LOGO} alt="Blocks" width={70} height={70} />
                        <Group gap={5} visibleFrom="sm">
                            {items}
                        </Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                        <Group visibleFrom="sm">
                            <Button variant="default">Log in</Button>
                            <Button>Sign up</Button>
                        </Group>
                    </div>
                </Container>
            </header>
            <Text mb={10}>
                To create the menus header like above header from admin panel, follow these below steps:
            </Text>
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
                    <Text>Select <Code>Menus</Code> from the <Code>Select Header Type</Code> dropdown.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Logo</Title>
                    <Text>Upload the logo image of your website.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Primary Links</Title>
                    <Text> Add Primary Links like (<Code>Features, Learn, About, Pricing, Support</Code> ) . Add Sub Menus under a menus if you need like <Code>Learn, Support</Code></Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>
                        Focus Buttons</Title>
                    <Text>Add Focus Buttons like (<Code>Log in, Sign up</Code>). If you need. There are four types of focus buttons. Select the type of focus button that you need from the dropdown.</Text>
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
        </div>
    );
}