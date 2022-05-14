<div align="center" width="100%">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js Icon" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Icon" />
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase Icon" />
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Icon" />
</div>

<h1 align="center">Rumble</h1>

<div align="center" width="100%">
    <img src="https://i.imgur.com/qcG7o3Y.png">
</div>

<h4 align="center">Rumble, a mobile food ordering app, done Tinder style.</h4>

## Content
 - [Motivation and Story](#motivation-and-story)
 - [The Team](#the-team)
 - [Getting Started](#getting-started)
 - [Features](#features)
 - [API Endpoints](#api-endpoints)
 - [UI / UX](#ui-ux)

## Motivation and Story
Lorem ipsum set some stuff.

## The Team

### Contributor: Edgar Carrillo
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ecarrillo046/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ec-rilo)
#### UI Specialist | PM | Full-Stack Engineer

Insert Description here of what you created does and after that, describe what you did to make it happen.

### Contributor: Francesco Garofalo 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/garofalofrancesco/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/garofalof)
#### Full-Stack Engineer

Insert Description here of what you created does and after that, describe what you did to make it happen.

### Contributor: Dennis Cao
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dennisrcao/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dennisrcao/)
#### Product Manager | Full-Stack Engineer 

Insert Description here of what you created does and after that, describe what you did to make it happen.

### Contributor: Jake Gilfix
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()
#### Full-Stack Engineer

Insert Description here of what you created does and after that, describe what you did to make it happen.

### Contributor: Dong Hyoung Kim 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dong-hyoung-kim/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DongHyoungKim)
#### Full-Stack Engineer

Insert Description here of what you created does and after that, describe what you did to make it happen.

### Contributor: Daniel Esquivel-Reynoso
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()
#### Full-Stack Engineer

Insert Description here of what you created does and after that, describe what you did to make it happen.

### Contributor: Chris Padovan
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chris-padovan/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ChrisPadovan)
#### Full-Stack Engineer

Insert Description here of what you created does and after that, describe what you did to make it happen.

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

## Features
**Feature 1**
</br>
Description of this feature here.

**Feature 2**
</br>
Description of this feature here.

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





## UI UX

https://user-images.githubusercontent.com/521934/168444266-15f73cc7-9e8d-4032-8f19-d1ec723eea7f.mp4


![All Components (1)](https://user-images.githubusercontent.com/521934/168443490-f6508e42-9e99-4d6e-bf69-adbe4aebae6d.png)
![Screen Shot 2022-05-14 at 10 57 58 AM](https://user-images.githubusercontent.com/521934/168443364-86316a63-4f54-41c0-9ada-b3686f51b9d0.png)


## Working with Firestore

In order to access the Firestore Database admin panel (really useful for seeing if you're adding/removing data properly or to manually do so), click [here](https://console.firebase.google.com/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

