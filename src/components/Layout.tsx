import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: ReactNode;
    showHeader?: boolean;
}

const Layout = ({ children, showHeader = true }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            {showHeader && <Navbar />}
            <main className={showHeader ? "pt-16" : ""}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
