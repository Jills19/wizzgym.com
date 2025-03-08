"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slice";
import { useState } from "react";
import Header from "../components/Header";
import { FooterSection } from "../components/footer";

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
  setAdded: any;
  id: Number;
  quantity: any;
}

const StorePage: React.FC = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  return (
    <>
      {added && (
        <div className='font-body fixed top-14 z-50 left-0 w-[100%] flex items-center justify-center'>
          <div className='rounded-md bg-green-500 text-secondary font-semibold  p-1 my-4 text-center'>
            Item added !
          </div>
        </div>
      )}

      <div className='font-body min-h-screen bg-secondary text-accent'>
        <div className='text-secondary sticky top-0 z-40 w-[100%]'>
          <Header />
        </div>

        <h1 className='text-2xl text-secondary md:text-3xl font-bold text-center my-8'>
          Supplements and Gym Equipment
        </h1>
        <div className='m-auto max-w-4xl md:grid flex flex-col   justify-center items-center  md:grid-cols-3 lg:grid-cols-4 md:gap-6'>
          {products.map((product, index) => (
            <div key={product.id}>
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                setAdded={setAdded}
                id={product.id}
                quantity={product.quantity}
              />
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default StorePage;

const products = [
  {
    name: "Protein Powder",
    image: "/sup1.jpg",
    price: 29.99,
    quantity: 0,
    id: 1,
  },
  {
    name: "Dumbbells (Set of 2)",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6545/6545965_sd.jpg",
    price: 49.99,
    quantity: 0,
    id: 2,
  },
  {
    name: "Yoga Mat",
    image:
      "https://img.freepik.com/free-photo/rolled-up-yoga-mat-floor_23-2147802572.jpg?ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    price: 19.99,
    quantity: 0,
    id: 3,
  },
  {
    name: "Creatine Supplement",
    image:
      "https://img.freepik.com/free-psd/protein-powder-container-3d-illustration_1419-2944.jpg?ga=GA1.1.338249258.1711012052&semt=ais_hybrid",
    price: 24.99,
    quantity: 0,
    id: 4,
  },
];

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  setAdded,
  id,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=' flex flex-col  m-3   text-secondary w-56  h-[299px] rounded-xl  bg-accent'>
        <img className='w-full h-[60%] rounded-t-md' src={image} alt={name} />
        <div className='p-3 h-[30%]'>
          <div className='font-bold text-lg mb-2'>{name}</div>
          <p className=''>${price.toFixed(2)}</p>
          <div className='  flex flex-row justify-center items-center'>
            <button
              onClick={() => {
                dispatch(addToCart({ name, image, price, id }));
                setAdded(true);
                setTimeout(() => {
                  setAdded(false);
                }, 3000);
              }}
              className='bg-red-500 hover:bg-red-700 text-accent font-bold py-2 px-6 rounded'
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
