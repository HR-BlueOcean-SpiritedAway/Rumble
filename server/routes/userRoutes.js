const { db } = require('../../firebase');
const { collection, query, getDocs } = require('firebase/firestore');

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

module.exports = router;
