
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Mail, Truck, Home, Printer, Star, Gift, Sparkles } from 'lucide-react';

function PaymentSuccessContent() {
  const { dispatch } = useCart();
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Clear cart after successful payment
    dispatch({ type: 'CLEAR_CART' });
    
    // Trigger confetti and animations
    setShowConfetti(true);
    
    // Animate elements in sequence
    const timer1 = setTimeout(() => setAnimationStep(1), 500);
    const timer2 = setTimeout(() => setAnimationStep(2), 1000);
    const timer3 = setTimeout(() => setAnimationStep(3), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [dispatch]);

  const orderId = `SB${Date.now()}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN');
  const orderDate = new Date().toLocaleDateString('en-IN');

  const printInvoice = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const invoiceHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice - ${orderId}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px; }
            .logo { font-size: 24px; font-weight: bold; color: #333; }
            .invoice-details { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .details-section { width: 48%; }
            .details-section h3 { margin-bottom: 10px; color: #333; }
            .details-section p { margin: 5px 0; }
            .items-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .items-table th, .items-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .items-table th { background-color: #f5f5f5; }
            .total-section { text-align: right; margin-top: 20px; }
            .total-row { margin: 5px 0; }
            .final-total { font-weight: bold; font-size: 18px; border-top: 2px solid #333; padding-top: 10px; }
            .footer { margin-top: 40px; text-align: center; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">🏍️ SuperBikes India</div>
            <h2>INVOICE</h2>
          </div>
          
          <div class="invoice-details">
            <div class="details-section">
              <h3>Invoice Details:</h3>
              <p><strong>Invoice #:</strong> ${orderId}</p>
              <p><strong>Order Date:</strong> ${orderDate}</p>
              <p><strong>Payment Method:</strong> Credit Card</p>
              <p><strong>Payment Status:</strong> ✅ Paid</p>
            </div>
            
            <div class="details-section">
              <h3>Delivery Information:</h3>
              <p><strong>Estimated Delivery:</strong> ${estimatedDelivery}</p>
              <p><strong>Delivery Type:</strong> Standard Delivery</p>
              <p><strong>Shipping Cost:</strong> FREE</p>
              <p><strong>Status:</strong> Processing</p>
            </div>
          </div>

          <table class="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Premium Superbike Package</td>
                <td>1</td>
                <td>₹15,99,999</td>
                <td>₹15,99,999</td>
              </tr>
            </tbody>
          </table>

          <div class="total-section">
            <div class="total-row">Subtotal: ₹15,99,999</div>
            <div class="total-row">Shipping: FREE</div>
            <div class="total-row">Tax (18%): ₹2,87,998</div>
            <div class="total-row final-total">Total: ₹18,87,997</div>
          </div>

          <div class="footer">
            <p><strong>Thank you for choosing SuperBikes India!</strong></p>
            <p>📞 Support: +91 98765 43210 | 📧 Email: support@superbikes.in</p>
            <p>This is a computer-generated invoice. No signature required.</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {showConfetti && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                <Sparkles className="h-4 w-4 text-yellow-400 opacity-70" />
              </div>
            ))}
          </>
        )}
      </div>

      <Header />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon with Animation */}
          <div className={`mb-8 transition-all duration-1000 ${animationStep >= 0 ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-6 animate-pulse">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 text-yellow-400 transition-all duration-500 ${
                    animationStep >= 1 ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                  fill="currentColor"
                />
              ))}
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${
              animationStep >= 1 ? 'animate-fade-in' : 'opacity-0'
            }`}>
              Payment Successful! 🎉
            </h1>
            <p className={`text-xl text-muted-foreground transition-all duration-1000 ${
              animationStep >= 1 ? 'animate-fade-in' : 'opacity-0'
            }`}>
              Thank you for your purchase! Your dream superbike is on its way! 🏍️
            </p>
          </div>

          {/* Animated Cards */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transition-all duration-1000 ${
            animationStep >= 2 ? 'animate-fade-in' : 'opacity-0'
          }`}>
            {/* Order Details Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-200 dark:border-green-800">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Gift className="h-6 w-6 text-green-600" />
                  <span>Order Confirmation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 gap-6 text-left">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-yellow-500" />
                      Order Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Order ID:</span> 
                        <span className="font-mono bg-primary/10 px-2 py-1 rounded text-primary">{orderId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Order Date:</span> 
                        <span>{orderDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Payment Method:</span> 
                        <span>Credit Card ✅</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Truck className="h-4 w-4 mr-2 text-blue-600" />
                      Delivery Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Estimated Delivery:</span> 
                        <span className="text-blue-600 font-semibold">{estimatedDelivery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Delivery Type:</span> 
                        <span>Express Delivery 🚚</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Shipping Cost:</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                          FREE 🎁
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Timeline Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Truck className="h-6 w-6 text-purple-600" />
                  <span>Order Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 text-left">
                  {[
                    { step: "Order Confirmed ✅", status: "completed", color: "text-green-600" },
                    { step: "Payment Processed 💳", status: "completed", color: "text-green-600" },
                    { step: "Preparing Your Superbike 🔧", status: "current", color: "text-blue-600" },
                    { step: "Quality Check 🔍", status: "pending", color: "text-gray-400" },
                    { step: "Out for Delivery 🚚", status: "pending", color: "text-gray-400" },
                    { step: "Delivered 🎉", status: "pending", color: "text-gray-400" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500' : 
                        item.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'
                      }`}></div>
                      <span className={`text-sm ${item.color} ${
                        item.status === 'current' ? 'font-semibold animate-pulse' : ''
                      }`}>
                        {item.step}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons with Animation */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-1000 ${
            animationStep >= 3 ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <Button 
              variant="outline" 
              className="flex items-center justify-center hover:scale-105 transition-all duration-200 hover:bg-purple-50 hover:border-purple-300"
              onClick={printInvoice}
            >
              <Printer className="h-4 w-4 mr-2" />
              Print Invoice
            </Button>
            <Button variant="outline" className="flex items-center justify-center hover:scale-105 transition-all duration-200 hover:bg-blue-50 hover:border-blue-300">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline" className="flex items-center justify-center hover:scale-105 transition-all duration-200 hover:bg-green-50 hover:border-green-300">
              <Mail className="h-4 w-4 mr-2" />
              Track Order
            </Button>
            <Link to="/" className="w-full">
              <Button className="w-full flex items-center justify-center hover:scale-105 transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>📞 Customer Support: +91 98765 43210</p>
                <p>📧 Email: support@superbikes.in</p>
                <p>⏰ Support Hours: 9 AM - 6 PM (Mon-Sat)</p>
                <p>💬 Live Chat: Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Your Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>✅ 15-day hassle-free returns</p>
                <p>✅ Full manufacturer warranty</p>
                <p>✅ Free pickup from your location</p>
                <p>✅ Insurance assistance included</p>
              </CardContent>
            </Card>
          </div>

          {/* Continue Shopping Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border-2 border-dashed border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-xl mb-3 flex items-center justify-center">
              <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />
              Continue Your Adventure
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore more premium superbikes, accessories, and gear from our exclusive collection! 🏍️✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="outline" className="hover:scale-105 transition-all duration-200">
                  🏍️ Browse More Superbikes
                </Button>
              </Link>
              <Button variant="outline" className="hover:scale-105 transition-all duration-200">
                🛡️ Shop Accessories
              </Button>
            </div>
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
