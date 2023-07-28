import Navbar from "@/Components/Navbar";
import Homepage from "@/Components/Homepage";
import About_Us from "@/Components/About_Us";
import Booking from "@/Components/Booking";
import Menu from "@/Components/Menu";

export default function Home() {
  return (
    <>
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

      {/* Testimonials */}
      
    </>
    
  )
}
