import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FunctionComponent, ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import StyledComponentsRegistry from "./Registry";
import Providers from "../redux/Provider";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Entain Movie Library",
  description: "A movie library application powered with data from TMDB",
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Providers>
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </Providers>
  </html>
);

export default RootLayout;
