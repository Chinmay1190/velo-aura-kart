
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { ShoppingCart, Star, IndianRupee, ArrowLeft, Heart, Share2 } from 'lucide-react';

function ProductDetailsContent() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.brand} {product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                  Sale
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {product.brand} {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                {product.inStock ? (
                  <Badge className="bg-green-500 hover:bg-green-600">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <IndianRupee className="h-6 w-6" />
                  <span className="text-3xl font-bold">
                    {formatPrice(product.price)}
                  </span>
                </div>
                {product.originalPrice && (
                  <div className="flex items-center text-muted-foreground line-through">
                    <IndianRupee className="h-4 w-4" />
                    <span className="text-xl">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="lg">
                  Book Test Ride
                </Button>
                <Button variant="outline" size="lg">
                  Get EMI Details
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Engine</span>
                        <span>{product.specifications.engine}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Power</span>
                        <span>{product.specifications.power}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Torque</span>
                        <span>{product.specifications.torque}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Top Speed</span>
                        <span>{product.specifications.topSpeed}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Weight</span>
                        <span>{product.specifications.weight}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="font-medium">Fuel Tank</span>
                        <span>{product.specifications.fuelTank}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">⭐</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.rating}/5.0 Average Rating
                    </h3>
                    <p className="text-muted-foreground">
                      Based on {product.reviews} verified customer reviews
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <CardContent className="p-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-32 object-cover rounded mb-4"
                      />
                      <h3 className="font-semibold mb-2">
                        {relatedProduct.brand} {relatedProduct.name}
                      </h3>
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        <span className="font-bold">
                          {formatPrice(relatedProduct.price)}
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default function ProductDetails() {
  return (
    <CartProvider>
      <ProductDetailsContent />
    </CartProvider>
  );
}
