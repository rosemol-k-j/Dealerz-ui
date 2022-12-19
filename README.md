Dealerz.

19/12/2022
-	Created a react app using npx create-react-app dealerz-ui
-	Created different folders for every component
-	Identified reusable components – HeaderComponent, BannerComponent, TopItemsComponent, FooterComponent
-	First created the Product Listing page
-	Using the product listing api https://fakestoreapi.com/products listed the products
-	Added filter for categories
-	onClicking the Category listed in the filter side we will get the products on that category for that I have used https://fakestoreapi.com/products/category/{category}
-	listed the category by using https://fakestoreapi.com/products/categories

-	Logic for add to cart
  	- On clicking the item add to cart and on clicking the cart icon should show the list of cart items
    - Define a cart variable and on adding each items update the cart variable
-	Logic for Pagination
   - On clicking the SEE MORE button it should pass another api with pagination parameter and should append the new list with the previous list of items.
   - We can update that using context api
-	Logic for Price range filtering
  -Call the api with the max and min price range and update the product list based on that result
Note: API was not available
 - User Location is identified using navigator 
