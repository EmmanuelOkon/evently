import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import "@fontsource-variable/noto-sans-jp";

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
