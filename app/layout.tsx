import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./style/globals.scss";
import StyledComponentsRegistry from './style/registry';

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "e2e-task" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={ inter.className } suppressHydrationWarning={ true }>
            <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
         </body>
      </html>
   );
}