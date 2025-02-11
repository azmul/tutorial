import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './NavbarLinksGroup.module.css';
import Link from 'next/link';

interface LinksGroupProps {
    icon: React.FC<any>;
    label: string;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
    link?: string;
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }: LinksGroupProps) {

    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(!!initiallyOpened);
    const items = (hasLinks ? links : []).map((link) => (
        <Link
            className={classes.link}
            href={link.link}
            key={link.label}
        >
            {link.label}
        </Link>
    ));

    return (
        <>
            <UnstyledButton onClick={() => { setOpened((o) => !o) }} className={classes.control}>
                <Link
                    href={link ?? '/tutorials'}
                >
                    <Group justify="space-between" gap={0}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <ThemeIcon variant="light" size={30}>
                                <Icon size={18} />
                            </ThemeIcon>
                            <Box ml="md">

                                {label}

                            </Box>
                        </Box>
                        {hasLinks && (
                            <IconChevronRight
                                className={classes.chevron}
                                stroke={1.5}
                                size={16}
                                style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
                            />
                        )}
                    </Group>
                </Link>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    );
}