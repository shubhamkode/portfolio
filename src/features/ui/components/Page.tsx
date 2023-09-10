import { FC, ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface IPageProps {
  children: ReactNode;
}

const Page: FC<IPageProps> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="px-2">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
