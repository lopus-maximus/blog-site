import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyBlogSite",
  description: "My blog app",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href="/">
        <h1>The Blog Site</h1>
      </Link>
    </header>
  );

  let footer = (
    <footer>
      <p> Thank You </p>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
