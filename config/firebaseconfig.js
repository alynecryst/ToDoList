const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const firebaseConfig = require('./firebase.json');

initializeApp({
    credential: cert(firebaseConfig)
});

const firestore = getFirestore();

module.exports = firestore;