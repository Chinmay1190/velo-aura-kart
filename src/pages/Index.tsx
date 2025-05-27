
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { CartProvider } from '@/context/CartContext';
import { products, categories } from '@/data/products';
import { ArrowRight, Star, Shield, Truck, Headphones } from 'lucide-react';

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 8));

  const heroStats = [
    { label: 'Premium Bikes', value: '65+' },
    { label: 'Happy Customers', value: '10K+' },
    { label: 'Cities Served', value: '50+' },
    { label: 'Years Experience', value: '15+' },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Genuine Products',
      description: 'All bikes are 100% genuine with manufacturer warranty'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Quick delivery across India with secure packaging'
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'Curated selection of the world\'s finest motorcycles'
    }
  ];

  const topCategories = categories.slice(1, 7);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-sm">
                    India's #1 Superbike Destination
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Ride the
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                      {" "}Ultimate{" "}
                    </span>
                    Superbikes
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Discover our premium collection of 65+ superbikes from the world's finest manufacturers. 
                    Experience power, performance, and passion like never before.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/products">
                    <Button size="lg" className="w-full sm:w-auto">
                      Explore Collection
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Book Test Ride
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-scale-in">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                    alt="Featured Superbike"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-600/20 rounded-2xl"></div>
                </div>
                
                {/* Floating Cards */}
                <Card className="absolute -top-4 -left-4 p-4 animate-float">
                  <CardContent className="p-0 flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">4.9 Rating</div>
                      <div className="text-xs text-muted-foreground">10K+ Reviews</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute -bottom-4 -right-4 p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-0 flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Free Delivery</div>
                      <div className="text-xs text-muted-foreground">Pan India</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find your perfect ride from our diverse range of motorcycle categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {topCategories.map((category, index) => (
                <Link key={category} to={`/products?category=${category}`}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-2xl font-bold">
                          {category.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {category}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Superbikes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked selection of premium motorcycles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/products">
                <Button size="lg" variant="outline">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose SuperBikes?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best superbike shopping experience in India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </CartProvider>
  );
}
