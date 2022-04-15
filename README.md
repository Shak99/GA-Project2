Full Stack CRUD Web App: Euphoric Apex

Euphoric Apex is an online metaphysical store. You can view all the items the store has online and add them to your car to check out. It has an administration feature where you can update the store by adding, deleting, or updating an item. Google authentication is used for a user to log in.

ERD Diagram
<img width="798" alt="Screen Shot 2022-04-15 at 1 09 08 PM" src="https://user-images.githubusercontent.com/47376680/163627697-4ed80bc7-f575-419a-a073-b3a8158073d3.png">

Wire Frames

<img width="548" alt="Screen Shot 2022-04-15 at 1 16 00 PM" src="https://user-images.githubusercontent.com/47376680/163627901-8b508b48-8396-4674-b3db-f6d4145fbea9.png">


This is the main log in page:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 03 17 AM" src="https://user-images.githubusercontent.com/47376680/163594331-61cb0c5b-afd9-40e8-a62f-8c4dbb2d527f.png">

If you decide to browse the site without logging in, the navigation will shown as examplified in the picture:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 04 02 AM" src="https://user-images.githubusercontent.com/47376680/163594378-f332cd64-b2ed-44c3-83c8-d150a963bf8a.png">

When logged in the navigation will give more options:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 04 42 AM" src="https://user-images.githubusercontent.com/47376680/163594523-82a42dfe-96a2-4960-9081-ca9b0d50b790.png">

When you choose an item to view, you will see the an image of the product, price, description, and reviews if there are any. If you are logged in you can write a review yourself, if not, then you will only be able to view submitted reviews.
<img width="1279" alt="Screen Shot 2022-04-15 at 9 05 18 AM" src="https://user-images.githubusercontent.com/47376680/163595111-948cf13e-cc2f-40b0-b8f1-cc2d77b6a671.png">

<img width="1279" alt="Screen Shot 2022-04-15 at 9 05 23 AM" src="https://user-images.githubusercontent.com/47376680/163595122-ac41c642-832c-46b9-8fff-d7710e808844.png">

This is the view when logged in when viewing an item's reviews:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 19 40 AM" src="https://user-images.githubusercontent.com/47376680/163595235-48c2df9c-0415-4a32-90e4-4690f30ca1fa.png">

This is the view when not logged in, when viewing an item's reviews:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 21 26 AM" src="https://user-images.githubusercontent.com/47376680/163595588-a2510c04-b7af-4a0c-bb80-0f397ad23332.png">

When you add items to your cart, you also have the option to delete them. If the cart is empty, then the checkout button will not be visible:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 26 36 AM" src="https://user-images.githubusercontent.com/47376680/163596163-ef7c6207-cba7-4a16-8046-6d598ccecfd9.png">

When you choose to checkout, you will have a confirmation page of the transaction:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 29 43 AM" src="https://user-images.githubusercontent.com/47376680/163596343-e22e097a-968b-4023-bd91-a03b7843d221.png">

If you want to edit the product database for the store, you can choose the Database tab. You will be able to view all the fields current products have and be able to edit or delete:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 36 04 AM" src="https://user-images.githubusercontent.com/47376680/163597168-397f8a82-c9ee-4305-a8af-a5833aa8ca38.png">

Update view:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 41 12 AM" src="https://user-images.githubusercontent.com/47376680/163597282-881b450d-75a5-4958-8185-2e917058624e.png">

If you choose to delete, there will be a confirmation to delete page, giving you the choice to confirm deletion or cancel action:
<img width="1279" alt="Screen Shot 2022-04-15 at 9 42 17 AM" src="https://user-images.githubusercontent.com/47376680/163597444-0e3899d9-e486-41cf-8a3d-a1f471dc76b7.png">

If you happen to be on the Database tab and are not logged in, you will get the message that you don't have access to the page

Technologies Used:
1. NodeJs
2. HTML
3. JavaScript
4. CSS
5. MongoDB
6. Express
7. Heroku



Future Plans:
1. Fix Database relations for displaying Cart correctly.
2. Work on CSS to make format and colors easier to read through.
3. Change access to edit database to specific user(s).


Deployment link: https://euphoric-apex.herokuapp.com/
