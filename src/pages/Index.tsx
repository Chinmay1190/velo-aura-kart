
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
import { ArrowRight, Star, Shield, Truck, Headphones, Zap, Heart, Trophy } from 'lucide-react';

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 8));
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const heroImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop"
  ];

  const heroStats = [
    { label: 'Premium Bikes', value: 65, suffix: '+' },
    { label: 'Happy Customers', value: 10000, suffix: '+' },
    { label: 'Cities Served', value: 50, suffix: '+' },
    { label: 'Years Experience', value: 15, suffix: '+' },
  ];

  // Animate hero image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate statistics
  useEffect(() => {
    const animateStats = () => {
      heroStats.forEach((stat, index) => {
        let start = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.value) {
            start = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(start);
            return newStats;
          });
        }, 50);
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Genuine Products',
      description: 'All bikes are 100% genuine with manufacturer warranty',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Fast Delivery',
      description: 'Quick delivery across India with secure packaging',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'Curated selection of the world\'s finest motorcycles',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const topCategories = categories.slice(1, 7);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Enhanced Animations */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-sm animate-pulse">
                    <Zap className="h-3 w-3 mr-1" />
                    India's #1 Superbike Destination
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="inline-block animate-scale-in">Ride</span>{" "}
                    <span className="inline-block animate-scale-in" style={{ animationDelay: '0.2s' }}>the</span>
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent inline-block animate-scale-in" style={{ animationDelay: '0.4s' }}>
                      Ultimate
                    </span>
                    <br />
                    <span className="inline-block animate-scale-in" style={{ animationDelay: '0.6s' }}>Superbikes</span>
                  </h1>
                  <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    Discover our premium collection of 65+ superbikes from the world's finest manufacturers. 
                    Experience power, performance, and passion like never before.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                  <Link to="/products">
                    <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300">
                      Explore Collection
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:bg-orange-50 hover:border-orange-300">
                    <Heart className="mr-2 h-4 w-4" />
                    Book Test Ride
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {animatedStats[index]}{stat.suffix}
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
                  {heroImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Featured Superbike ${index + 1}`}
                      className={`w-full h-auto rounded-2xl shadow-2xl transition-all duration-1000 ${
                        index === currentHeroImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-600/20 rounded-2xl"></div>
                </div>
                
                {/* Enhanced Floating Cards */}
                <Card className="absolute -top-4 -left-4 p-4 animate-bounce shadow-xl bg-white/90 backdrop-blur border-2 border-green-200">
                  <CardContent className="p-0 flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">4.9 Rating</div>
                      <div className="text-xs text-muted-foreground">10K+ Reviews</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute -bottom-4 -right-4 p-4 animate-bounce shadow-xl bg-white/90 backdrop-blur border-2 border-blue-200" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-0 flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                      <Truck className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Free Delivery</div>
                      <div className="text-xs text-muted-foreground">Pan India</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute top-1/2 -left-8 p-3 animate-pulse shadow-xl bg-white/90 backdrop-blur border-2 border-yellow-200">
                  <CardContent className="p-0 flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    <span className="text-xs font-semibold">Award Winner</span>
                  </CardContent>
                </Card>

                {/* Hero Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHeroImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentHeroImage ? 'bg-white shadow-lg scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Categories Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Shop by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Find your perfect ride from our diverse range of motorcycle categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {topCategories.map((category, index) => (
                <Link key={category} to={`/products?category=${category}`}>
                  <Card className="group cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 animate-fade-in border-2 border-transparent hover:border-orange-200" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        <span className="text-white text-2xl font-bold">
                          {category.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {category}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Featured Superbikes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover our handpicked selection of premium motorcycles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/products">
                <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:border-orange-300">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900/50 dark:to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Why Choose SuperBikes?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                We're committed to providing the best superbike shopping experience in India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 group animate-fade-in border-2 border-transparent hover:border-slate-200" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
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
