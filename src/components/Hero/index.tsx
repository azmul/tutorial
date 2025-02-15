import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, ListItem, Grid } from '@mantine/core';
import { HeroVideoDialog } from '@/components/magicui/hero-video-dialog';
import classes from './style.module.css';
import { RetroGrid } from "@/components/magicui/retro-grid";

export function Hero() {
    return (
        <>
            <div className="relative flex h-[200px] w-full flex-col items-center justify-center">
                <Container size="lg">
                    <Title ta="center" my={30}>
                    🚀 Build Lightning-Fast Websites in Hours with 100+ Web Blocks & an Intuitive Admin Panel!
                    </Title>
                </Container>
                <RetroGrid />
            </div>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>

                        <List
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={12} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <ListItem>
                                <b>Lightning-Fast Performance</b> - SEO-friendly server-side rendering out of the box
                            </ListItem>
                            <ListItem>
                                <b>Drag-and-Drop Block Library</b> - Choose from 100+ pre-designed blocks: blogs, pricing tables, contact forms, portfolios, and SaaS dashboards. No design skills needed.
                            </ListItem>
                            <ListItem>
                                <b>Live Preview</b> - See page changes instantly as you edit. Tweak layouts, colors, or content in real-time without switching tabs or refreshing..
                            </ListItem>
                            <ListItem>
                                <b>Multilingual Support</b> - Effortlessly translate your site into 50+ languages with built-in i18n..
                            </ListItem>
                            <ListItem>
                                <b>Mobile-First Responsiveness</b> - Every block auto-adapts to mobile, tablet, and desktop. Built-in performance audits for Core Web Vitals..
                            </ListItem>
                            <ListItem>
                                <b>Real-Time Collaboration</b> - Invite team members to edit pages simultaneously. Track changes and roll back versions effortlessly..
                            </ListItem>
                            <ListItem>
                                <b>Deploy Anywhere</b> - Export your site to AWS, Vercel, Netlify, or your private server. No vendor lock-in.
                            </ListItem>
                            <ListItem>
                                <b>Third-Party Integrations</b> - Plug in tools like Mailchimp, Stripe, or Google Analytics with 1-click.
                            </ListItem>
                            <ListItem>
                                <b>SEO & Analytics Ready</b> - Meta tags, sitemaps, OpenGraph, and Google Search Console integration out of the box..
                            </ListItem>
                            <ListItem>
                                <b>White-Label Mode</b> - Agencies: Remove our branding, add yours, and resell to clients as your own platform.
                            </ListItem>

                        </List>

                        <Group mt={30}>
                            <Button variant="gradient" radius="xl" size="xl" className={classes.control}>
                                Buy Now – $299                        </Button>
                            <Button variant='default' radius="xl" size="xl" className={classes.control}>
                                Checkout                      </Button>

                        </Group>
                    </div>
                    <div className={classes.image}>
                        <HeroVideoDialog
                            className="block dark:hidden"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                            thumbnailAlt="Hero Video"
                        />
                        <HeroVideoDialog
                            className="hidden dark:block"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                            thumbnailAlt="Hero Video"
                        />
                    </div>

                </div>

                <div className={classes.another}>
                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>

            </Container>
        </>
    );
}