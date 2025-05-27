
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
import { ArrowRight, Star, Shield, Truck, Headphones, Zap, Heart, Trophy, Sparkles, Flame, Lightning, Rocket } from 'lucide-react';

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 8));
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&h=600&fit=crop"
  ];

  const heroStats = [
    { label: 'Premium Bikes', value: 65, suffix: '+', icon: <Rocket className="h-5 w-5" /> },
    { label: 'Happy Customers', value: 10000, suffix: '+', icon: <Heart className="h-5 w-5" /> },
    { label: 'Cities Served', value: 50, suffix: '+', icon: <Zap className="h-5 w-5" /> },
    { label: 'Years Experience', value: 15, suffix: '+', icon: <Trophy className="h-5 w-5" /> },
  ];

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initial load animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animate hero image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate statistics with enhanced effects
  useEffect(() => {
    const animateStats = () => {
      heroStats.forEach((stat, index) => {
        let start = 0;
        const increment = stat.value / 80;
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
        }, 30);
      });
    };

    const timer = setTimeout(animateStats, 1500);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Genuine Products',
      description: 'All bikes are 100% genuine with manufacturer warranty',
      gradient: 'from-blue-600 via-blue-500 to-cyan-400',
      bgPattern: 'bg-blue-50/50'
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: 'Lightning Delivery',
      description: 'Quick delivery across India with secure packaging',
      gradient: 'from-emerald-600 via-green-500 to-teal-400',
      bgPattern: 'bg-green-50/50'
    },
    {
      icon: <Headphones className="h-10 w-10" />,
      title: '24/7 Elite Support',
      description: 'Premium customer support for all your queries',
      gradient: 'from-purple-600 via-violet-500 to-pink-400',
      bgPattern: 'bg-purple-50/50'
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: 'Premium Excellence',
      description: 'Curated selection of the world\'s finest motorcycles',
      gradient: 'from-amber-600 via-yellow-500 to-orange-400',
      bgPattern: 'bg-yellow-50/50'
    }
  ];

  const topCategories = categories.slice(1, 7);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background overflow-hidden">
        <Header />
        
        {/* Enhanced Hero Section with Dynamic Background */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Dynamic Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>

          {/* Interactive Particle System */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-30 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 8}s`,
                  transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.01}px, ${(mousePosition.y - window.innerHeight/2) * 0.01}px)`
                }}
              >
                <div className={`w-${Math.floor(Math.random() * 3) + 1} h-${Math.floor(Math.random() * 3) + 1} bg-gradient-to-r from-orange-400 to-red-400 rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Morphing Geometric Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse transform rotate-45"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-ping transform -rotate-45" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-lg blur-lg animate-bounce transform rotate-12"></div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-10 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <div className="space-y-6">
                  <Badge variant="secondary" className="text-base px-4 py-2 animate-pulse bg-gradient-to-r from-orange-100 to-red-100 border-orange-200">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-500" />
                    India's #1 Superbike Empire
                  </Badge>
                  
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                    <span className="inline-block animate-scale-in bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Unleash</span>
                    <br />
                    <span className="inline-block animate-scale-in bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
                      Pure Power
                    </span>
                    <br />
                    <span className="inline-block animate-scale-in bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent" style={{ animationDelay: '0.6s' }}>
                      & Passion
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-fade-in max-w-lg" style={{ animationDelay: '0.9s' }}>
                    Experience the ultimate collection of 65+ premium superbikes. 
                    Where engineering excellence meets raw adrenaline.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <Link to="/products">
                    <Button size="lg" className="w-full sm:w-auto group bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 text-lg px-8 py-4">
                      <Flame className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                      Explore Arsenal
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover:scale-110 transition-all duration-500 border-2 border-orange-200 hover:border-orange-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 text-lg px-8 py-4 group">
                    <Lightning className="mr-3 h-6 w-6 group-hover:text-orange-500 transition-colors" />
                    Test Ride
                  </Button>
                </div>

                {/* Enhanced Animated Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-white/20">
                        <div className="flex items-center justify-center mb-3 text-orange-500 group-hover:scale-125 transition-transform duration-300">
                          {stat.icon}
                        </div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                          {animatedStats[index]}{stat.suffix}
                        </div>
                        <div className="text-sm text-slate-600 font-medium mt-2">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Image Section with 3D Effects */}
              <div className={`relative transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="relative perspective-1000">
                  {heroImages.map((image, index) => (
                    <div key={index} className={`relative transition-all duration-1000 ${index === currentHeroImage ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3 absolute inset-0'}`}>
                      <img
                        src={image}
                        alt={`Featured Superbike ${index + 1}`}
                        className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-red-600/30 rounded-3xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-3xl"></div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced Floating Elements */}
                <Card className="absolute -top-6 -left-6 p-4 animate-bounce shadow-2xl bg-white/95 backdrop-blur-xl border-2 border-emerald-200 rounded-2xl">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-700">4.9★ Rating</div>
                      <div className="text-sm text-slate-600">10K+ Reviews</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute -bottom-6 -right-6 p-4 animate-bounce shadow-2xl bg-white/95 backdrop-blur-xl border-2 border-blue-200 rounded-2xl" style={{ animationDelay: '1s' }}>
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-700">Free Delivery</div>
                      <div className="text-sm text-slate-600">Pan India</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute top-1/2 -left-10 p-4 animate-pulse shadow-2xl bg-white/95 backdrop-blur-xl border-2 border-yellow-200 rounded-2xl">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <Trophy className="h-8 w-8 text-yellow-600" />
                    <span className="text-sm font-bold text-yellow-700">Award Winner</span>
                  </CardContent>
                </Card>

                {/* Enhanced Image Indicators */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHeroImage(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        index === currentHeroImage 
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 shadow-lg scale-125' 
                          : 'bg-white/70 hover:bg-white/90 scale-100'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Categories Section with Parallax Effect */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900/50 dark:to-blue-900/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent animate-fade-in">
                Explore Categories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Discover your perfect ride from our meticulously curated collection
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {topCategories.map((category, index) => (
                <Link key={category} to={`/products?category=${category}`}>
                  <Card className="group cursor-pointer transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 animate-fade-in border-2 border-transparent hover:border-gradient-to-r hover:from-orange-200 hover:to-red-200 bg-white/80 backdrop-blur-lg" style={{ animationDelay: `${index * 0.15}s` }}>
                    <CardContent className="p-8 text-center">
                      <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-2xl">
                        <span className="text-white text-3xl font-bold">
                          {category.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-orange-600 transition-colors duration-500">
                        {category}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Products with Staggered Animation */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-orange-900 to-red-900 bg-clip-text text-transparent animate-fade-in">
                Featured Superbikes
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Handpicked legends that define automotive excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in hover:scale-105 transition-all duration-500 hover:z-10" style={{ animationDelay: `${index * 0.15}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/products">
                <Button size="lg" variant="outline" className="group hover:scale-110 transition-all duration-500 bg-gradient-to-r from-white to-orange-50 hover:from-orange-50 hover:to-red-50 border-2 border-orange-200 hover:border-orange-400 text-lg px-8 py-4">
                  <Star className="mr-3 h-6 w-6 group-hover:text-orange-500 transition-colors" />
                  View All Legends
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section with Advanced Animations */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900/50 dark:to-purple-900/20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-ping" style={{ animationDuration: '6s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900 bg-clip-text text-transparent animate-fade-in">
                The SuperBikes Advantage
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Experience unparalleled service in India's premium superbike ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((feature, index) => (
                <Card key={index} className={`text-center p-8 hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-6 group animate-fade-in border-2 border-transparent hover:border-white/50 ${feature.bgPattern} backdrop-blur-lg`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="space-y-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-xl group-hover:shadow-2xl`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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
