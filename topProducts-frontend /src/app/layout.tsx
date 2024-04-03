"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import "./globals.css";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: purple[300],
    },
    secondary: {
      main: purple[500],
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <nav className="flex justify-between px-32 py-10">
            <Link href="/" className="text-4xl text-primary font-bold">
              Akshat's Shop
            </Link>
          </nav>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
