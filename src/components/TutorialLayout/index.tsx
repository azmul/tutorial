"use client";
import { AppShell, Burger, Group, AppShellHeader, AppShellNavbar, AppShellMain, Box } from '@mantine/core';
import { Navbar } from "./Navbar"
import LOGO from "@/assets/logo.png";
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function TutorialLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        setOpened(false)
    }, [pathname])

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 220,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
        >
            <AppShellHeader>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="sm" size="sm" />
                    <Link href='/'>
                        <Image className='cursor-pointer' src={LOGO} alt="Blocks" width={70} height={70} />
                    </Link>
                </Group>
            </AppShellHeader>

            <AppShellNavbar p="md"><Navbar /></AppShellNavbar>

            <AppShellMain>{children}</AppShellMain>
        </AppShell>
    );
}