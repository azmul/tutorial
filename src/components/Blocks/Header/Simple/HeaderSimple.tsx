"use client";
import { useState } from 'react';
import { Burger, Container, Group, Card, Title, Divider, Text, List, ListItem, Code, Button, Highlight } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import { ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import LOGO from "@/assets/logo.png";
import Image from 'next/image';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Card id="header-simple" className='mt-4 py-8'>
      <Title className="mb-4" order={3}>Header - Simple</Title>

      <Divider mb={20} />

      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Image src={LOGO} alt="Blocks" width={70} height={70} />
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <Text mb={10}>
        To create the simple header like above header, follow these below steps:
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
          <Text> Add Primary Links like (<Code>Features, Pricing, Learn, Community</Code> ) </Text>
        </ListItem>
        <ListItem>
          <Title order={4}>
            Focus Buttons</Title>
          <Text>Add Focus Buttons like (Log in, Sign up). If you need. There are four types of focus buttons. Select the type of focus button that you need from the dropdown.</Text>
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
    </Card >
  );
}