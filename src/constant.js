export const IMG_CDN_URL ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const API_URL = `https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi`;
export const FETCH_MENU_URL = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
// `${API_URL}/restaurants/list/v5?lat=18.5318555&lng=73.8220565&page_type=DESKTOP_WEB_LISTING`;
//export const MENU_DETAILS ="https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";
export const MENU_DETAILS =`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=`
// `${API_URL}/menu/v4/full?lat=23.024349&lng=72.5301521`;
export const DELIVERY_CHARGES = 30;
export const TAXES = 0.1;

export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";