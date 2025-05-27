import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, Mail, Truck, Home, Printer, Star, Gift, Sparkles, Shield } from 'lucide-react';

function PaymentSuccessContent() {
  const { state, dispatch } = useCart();
  const location = useLocation();
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Get order data from navigation state
    const formData = location.state?.formData;
    const items = location.state?.items || [];
    const total = location.state?.total || 0;
    
    setOrderData({
      formData: formData || {},
      items,
      total,
      subtotal: total,
      tax: Math.round(total * 0.18),
      finalTotal: Math.round(total * 1.18)
    });

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
  }, [dispatch, location.state]);

  const orderId = `SB${Date.now()}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN');
  const orderDate = new Date().toLocaleDateString('en-IN');

  const printInvoice = () => {
    if (!orderData) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const invoiceHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Invoice - ${orderId}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px; }
            .logo { font-size: 24px; font-weight: bold; color: #333; margin-bottom: 10px; }
            .invoice-title { font-size: 28px; color: #333; margin: 0; }
            .invoice-details { display: flex; justify-content: space-between; margin-bottom: 30px; }
            .details-section { width: 48%; }
            .details-section h3 { margin-bottom: 10px; color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
            .details-section p { margin: 5px 0; }
            .billing-section { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
            .items-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .items-table th, .items-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .items-table th { background-color: #f5f5f5; font-weight: bold; }
            .items-table tr:nth-child(even) { background-color: #f9f9f9; }
            .total-section { text-align: right; margin-top: 20px; }
            .total-row { margin: 5px 0; padding: 5px 0; }
            .final-total { font-weight: bold; font-size: 18px; border-top: 2px solid #333; padding-top: 10px; }
            .footer { margin-top: 40px; text-align: center; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
            .status-badge { background-color: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">🏍️ SuperBikes India</div>
            <h2 class="invoice-title">INVOICE</h2>
            <p style="margin: 5px 0; color: #666;">India's Premier Superbike Destination</p>
          </div>
          
          <div class="invoice-details">
            <div class="details-section">
              <h3>📋 Invoice Details</h3>
              <p><strong>Invoice #:</strong> ${orderId}</p>
              <p><strong>Order Date:</strong> ${orderDate}</p>
              <p><strong>Payment Method:</strong> ${orderData.formData.paymentMethod || 'Credit Card'}</p>
              <p><strong>Payment Status:</strong> <span class="status-badge">✅ PAID</span></p>
            </div>
            
            <div class="details-section">
              <h3>🚚 Delivery Information</h3>
              <p><strong>Estimated Delivery:</strong> ${estimatedDelivery}</p>
              <p><strong>Delivery Type:</strong> Express Delivery</p>
              <p><strong>Shipping Cost:</strong> <span style="color: #10b981; font-weight: bold;">FREE</span></p>
              <p><strong>Status:</strong> <span class="status-badge">Processing</span></p>
            </div>
          </div>

          <div class="billing-section">
            <h3>👤 Billing Information</h3>
            <p><strong>Name:</strong> ${orderData.formData.firstName || ''} ${orderData.formData.lastName || ''}</p>
            <p><strong>Email:</strong> ${orderData.formData.email || ''}</p>
            <p><strong>Phone:</strong> ${orderData.formData.phone || ''}</p>
            <p><strong>Address:</strong> ${orderData.formData.address || ''}</p>
            <p><strong>City:</strong> ${orderData.formData.city || ''}, ${orderData.formData.state || ''} - ${orderData.formData.pincode || ''}</p>
          </div>

          <h3>🛍️ Order Items</h3>
          <table class="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${orderData.items.map(item => `
                <tr>
                  <td><strong>${item.name}</strong><br><small style="color: #666;">${item.category}</small></td>
                  <td>${item.brand}</td>
                  <td>${item.quantity}</td>
                  <td>₹${item.price.toLocaleString('en-IN')}</td>
                  <td>₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="total-section">
            <div class="total-row">Subtotal: ₹${orderData.subtotal.toLocaleString('en-IN')}</div>
            <div class="total-row">Shipping: <span style="color: #10b981; font-weight: bold;">FREE</span></div>
            <div class="total-row">Tax (18% GST): ₹${orderData.tax.toLocaleString('en-IN')}</div>
            <div class="total-row final-total">Total: ₹${orderData.finalTotal.toLocaleString('en-IN')}</div>
          </div>

          <div class="footer">
            <p><strong>🎉 Thank you for choosing SuperBikes India!</strong></p>
            <p>📞 Support: +91 98765 43210 | 📧 Email: support@superbikes.in</p>
            <p>🌐 Website: www.superbikes.in | 📍 Visit our showrooms across India</p>
            <p style="font-size: 12px; margin-top: 15px;">This is a computer-generated invoice. No signature required.</p>
            <p style="font-size: 12px; color: #999;">Terms & Conditions apply. Please visit our website for complete terms.</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
    printWindow.print();
  };

  if (!orderData) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {showConfetti && (
          <>
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              >
                <Sparkles className="h-4 w-4 text-yellow-400 opacity-70" />
              </div>
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <Star className="h-3 w-3 text-blue-400 opacity-60" fill="currentColor" />
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
              Thank you {orderData.formData.firstName}! Your dream superbike is on its way! 🏍️
            </p>
          </div>

          {/* Order Summary Card */}
          <div className={`mb-8 transition-all duration-1000 ${
            animationStep >= 2 ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-800">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Gift className="h-6 w-6 text-green-600" />
                  <span>Order Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="text-left">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.brand} • Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₹{orderData.subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (18%):</span>
                      <span>₹{orderData.tax.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>₹{orderData.finalTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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
