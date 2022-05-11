const { db } = require('../../firebase');
const { collection, query, getDocs, where } = require('firebase/firestore');

const router = require('express').Router();

// Reference to the 'restaurants' collection in our Firestore db:
const restaurantsRef = collection(db, 'restaurants');

/* *****************************************************************************
*         ~ ALL OF THESE ROUTES ARE PREFIXED BY '/api/restaurants/' ~
* For more info on how to use Firestore, check out the docs (they're good):
*   https://firebase.google.com/docs/firestore/query-data/get-data
***************************************************************************** */

router.get('/test', async (req, res) => {
  const q = query(restaurantsRef);
  const allRestaurants = [];

  try {
    const querySnapshot = await getDocs(q);

    // Gotcha: querySnapshot is not exactly an array, so you cannot use `.map()`
    querySnapshot.forEach(doc => {
      allRestaurants.push(doc.data());
    });

    res.json(allRestaurants);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve restaurants.' });
  }
});


//only queries for 1 single restaurant
router.get('/restaurant', async (req, res) => {
  const singleRestaurant = [];

  try {
    const q = query(restaurantsRef, where("restaurantName","==", req.query.restaurant));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      singleRestaurant.push(doc.data());
    });
    res.json(singleRestaurant);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve restaurants.' });
  }
});

module.exports = router;
