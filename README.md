# Rumble
Rumble, a mobile food ordering app, done Tinder style.<br>
Software Team: [Dennis Cao](https://www.linkedin.com/in/dennisrcao/), [Francesco Garofalo](https://www.linkedin.com/in/garofalofrancesco/), [Dong Hyoung Kim](https://www.linkedin.com/in/dong-hyoung-kim-7686b8222/) Jake Gilfix, Edgar Carillo, Daniel Esquivel-Reynoso.

https://user-images.githubusercontent.com/521934/168444266-15f73cc7-9e8d-4032-8f19-d1ec723eea7f.mp4

## UI/UX
![All Components (1)](https://user-images.githubusercontent.com/521934/168443490-f6508e42-9e99-4d6e-bf69-adbe4aebae6d.png)
![Screen Shot 2022-05-14 at 10 57 58 AM](https://user-images.githubusercontent.com/521934/168443364-86316a63-4f54-41c0-9ada-b3686f51b9d0.png)

## Features TO DO
Swipe Solo - single user able to swipe on photos, once three photos are right swiped (heart), the user is directed to a top three restaurants page. 
Swipe Group Mode - add a friend

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

In order to access the Firestore Database admin panel (really useful for seeing if you're adding/removing data properly or to manually do so), click [here](https://console.firebase.google.com/). I created an account we can all share and will post the credentials in Slack/Discord (feel free to DM me if you need help, obviously). Log in to that account. Navigate to our project (named "Rumble"). In the left sidebar, you should see "Firestore Database". Click that. You should see two collections (as of when I'm writing this): restaurants and users. Again, anything you're unsure about, just ask!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
