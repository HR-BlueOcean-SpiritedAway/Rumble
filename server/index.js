/* *****************************************************************************
* You really shouldn't need to touch this file. All routes are implemented in
* respective files within the ./routes directory!
***************************************************************************** */
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const express = require("express");

nextApp.prepare().then(() => {
  const app = express();
  const userRouter = require('./routes/userRoutes');
  const restaurantRouter = require('./routes/restaurantRoutes');

  app.use(express.json());

  // Register routes:
  app.use('/api/users', userRouter);
  app.use('/api/restaurants', restaurantRouter);


  // Rendering page per request
  app.get("*", (req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Node.js server listening on port ${PORT}...`);
  });
});