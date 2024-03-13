import SideBarMenu from "../components/sideBarMenu";

export const metadata = {
  title: "Platform RH",
  description: "Platform RH",
};

export default function RootLayout({ children }) {
  return (
        <div className='flex'>
          <SideBarMenu/>
          <div className='flex-auto'>{children}</div>
        </div>
  );
}