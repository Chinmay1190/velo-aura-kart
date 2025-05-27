
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Mail, Truck, Home } from 'lucide-react';

function PaymentSuccessContent() {
  const { dispatch } = useCart();

  useEffect(() => {
    // Clear cart after successful payment
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  const orderId = `SB${Date.now()}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been confirmed and is being processed.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <span>Order Confirmation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Order Details</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Order ID:</span> {orderId}</p>
                    <p><span className="font-medium">Order Date:</span> {new Date().toLocaleDateString('en-IN')}</p>
                    <p><span className="font-medium">Payment Method:</span> Credit Card</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Delivery Information</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Estimated Delivery:</span> {estimatedDelivery}</p>
                    <p><span className="font-medium">Delivery Type:</span> Standard Delivery</p>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      Free Delivery
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Truck className="h-4 w-4 mr-2" />
                  What's Next?
                </h3>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Order confirmation email sent to your registered email</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Our team will prepare your superbike for delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>You'll receive tracking information via SMS and email</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Delivery within 7-10 business days</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2" />
              Track Order
            </Button>
            <Link to="/" className="w-full">
              <Button className="w-full flex items-center justify-center">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>📞 Customer Support: +91 98765 43210</p>
                <p>📧 Email: support@superbikes.in</p>
                <p>⏰ Support Hours: 9 AM - 6 PM (Mon-Sat)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Return Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>✅ 15-day hassle-free returns</p>
                <p>✅ Full manufacturer warranty</p>
                <p>✅ Free pickup from your location</p>
              </CardContent>
            </Card>
          </div>

          {/* Continue Shopping */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Continue Shopping</h3>
            <p className="text-muted-foreground mb-4">
              Explore more superbikes from our premium collection
            </p>
            <Link to="/products">
              <Button variant="outline">
                Browse More Superbikes
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <CartProvider>
      <PaymentSuccessContent />
    </CartProvider>
  );
}
