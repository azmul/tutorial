import { TableTbody, TableTh, TableThead, TableScrollContainer, Anchor, Group, ProgressRoot, ProgressSection, Table, Text, TableTr, TableTd, Container, Title } from '@mantine/core';
import classes from './TableReviews.module.css';

const data = [
    {
        feature: 'Speed (Lighthouse)',
        platform: '95/100',
        wordpress: '40/100',
        webflow: '70/100',
    },
    {
        feature: 'Slef-Hosted',
        platform: 'true',
        wordpress: 'true',
        webflow: 'false',
    },
    {
        feature: 'One-Time Cost',
        platform: '$299',
        wordpress: 'Free',
        webflow: '$30/mo',
    },
];

export function ComparisonTable() {
    const rows = data.map((row) => {
        return (
            <TableTr key={row.feature}>
                <TableTd>
                    <Anchor component="button" fz="sm">
                        {row.feature}
                    </Anchor>
                </TableTd>
                <TableTd>{row.platform}</TableTd>
                <TableTd>
                    <Anchor component="button" fz="sm">
                        {row.wordpress}
                    </Anchor>
                </TableTd>
                <TableTd>{row.webflow}</TableTd>
            </TableTr>
        );
    });

    return (
        <Container size="lg" my={50} id="comparison">
            <Title size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
                my={30}>Comparison Table</Title>

            <TableScrollContainer minWidth={800}>
                <Table verticalSpacing="xs">
                    <TableThead>
                        <TableTr>
                            <TableTh>Feature</TableTh>
                            <TableTh>Your Platform</TableTh>
                            <TableTh>WordPress</TableTh>
                            <TableTh>Webflow</TableTh>
                        </TableTr>
                    </TableThead>
                    <TableTbody>{rows}</TableTbody>
                </Table>
            </TableScrollContainer>
        </Container>
    );
}