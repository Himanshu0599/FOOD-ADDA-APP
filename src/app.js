import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from "./utils/userContext";

const About =lazy(()=>import("./components/About"))
 const AppLayout = () => {
  const [user, setUser] = useState({});
  return (

      <>
      <UserContext.Provider
       value={{
        user: user,
        setUser: setUser,
      }}
      >
         <Header />
         <Outlet />
         <Footer />
         </UserContext.Provider>
       </>
   
   );
 };

const appRouter = createBrowserRouter([
  {
    path: "/",
     element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);


const rootDom = ReactDOM.createRoot(document.getElementById("root"));
rootDom.render(<RouterProvider router={appRouter} />);
