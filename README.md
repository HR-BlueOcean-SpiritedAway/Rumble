# Rumble
Rumble: a mobile food ordering app, done Tinder style.<br>
Software Team: [Dennis Cao](https://www.linkedin.com/in/dennisrcao/), Chris Padovan [Francesco Garofalo](https://www.linkedin.com/in/garofalofrancesco/), [Dong Hyoung Kim](https://www.linkedin.com/in/dong-hyoung-kim-7686b8222/) Jake Gilfix, Edgar Carillo, Daniel Esquivel-Reynoso.

https://user-images.githubusercontent.com/521934/168444266-15f73cc7-9e8d-4032-8f19-d1ec723eea7f.mp4

## UI/UX
![All Components (1)](https://user-images.githubusercontent.com/521934/168443490-f6508e42-9e99-4d6e-bf69-adbe4aebae6d.png)
![Screen Shot 2022-05-14 at 10 57 58 AM](https://user-images.githubusercontent.com/521934/168443364-86316a63-4f54-41c0-9ada-b3686f51b9d0.png)

## Features TO DO
**Google Authentication** - sign in using OAuth <br>
**Swipe Solo** - single user able to swipe on photos, once three photos are right swiped (heart), the user is directed to a top three restaurants page.<br>
**Swipe Group Mode **- add a friend, swipe together, and choose a restaurant you both want!<br>
**Settings **- Choose cuisine, price, location, and distance of restaurants that you want to swipe on.<br>
**Restaurant List Mode** - browse local restaurants that match your criteria, or search for the food you want to eat.<br>
**Restaurant View **- Learn more about your chosen restaurant, browse their menu, and add items to your cart.<br>
**Cart **- See a list of items you've added to your cart, and proceed to checkout to complete your order.<br>

## Tech Stack TO DO
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)



## Getting Started

**Git clone repo
**You will first need to create a `.env.local` file in the project's root directory**. This will store all of the environment variables we need for this project, including the port on which to run the Node.js server as well as all of the set-up for the
Firebase/Firestore stuff. 


Then, install all the node modules, as usual:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

You should see a message that says:
```bash
Node.js server listening on port PORT...
```

Open http://localhost:PORT with your browser to see the result.

## Working with Firestore

In order to access the Firestore Database admin panel (really useful for seeing if you're adding/removing data properly or to manually do so), click [here](https://console.firebase.google.com/).

## API Endpoints

### `GET /api/users/getFavorites:uid`
Retrieve a list of favorites for a single user

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| uid        | String | Required ID of the user for which data should be returned. |

### `GET /api/users/getSingleUserInfo/:uid`
Retrieve a list of preferences for a single user

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| uid        | String | Required ID of the user for which data should be returned. |

### `POST /api/users/addFavorite`
Add a restaurant to a single user's list of favorite restaurants

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| uid        | String | Required ID of the user for which the favorite restaurant should be added. |
| restaurantId| Integer | Required ID of the restaurant being added to a user's favorites. |

### `POST /api/users/addPreferences`
Add preferences to a single user's list of preferences

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| uid        | String | Required ID of the user for which preferences should be added. |
| cuisine    | String | Type of cuisine being added to a user's preferences. |
| price      | String | Price range being added to a user's preferences.   |

### `DELETE /api/users/deleteFavorite`
Delete a restaurant from a single user's list of favorite restaurants

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| uid        | String | Required ID of the user for which the favorite restaurant should be deleted. |
| restaurantId| Integer | Required ID of the restaurant being deleted from a user's favorites. |

### `GET /api/restaurants`
Retrieve a list of all restaurants

### `GET /api/restaurants/restaurant`
Retrieve a single restaurant

#### Parameters
| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| restaurant | String | Name of the restaurant for which data should be returned. |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
