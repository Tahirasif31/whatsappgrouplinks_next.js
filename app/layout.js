import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whatsapp Connects",
  description: "Whatsapp Groups Links for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7640990843013590"
          crossorigin="anonymous"
        ></script>
        <meta name="monetag" content="80f09d4f51da7a9fadc272d3b8a5624d"></meta>
      </head>
      <body className={inter.className}>
        <header>
          <Nav />
        </header>
        {children}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          async
        ></script>
        <Footer />
      </body>
    </html>
  );
}
