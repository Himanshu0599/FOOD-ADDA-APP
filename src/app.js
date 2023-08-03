import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from './utils/store'
import Shimmer from "./components/Shimmer";

const Body=lazy(()=>import("./components/Body"))
const About =lazy(()=>import("./components/About"))
const Cart =lazy(()=>import("./components/Cart"))
const Help=lazy(()=>import("./components/Help"))
const RestaurantMenu=lazy(()=>import("./components/ResturantMenu"))
const Register=lazy(()=>import("./components/Register"))
const Login=lazy(()=>import("./components/Login"))

const AppLayout = () => {
  const [user, setUser] = useState({});
  return (

    <Provider store={store}>
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
       </Provider>
   
   );
 };
 

const appRouter = createBrowserRouter([
  {
    path: "/",
     element: <AppLayout />,
    children: [
      { path: "/", element:<Body /> },
      { path: "/about", element:<Suspense fallback={<Shimmer/>}><About /></Suspense> },
      { path: "/Help", element:<Suspense fallback={<Shimmer/>}><Help /></Suspense> },
      { path: "/restaurant/:resId", element: <Suspense fallback={<Shimmer/>}><RestaurantMenu /></Suspense> },
      { path: "/cart", element:<Suspense fallback={<Shimmer/>}><Cart /></Suspense>},
      { path: "/login", element:<Suspense fallback={<Shimmer/>}><Login /></Suspense>},
      { path: "/register",element:<Suspense  fallback={<Shimmer/>}><Register/></Suspense>}
    ],
  },
]);


const rootDom = ReactDOM.createRoot(document.getElementById("root"));
rootDom.render(<RouterProvider router={appRouter} />);
