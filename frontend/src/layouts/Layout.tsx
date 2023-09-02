import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

// ----------------------------------------------------------------------

interface LayoutProps {
  children: ReactNode;
}

// ----------------------------------------------------------------------

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      {/* Now this should work if StudyDestination is properly defined */}
      {children}
    </>
  );
};

export default Layout;
