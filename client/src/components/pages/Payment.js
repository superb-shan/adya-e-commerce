import React from 'react'
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div>
        <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Payment</h2>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <form>
                      <div className="mb-4">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                          id="card-number"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                      <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry-date">Expiry Date</Label>
                          <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="expiry-date"
                            placeholder="MM/YY"
                            type="text"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                            id="cvv"
                            placeholder="CVV"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="name-on-card">Name on Card</Label>
                        <Input
                          className="bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                          id="name-on-card"
                          placeholder="John Doe"
                          type="text"
                        />
                      </div>
                      <Button className="w-full bg-primary text-white hover:bg-primary/90 focus:ring-primary">
                        Complete Order
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span>Subtotal</span>
                    <span className="font-bold">$179.97</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span>Shipping</span>
                    <span className="font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span>Total</span>
                    <span className="text-2xl font-bold">$179.97</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link to="/">
                        <Button className="text-primary hover:bg-primary/10 focus:ring-primary" variant="outline">
                            Continue Shopping
                        </Button>
                    </Link>
                    <Button className="bg-primary text-white hover:bg-primary/90 focus:ring-primary">
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Payment