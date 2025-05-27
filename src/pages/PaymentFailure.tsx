
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, RefreshCw, ArrowLeft, Headphones } from 'lucide-react';

export default function PaymentFailure() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Failure Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
                <XCircle className="h-12 w-12 text-red-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Payment Failed
              </h1>
              <p className="text-lg text-muted-foreground">
                Unfortunately, your payment could not be processed. Don't worry, no amount has been charged.
              </p>
            </div>

            {/* Error Details Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What happened?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-left space-y-3">
                  <h3 className="font-semibold">Common reasons for payment failure:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>Insufficient balance in your account</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>Card limit exceeded or blocked by bank</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>Incorrect card details or OTP</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>Network connectivity issues</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>Bank server temporarily unavailable</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                    💡 What you can do:
                  </h3>
                  <div className="space-y-1 text-sm text-blue-700 dark:text-blue-300 text-left">
                    <p>• Check your internet connection and try again</p>
                    <p>• Verify your card details and available balance</p>
                    <p>• Try using a different payment method</p>
                    <p>• Contact your bank if the issue persists</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link to="/checkout" className="w-full">
                <Button className="w-full flex items-center justify-center">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry Payment
                </Button>
              </Link>
              
              <Link to="/cart" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Cart
                </Button>
              </Link>

              <Button variant="outline" className="flex items-center justify-center">
                <Headphones className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>

            {/* Alternative Payment Methods */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Try Alternative Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="text-2xl mb-2">💳</div>
                    <p className="text-sm font-medium">Credit Card</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="text-sm font-medium">UPI</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="text-2xl mb-2">🏦</div>
                    <p className="text-sm font-medium">Net Banking</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-sm font-medium">EMI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>📞 24/7 Payment Support: +91 98765 43210</p>
                  <p>📧 Email: payments@superbikes.in</p>
                  <p>💬 Live Chat: Available on website</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Secure Shopping</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>🔒 256-bit SSL encryption</p>
                  <p>🛡️ PCI DSS compliant payment gateway</p>
                  <p>💯 100% secure transactions</p>
                </CardContent>
              </Card>
            </div>

            {/* Continue Shopping */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="font-semibold mb-2">Continue Shopping</h3>
              <p className="text-muted-foreground mb-4">
                Your cart items are saved. You can continue shopping and try payment later.
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
    </CartProvider>
  );
}
