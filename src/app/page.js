import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import About_Us from "@/components/About_Us";
import Booking from "@/components/Booking";
import Menu from "@/components/Menu";
import Chefs_Word from "@/components/Chefs_Word";
import Contact_Us from "@/components/Contact_Us";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      {/* Navbar + reactive*/}
      <Navbar />

      {/* Home + reactive*/}
      <Homepage />

      {/* About Us + reactive*/}
      <About_Us />

      {/* Book A Table + reactive*/}
      <Booking />

      {/* Food/Bar Menu Page + reactive*/}
      <Menu />

      {/* Chef's Word + reactive*/}
      <Chefs_Word />

      {/* Gallery */}
      {/* <Gallery /> */}

      {/* Contact Us */}
      <Contact_Us />
    </div>
  );
}
