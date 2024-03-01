import { Inter } from "next/font/google";
import "./globals.css";
import SideBarMenu from "./components/sideBarMenu";

export const metadata = {
  title: "Platform RH",
  description: "Platform RH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <div className='flex'>
          <SideBarMenu/>
          <div className='flex-auto'>{children}</div>
        </div>
      </body>
    </html>
  );
}
