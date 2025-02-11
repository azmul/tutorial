import { HeaderSimple } from "./Simple/HeaderSimple";
import { DoubleHeader } from "./MultiLayers/DoubleHeader";
import { HeaderMegaMenu } from "./MegaMenu/HeaderMegaMenu";
import { HeaderTabs } from './Tabs/HeaderTabs';
import { HeaderMenu } from './Menus/HeaderMenu'
import { Tabs, TabsList, TabsTab, TabsPanel, Card } from '@mantine/core';
import classes from './styles.module.css';

export default function Header() {
    return (
        <Tabs classNames={classes} variant="unstyled" defaultValue="simple">
            <TabsList grow>
                <TabsTab value="simple">Simple</TabsTab>
                <TabsTab value="menu">
                    Menu
                </TabsTab>
                <TabsTab value="megaMenu">Mega Menu</TabsTab>
                <TabsTab value="multiLayers">Multi Layers</TabsTab>
                <TabsTab value="tabs">
                    Tabs
                </TabsTab>
            </TabsList>
            <TabsPanel value="simple" pt="xs">
                <HeaderSimple />
            </TabsPanel>
            <TabsPanel value="menu" pt="xs">
                <HeaderMenu />
            </TabsPanel>
            <TabsPanel value="multiLayers" pt="xs">
                <DoubleHeader />
            </TabsPanel>
            <TabsPanel value="megaMenu" pt="xs">
                <HeaderMegaMenu />
            </TabsPanel>
            <TabsPanel value="tabs" pt="xs">
                <HeaderTabs />
            </TabsPanel>

        </Tabs>
    );
}