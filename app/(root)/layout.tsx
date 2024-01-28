import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DULCOM COMPANY",
  description: "This is company profile DULCOM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-neutral-50 text-slate-600 dark:bg-gray-800 dark:text-neutral-200">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
