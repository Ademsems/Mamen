import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamensala.com"),
  title: "Mamen Sala — US Correspondent & Journalist",
  description:
    "Mamen Sala is a U.S. correspondent for Mediaset España (Telecinco & Cuatro) and France 24 Spanish, reporting from New York on politics, economics, society, and sports.",
  openGraph: {
    title: "Mamen Sala — US Correspondent & Journalist",
    description:
      "Covering America for Mediaset España and France 24. Based in New York.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
