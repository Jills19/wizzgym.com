import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addState } from "./slice";

interface AuthInitializerProps {
  children: ReactNode;
}

const AuthInitializer: React.FC<AuthInitializerProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartLocalStorage = localStorage.getItem("cart");

      if (cartLocalStorage) {
        dispatch(addState(JSON.parse(cartLocalStorage)));
      }
    }
  }, [dispatch]);

  return children;
};

export default AuthInitializer;
