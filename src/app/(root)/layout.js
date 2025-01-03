import Navbar from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
