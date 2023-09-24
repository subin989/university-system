import { FC, ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

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
      <Footer/>
    </>
  );
};

export default Layout;
