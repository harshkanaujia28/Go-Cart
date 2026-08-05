import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { assets } from '@/assets/assets'
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AddressProvider } from "@/contexts/AddressContext";
import "./globals.css";
import Banner from "@/components/Banner";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "GoCart. - Shop smarter",
  description: "GoCart. - Shop smarter",
  icons: {
    icon: "/favicon.ico", // path inside public folder
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={`${outfit.className} antialiased bg-white text-slate-800`}>
        <CartProvider>
          <WishlistProvider>
            <AddressProvider>
              <Toaster />
              <Banner/>
              {children}
            </AddressProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
