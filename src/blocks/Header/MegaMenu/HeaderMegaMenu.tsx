"use client";
import {
    IconBook,
    IconChartPie3,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
} from '@tabler/icons-react';
import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
    Title,
    Divider,
    List,
    ListItem,
    Code,
    Highlight,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import LOGO from "@/assets/logo.png";
import Image from 'next/image';
import { IconCircleCheck } from '@tabler/icons-react';

const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <div>
            <Title ta="center" mt={20} order={3}>Header - Mega Menu</Title>

            <Divider my={20} />
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Image src={LOGO} alt="Blocks" width={70} height={70} />

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="#" className={classes.link}>
                            Home
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Features
                                        </Box>
                                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href="#" className={classes.link}>
                            Learn
                        </a>
                        <a href="#" className={classes.link}>
                            Academy
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>
            <Text my={20}>
                To create the mega menu header like above header from admin panel, follow these below steps:
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
                    <Text>Select <Code>Mega Menu</Code> from the <Code>Select Header Type</Code> dropdown.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Logo</Title>
                    <Text>Upload the logo image of your website.</Text>
                </ListItem>
                <ListItem>
                    <Title order={4}>Primary Links</Title>
                    <Text> Add Primary Links like (<Code>Home, Features, Learn, Academy</Code> ) . Add Sub Menus under a menus if you need like <Code>Learn, Support</Code></Text>
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
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider my="sm" />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>

        </div>
    );
}