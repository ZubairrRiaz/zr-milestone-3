import HeroSection from "./components/Hero";
import Products from "./components/Products";

const product = {
  name: "Sample Product",
  discountPrice: 20.00,
  originalPrice: 30.00,
  image: "/s8.png",
  description: "This is a great product that you will love!",
  reviews: 4.5 // Changed from "4.5 stars" to 4.5
};


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Products />
    </div>
  );
}

