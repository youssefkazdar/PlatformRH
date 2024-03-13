import "./globals.css";
import SideBarMenu from "./components/sideBarMenu";
import Card from './components/card';
import Button from './components/button';

export const metadata = {
  title: "Platform RH",
  description: "Platform RH",
};

export default function RootLayout({ children }) {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
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