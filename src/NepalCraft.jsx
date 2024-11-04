import React, { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/Input";
import { Search, ShoppingCart, Menu, X, Heart, ArrowRight } from "lucide-react";

const NepaliDecorWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Artisanal Doko",
      description: "Hand-woven bamboo basket with copper accents",
      price: 89.99,
      category: "Storage",
      artisan: "Master Craftsman Ram Bahadur",
      material: "Mountain Bamboo",
    },
    {
      id: 2,
      name: "Heritage Dhiki",
      description: "Antique-finished miniature grain grinder",
      price: 129.99,
      category: "Collectibles",
      artisan: "Newari Artisan Guild",
      material: "Aged Teak & Brass",
    },
    {
      id: 3,
      name: "Namlo Wall Art",
      description: "Contemporary take on traditional carrying straps",
      price: 149.99,
      category: "Wall Decor",
      artisan: "Modern Heritage Collective",
      material: "Hemp & Copper",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <div className="bg-gradient-to-b from-[#8B4513]/10 to-transparent">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-serif text-[#654321]">
              Himalayan Artistry
            </h1>

            <div className="hidden lg:flex items-center space-x-12">
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#654321] transition-colors duration-300"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#654321] transition-colors duration-300"
              >
                Artisans
              </a>
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#654321] transition-colors duration-300"
              >
                Heritage
              </a>
              <a
                href="#"
                className="text-[#8B4513] hover:text-[#654321] transition-colors duration-300"
              >
                Journal
              </a>
              <div className="flex items-center space-x-4">
                <Heart
                  className="text-[#8B4513] hover:text-[#654321] cursor-pointer"
                  size={20}
                />
                <div className="relative">
                  <ShoppingCart
                    className="text-[#8B4513] hover:text-[#654321] cursor-pointer"
                    size={20}
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#D4A017] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartCount}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-[#8B4513]" />
              ) : (
                <Menu size={24} className="text-[#8B4513]" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-[#8B4513]/5 p-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-serif text-[#654321] mb-6">
              Curated Nepali Heritage
            </h2>
            <p className="text-xl text-[#8B4513]/80 mb-8">
              Each piece tells a story of centuries-old craftsmanship, preserved
              and reimagined for modern spaces.
            </p>
            <Button className="bg-[#8B4513] hover:bg-[#654321] text-white rounded-full px-8 py-6 text-lg">
              Explore Collection
            </Button>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-[#D4A017]/10 rounded-l-full" />
        </div>

        {/* Featured Collection */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#8B4513]/60 mb-2">
                Featured Collection
              </h3>
              <h2 className="text-3xl font-serif text-[#654321]">
                Handcrafted Treasures
              </h2>
            </div>
            <Button
              variant="ghost"
              className="text-[#8B4513] hover:text-[#654321] flex items-center gap-2"
            >
              View All <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-white rounded-xl overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative group">
                    <img
                      src={`/api/placeholder/400/500`}
                      alt={product.name}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-sm text-[#8B4513]/60 mb-2">
                    {product.category}
                  </div>
                  <CardTitle className="text-2xl font-serif text-[#654321] mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-[#8B4513]/80 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8B4513]/60">Artisan</span>
                      <span className="text-[#654321]">{product.artisan}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8B4513]/60">Material</span>
                      <span className="text-[#654321]">{product.material}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-serif text-[#654321]">
                      ${product.price}
                    </span>
                    <Button
                      className="bg-[#8B4513] hover:bg-[#654321] text-white rounded-full px-6"
                      onClick={() => setCartCount((prev) => prev + 1)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Artisan Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-[#8B4513]/5 rounded-3xl p-12 mb-20">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-[#8B4513]/60 mb-2">
              Our Artisans
            </h3>
            <h2 className="text-3xl font-serif text-[#654321] mb-4">
              Preserving Heritage Through Craftsmanship
            </h2>
            <p className="text-[#8B4513]/80 mb-6">
              Each piece in our collection is handcrafted by master artisans who
              have inherited generations of traditional Nepali craftsmanship.
              Their dedication to preserving these ancient techniques while
              embracing contemporary design creates pieces that are truly
              timeless.
            </p>
            <Button
              variant="outline"
              className="text-[#8B4513] border-[#8B4513] hover:bg-[#8B4513] hover:text-white rounded-full px-8"
            >
              Meet Our Artisans
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src="/api/placeholder/600/400"
              alt="Artisan at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#654321] text-[#FAF7F2]/90 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-6">Himalayan Artistry</h3>
              <p className="text-[#FAF7F2]/70">
                Bringing the soul of Nepal's craftsmanship to your space.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Explore</h4>
              <ul className="space-y-3 text-[#FAF7F2]/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Artisans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Heritage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Connect</h4>
              <ul className="space-y-3 text-[#FAF7F2]/70">
                <li>contact@himalayanartistry.com</li>
                <li>+977 1234567890</li>
                <li>Thamel, Kathmandu, Nepal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Newsletter</h4>
              <p className="text-[#FAF7F2]/70 mb-4">
                Subscribe to receive updates about new collections and artisan
                stories.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-none text-white placeholder:text-white/50"
                />
                <Button className="bg-[#D4A017] hover:bg-[#B8860B] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NepaliDecorWebsite;
