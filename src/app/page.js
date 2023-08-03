import Navbar from "@/Components/Navbar";
import Homepage from "@/Components/Homepage";
import About_Us from "@/Components/About_Us";
import Booking from "@/Components/Booking";
import Menu from "@/Components/Menu";
import Chefs_Word from "@/Components/Chefs_Word";
import Contact_Us from "@/Components/Contact_Us";
import Gallery from "@/Components/Gallery";


export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <Homepage />

      {/* About Us */}
      <About_Us />

      {/* Book A Table */}
      <Booking />

      {/* Food/Bar Menu Page */}
      <Menu />

      {/* CHef's Word */}
      <Chefs_Word />

      {/* Gallery */}
      <Gallery />

      {/* Contact Us */}
      <Contact_Us />
    </div>
    
  )
}
