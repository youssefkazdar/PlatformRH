import "./globals.css";

export const metadata = {
  title: "Platform RH",
  description: "Platform RH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <div className='flex'>
          <div className='flex-auto'>{children}</div>
        </div>
      </body>
    </html>
  );
}