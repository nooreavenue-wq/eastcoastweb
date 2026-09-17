import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'East Coast Knit Wear Pvt. Ltd. | Premium Garment Manufacturer, Bangladesh',
  description:
    'East Coast Knit Wear is a world-class knitwear manufacturer based in Bangladesh. Specializing in women\'s wear, men\'s clothing, and kids collection with ISO-certified quality.',
  keywords: 'knitwear manufacturer, bangladesh garments, womens wear, mens clothing, kids clothing, OEM, ODM, export garments',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
