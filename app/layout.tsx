import "./globals.css";

export const metadata = {
  title: "BlindHire",
  description: "Remove bias from hiring with anonymized CVs",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
