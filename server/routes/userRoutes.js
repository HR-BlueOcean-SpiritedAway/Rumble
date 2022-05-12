const { db } = require('../../firebase');
const { collection, query, doc, getDocs, getDoc, updateDoc, where } = require('firebase/firestore');

const router = require('express').Router();

// Reference to the 'users' collection in our Firestore db:
const usersRef = collection(db, 'users');

/* *****************************************************************************
*          ~ ALL OF THESE ROUTES ARE PREFIXED BY '/api/users/' ~
* For more info on how to use Firestore, check out the docs (they're good):
*   https://firebase.google.com/docs/firestore/query-data/get-data
***************************************************************************** */

router.get('/test', async (req, res) => {
  const q = query(usersRef);
  const allUsers = [];

  try {
    const querySnapshot = await getDocs(q);

    // Gotcha: querySnapshot is not exactly an array, so you cannot use `.map()`
    querySnapshot.forEach(doc => {
      allUsers.push(doc.data());
    });

    res.json(allUsers);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve users.' });
  }
});

// Add a favorite restaurant; POST with body { uid, restaurantID }
router.post('/addFavorite', async (req, res) => {
  const { uid, restaurantID } = req.body;

  try {
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);
    const favorites = docSnap.data()?.favorites || [];
    if (!(restaurantID in favorites)) favorites.push(restaurantID);
    await updateDoc(userDocRef, { favorites });
    res.sendStatus(201);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add favorite.' })
  }
});

// Send back a list of swiped favorites for a user
router.get('/getFavorites/:uid', async(req, res) => {
  const uid = req.params.uid
  console.log(uid)
  try {
    const userDocRef = doc(db, 'users', uid);
    const snapshot = await getDoc(userDocRef);
    const favorites = snapshot.data().favorites || [];
    res.json(favorites);
  } catch (error) {
    res.status(400).json({message: 'Could not fetch favorites'});
  }
})

// get a single user's data (for preference of cuisine and priceRange) by docID
// dk's doc id = tEp1Vjq4EwesOESNtkGWVIDvBrf2
router.get('/getSingleUserInfo/:uid', async(req, res) => {
  const singleUser = [];
  const uid = req.params.uid
  try {
    const q = doc(db, 'users', uid);
    const querySnapshot = await getDoc(q);
    res.json(querySnapshot.data())
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve info of single user.' });
  }
})

module.exports = router;
