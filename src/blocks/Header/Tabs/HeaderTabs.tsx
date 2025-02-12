"use client";
import { useState } from 'react';
import {
    IconChevronDown,
    IconHeart,
    IconLogout,
    IconMessage,
    IconPlayerPause,
    IconSettings,
    IconStar,
    IconSwitchHorizontal,
    IconTrash,
} from '@tabler/icons-react';
import LOGO from "@/assets/logo.png";
import Image from 'next/image';
import {
    Avatar,
    Burger,
    Container,
    Group,
    Menu,
    Tabs,
    Text,
    UnstyledButton,
    useMantineTheme,
    Title,
    Divider,
    List,
    ListItem,
    ThemeIcon,
    Code,
    Highlight,
    Button
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderTabs.module.css';
import { IconCircleCheck } from '@tabler/icons-react';

const user = {
    name: 'Jane Spoonfighter',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
    'Home',
    'Orders',
    'Education',
    'Community',
    'Forums',
    'Support',
    'Account',
    'Helpdesk',
];

export function HeaderTabs() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));

    return (
        <div>
            <Title ta="center" mt={20} order={3}>Header - Tabs</Title>

            <Divider my={20} />
            <div className={classes.header}>
                <Container className={classes.mainSection} size="md">
                    <Group justify="space-between">
                        <Image src={LOGO} alt="Blocks" width={70} height={70} />

                        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

                        <Menu
                            width={260}
                            position="bottom-end"
                            transitionProps={{ transition: 'pop-top-right' }}
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            withinPortal
                        >

                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={<IconHeart size={16} color={theme.colors.red[6]} stroke={1.5} />}
                                >
                                    Liked posts
                                </Menu.Item>
                                <Menu.Item
                                    leftSection={<IconStar size={16} color={theme.colors.yellow[6]} stroke={1.5} />}
                                >
                                    Saved posts
                                </Menu.Item>
                                <Menu.Item
                                    leftSection={<IconMessage size={16} color={theme.colors.blue[6]} stroke={1.5} />}
                                >
                                    Your comments
                                </Menu.Item>

                                <Menu.Label>Settings</Menu.Label>
                                <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
                                    Account settings
                                </Menu.Item>
                                <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
                                    Change account
                                </Menu.Item>
                                <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

                                <Menu.Divider />

                                <Menu.Label>Danger zone</Menu.Label>
                                <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
                                    Pause subscription
                                </Menu.Item>
                                <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
                                    Delete account
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Group visibleFrom="sm">
                            <Button variant="default">Log in</Button>
                            <Button>Sign up</Button>
                        </Group>
                    </Group>
                </Container>
                <Container size="md">
                    <Tabs
                        defaultValue="Home"
                        variant="outline"
                        visibleFrom="sm"
                        classNames={{
                            root: classes.tabs,
                            list: classes.tabsList,
                            tab: classes.tab,
                        }}
                    >
                        <Tabs.List>{items}</Tabs.List>
                    </Tabs>
                </Container>
            </div>
            <Text mb={10}>
                To create the simple header like above header from admin panel, follow these below steps:
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
                    <Text>Select <Code>Simple</Code> from the <Code>Select Header Type</Code> dropdown.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Logo</Title>
                    <Text>Upload the logo image of your website.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Primary Links</Title>
                    <Text> Add Primary Links like (<Code>Home, Orders, Education ...</Code> ) </Text>
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