import Hero from "./components/hero/Hero";
import Products from "./components/product/Products";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Hero />
      <Products />
    </main>
  );
}
