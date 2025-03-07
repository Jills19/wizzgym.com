"use client";
import Header from "@/app/components/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/slice";
import { useSelector } from "react-redux";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  id: string;
};

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state: any) => state.cart.items); // Get items from Redux state

  const handleWhatsAppRedirect = () => {
    const products = cartItems?.map(
      (item: any) => ` ${item.name} - $ ${item.price} `
    );
    const phoneNumber = "+256705746131"; // Replace with your WhatsApp number
    const message = `Hello i'm checking out this \n \n${JSON.stringify(products)}\n No. ${cartItems.length}  total = $ ${totalPrice}`; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); // Opens the WhatsApp chat in a new tab
  };
  useEffect(() => {
    let count = 0;
    if (cartItems) {
      cartItems.forEach((element: ProductCardProps) => {
        count += element.price;
      });
      setTotalPrice(Math.ceil(count * 100) / 100);
    }
  }, [cartItems]);
  return (
    <>
      <Header />
      <div className='w-[100%] overflow-hidden'>
        {cartItems && cartItems.length > 0 ? (
          <section className='w-screen font-body min-h-screen bg-accentVariant pb-32 md:flex md:flex-row-reverse '>
            <div className='md:w-2/5 md:bg-accent md:rounded md:p-2 md:h-fit md:my-4 md:mx-2 md:items-center'>
              <div className='font-bold text-sm text-gray-400 p-2'>
                CART SUMMARY
              </div>
              <div className='flex flex-row w-[100%] items-center justify-between p-2 bg-gray-100 '>
                <div className='font-bold text-sm  '>subtotal</div>
                <div className='font-bold '>${totalPrice}</div>
              </div>
              <div className='font-bold text-sm text-gray-400 p-2'>
                CART({cartItems.length})
              </div>
              <button
                onClick={handleWhatsAppRedirect}
                className=' md:bg-primary md:w-[100%] md:p-3 md:m-2 md:rounded md:text-accent md:font-bold hidden  md:block '
              >
                check out (USD {totalPrice})
              </button>
            </div>
            <section className='flex flex-col-reverse py-6 md:w-3/5 bg-accentVariant font-body'>
              {cartItems.map((item: any) => (
                <div
                  key={item.name}
                  className='p-2 bg-accent shadow-sm md:max-w-96  my-4 mx-2 rounded'
                >
                  <div className='flex flex-row '>
                    <img src={item.image} className='w-36 md:w-44 rounded' />
                    <div className='ml-2'>
                      <div className='text-sm text-gray-700'>{item.name}</div>
                      <div className='font-bold'>${item.price}</div>
                    </div>
                  </div>

                  <div className='flex flex-row justify-between pt-1'>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item));
                      }}
                      className='btn bg-red-700 md:text-sm text-xs p-1 md:p-2 rounded-md text-accent font-semibold'
                    >
                      remove
                    </button>
                    <div>
                      <span className='text-green-500'>{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <div className='w-screen font-body flex items-center justify-center md:hidden'>
              <div className='w-screen flex items-center justify-center md:hidden'>
                <button
                  onClick={handleWhatsAppRedirect}
                  className=' bg-primary w-64 p-3 mt-3 rounded text-accent font-bold md:hidden '
                >
                  check out
                </button>
              </div>
            </div>
          
          </section>
        ) : (
          <div className='font-body'>OOPS! your cart is empty</div>
        )}
      </div>
    </>
  );
};

export default Cart;
