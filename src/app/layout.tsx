import type { Metadata } from "next";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import localFont from "next/font/local";
import Head from "next/head";
import { breakpoints, colors } from "./theme";
import tinycolor from "tinycolor2";
import { Theme } from "@/components/Theme";

import "@mantine/core/styles/global.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

/**
 * Generate a Mantine-compatible color palette from a base color.
 * @param {string} baseColor - The base color in hex format (e.g., "#3498db").
 * @returns {string[]} - Array of 10 shades from lightest to darkest.
 */
function generateMantinePalette(baseColor: string) {
  const color = tinycolor(baseColor);
  if (!color.isValid()) {
    throw new Error("Invalid color code");
  }

  // Generate 10 shades from light to dark
  const shades = [];
  for (let i = 0; i < 10; i++) {
    const lightness = 110 - i * 10; // Gradually decrease lightness
    shades.push(
      color
        .clone()
        .lighten(lightness - 50)
        .toHexString(),
    );
  }

  return shades;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseColor = "#2b944e"; // Replace with your desired base color
  const mantinePalette: any = generateMantinePalette(baseColor);

  const theme = mergeMantineTheme(
    DEFAULT_THEME,
    createTheme({
      fontFamily: geistSans.style.fontFamily,
      fontFamilyMonospace: geistMono.style.fontFamily,
      breakpoints,
      colors: {
        blue: mantinePalette,
        brand: mantinePalette,
      },
    }),
  );
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <Theme />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
