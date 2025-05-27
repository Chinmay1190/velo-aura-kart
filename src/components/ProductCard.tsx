
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { ShoppingCart, Star, IndianRupee } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {product.originalPrice && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          )}
          <Badge variant="secondary" className="absolute top-2 right-2">
            {product.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg leading-tight">
              {product.brand} {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                {product.rating}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <IndianRupee className="h-4 w-4" />
              <span className="text-xl font-bold">
                {formatPrice(product.price)}
              </span>
            </div>
            {product.originalPrice && (
              <div className="flex items-center text-muted-foreground line-through">
                <IndianRupee className="h-3 w-3" />
                <span className="text-sm">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{product.specifications.power}</span>
            <span>{product.reviews} reviews</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="flex space-x-2 w-full">
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button
            onClick={handleAddToCart}
            className="flex-1"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        {!product.inStock && (
          <p className="text-sm text-red-500 text-center">Out of Stock</p>
        )}
      </CardFooter>
    </Card>
  );
}
