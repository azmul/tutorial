import {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconGauge,
    IconLock,
    IconNotes,
    IconPresentationAnalytics,
} from '@tabler/icons-react';
import { ScrollArea } from '@mantine/core';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import classes from './NavbarNested.module.css';

const mockdata = [
    { label: 'Setting', icon: IconAdjustments, link: '/tutorials/setting' },
    { label: 'Pages', icon: IconFileAnalytics, link: '/tutorials/page' },
    { label: 'Header', icon: IconNotes, link: '/tutorials/header' },
    {
        label: 'Security',
        icon: IconLock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];

export function Navbar() {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <nav className={classes.navbar}>
            <ScrollArea className={classes.links}>
                <div className={classes.linksInner}>{links}</div>
            </ScrollArea>
        </nav>
    );
}