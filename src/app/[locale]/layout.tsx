import type { Metadata } from "next";
import { getMessages } from "next-intl/server";

import "../globals.css";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Template by Luke Lucas",
  description:
    "This is a template for a Next.js project created by Luke Lucas.",
  openGraph: {
    images: [
      {
        url: "/site-og-image.png",
      },
    ],
    siteName: "Template by Luke Lucas",
    type: "website",
    url: "https://template-git-main-o4fdevs-projects.vercel.app",
  },
};

interface PageParams {
  locale: string;
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<PageParams>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="antialiased dark:bg-stone-950 dark:text-white min-h-screen">
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
