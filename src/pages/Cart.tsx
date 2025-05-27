
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, IndianRupee, ArrowLeft, ShoppingBag } from 'lucide-react';

function CartContent() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any superbikes to your cart yet.
            </p>
            <Link to="/products">
              <Button size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/products">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <Badge variant="secondary">
            {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-32 h-32 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.brand} {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.category}
                          </p>
                          <Badge variant="outline" className="mt-1">
                            {item.specifications.power}
                          </Badge>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-20 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center justify-end">
                            <IndianRupee className="h-5 w-5" />
                            <span className="text-xl font-bold">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ₹{formatPrice(item.price)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4" />
                      <span>{formatPrice(state.total)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Insurance (Optional)</span>
                    <div className="flex items-center">
                      <IndianRupee className="h-3 w-3" />
                      <span>5,000</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-5 w-5" />
                    <span>{formatPrice(state.total + 5000)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/checkout" className="w-full">
                    <Button size="lg" className="w-full">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link to="/products" className="w-full">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>• Free delivery on all orders</p>
                  <p>• 15-day return policy</p>
                  <p>• Manufacturer warranty included</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function Cart() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}
