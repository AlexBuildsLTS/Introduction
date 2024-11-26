import React from "react";
import Navbar from "./Navbar";
import { SiGithub, SiLinkedin } from "react-icons/si";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content */}
      <main>{children}</main>
    </>
  );
};

const SidebarComponent: React.FC = () => {
  return (
    <div className="fixed left-0 flex flex-col items-center space-y-4 transform -translate-y-1/2 top-1/2">
      {/* GitHub Icon */}
      <a
        href="https://github.com/AlexBuildsLTS"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition-colors text-slate hover:text-green">
        <SiGithub size={24} />
      </a>
      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com/in/alexbuildslts"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition-colors text-slate hover:text-green">
        <SiLinkedin size={24} />
      </a>
      {/* Line */}
      <div className="w-px h-20 bg-slate"></div>
    </div>
  );
};

export default Layout;
