export function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
   return filterData;
}

export function filterMenu(text,data){
  return data.filter((menuData) =>menuData?.name?.toLowerCase().includes(text?.toLowerCase()));
}
