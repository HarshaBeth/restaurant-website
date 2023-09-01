import Navbar from "@/Components/Navbar";
import Homepage from "@/Components/Homepage";
import About_Us from "@/Components/About_Us";
import Booking from "@/Components/Booking";
import Menu from "@/Components/Menu";
import Chefs_Word from "@/Components/Chefs_Word";
import Contact_Us from "@/Components/Contact_Us";


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
