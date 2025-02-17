import { AccordionPanel, Accordion, Container, Grid, Image, Title, GridCol, AccordionItem, AccordionControl } from '@mantine/core';
import image from '@/assets/logo.png';
import classes from './FaqWithImage.module.css';

export function Faq() {
    return (
        <Container size="lg" my={50} id="faq">
            <Grid id="faq-grid" gutter={50}>
                <GridCol span={{ base: 12, md: 6 }}>
                    <Image src={image.src} alt="Frequently Asked Questions" />
                </GridCol>
                <GridCol span={{ base: 12, md: 6 }}>
                    <Title order={2}
                        size="h1"
                        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                        fw={900}
                        ta="center"
                        mb={30}>
                        Frequently Asked Questions
                    </Title>

                    <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                        <AccordionItem className={classes.item} value="reset-password">
                            <AccordionControl>Can I use my own domain?</AccordionControl>
                            <AccordionPanel>Yes, deploy anywhere</AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={classes.item} value="another-account">
                            <AccordionControl>Do I need coding skills?</AccordionControl>
                            <AccordionPanel>No, but developers can customize further.</AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={classes.item} value="newsletter">
                            <AccordionControl>Is there a refund?</AccordionControl>
                            <AccordionPanel>30-day money-back guarantee.</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridCol>
            </Grid>
        </Container>
    );
}