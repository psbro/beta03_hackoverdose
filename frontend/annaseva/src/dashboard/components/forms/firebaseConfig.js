import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyARw4FOWzQm15npu_qljeBBDjOGCn60wzE",
    authDomain: "django-5b17c.firebaseapp.com",
    databaseURL: "https://django-5b17c-default-rtdb.firebaseio.com",
    projectId: "django-5b17c",
    storageBucket: "django-5b17c.appspot.com",
    messagingSenderId: "346892731581",
    appId: "1:346892731581:web:7d7b588b91e04283f023d4",
    measurementId: "G-VX5T526Y4F"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
