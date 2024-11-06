import localFont from "next/font/local";
import "./globals.css";

// Adding only the Roboto font
const roboto = localFont({
  src: "./fonts/roboto-regular-webfont.woff", // Make sure the path is correct
  variable: "--font-roboto",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
