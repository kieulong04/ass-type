

const Cart = () => {
    return (
<div className="min-h-screen flex justify-center items-center">
  <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <h1 className="text-2xl font-bold mb-6 text-center">Vexere Payment</h1>
    <form className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="fullName" className="text-gray-700 font-semibold mb-1">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="form-input rounded-md border-gray-300" placeholder="John Doe" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
        <input type="email" id="email" name="email" className="form-input rounded-md border-gray-300" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-gray-700 font-semibold mb-1">Phone Number</label>
        <input type="tel" id="phone" name="phone" className="form-input rounded-md border-gray-300" placeholder="(+123) 456-7890" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cardNumber" className="text-gray-700 font-semibold mb-1">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" className="form-input rounded-md border-gray-300" placeholder="XXXX-XXXX-XXXX-XXXX" />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2">
          <label htmlFor="expirationDate" className="text-gray-700 font-semibold mb-1">Expiration Date</label>
          <input type="text" id="expirationDate" name="expirationDate" className="form-input rounded-md border-gray-300" placeholder="MM/YY" />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="cvv" className="text-gray-700 font-semibold mb-1">CVV</label>
          <input type="text" id="cvv" name="cvv" className="form-input rounded-md border-gray-300" placeholder="XXX" />
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Pay Now</button>
    </form>
  </div>
</div>

    );
  }
  
  export default Cart;
  