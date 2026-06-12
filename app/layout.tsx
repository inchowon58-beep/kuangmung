import type { Metadata } from "next";
import {
  getStructuredData,
  siteDescription,
  siteTitle,
  siteUrl,
  targetKeywords,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | 울산강아지파양",
  },
  description: siteDescription,
  keywords: [...targetKeywords, "울산 강아지 파양", "울산 유기견", "아가펫"],
  authors: [{ name: "아가펫" }],
  creator: "아가펫",
  publisher: "아가펫",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "울산강아지파양 · 울산유기견보호소 안내",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/shelter-01.png",
        width: 1200,
        height: 630,
        alt: "울산강아지파양·울산유기견보호소 보호소 전경",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/shelter-01.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "반려동물",
  verification: {
    other: {
      "naver-site-verification": "c151c15d347207e0ea6fdb5db02cb092acb5fe91",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating">{children}</body>
    </html>
  );
}
