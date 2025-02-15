import {
  AppShell,
  AppShellHeader,
  AppShellMain,
} from "@mantine/core";
import { Testimonial } from "@/components/Testimonial";
import { HeaderMegaMenu } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero"
export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <HeaderMegaMenu />
      </AppShellHeader>
      <AppShellMain>
        <Hero />
        <Testimonial />
      </AppShellMain>
      <FooterLinks />
    </AppShell>
  );
}
