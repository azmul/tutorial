import {
  AppShell,
  AppShellHeader,
  AppShellMain,
} from "@mantine/core";
import { Testimonial } from "@/components/Testimonial";
import { HeaderMegaMenu } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero"
import { ComparisonTable } from "@/components/ComparisonTable"
import { Faq } from "@/components/FAQ"
import { GetInTouch } from "@/components/ContactUs"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md" pos="relative">
      <AppShellHeader>
        <HeaderMegaMenu />
      </AppShellHeader>
      <AppShellMain>
        <Hero />
        <Testimonial />
        <ComparisonTable />
        <Faq />
        <GetInTouch />
      </AppShellMain>
      <FooterLinks />
      <ScrollToTop />
    </AppShell>

  );
}
