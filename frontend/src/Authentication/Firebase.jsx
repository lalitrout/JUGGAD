// firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDyTElSINzsHkJK9SOUfeHVR_WTYeVwYjs",
  authDomain: "authentication-6af34.firebaseapp.com",
  projectId: "authentication-6af34",
  storageBucket: "authentication-6af34.appspot.com",
  messagingSenderId: "895912464450",
  appId: "1:895912464450:web:3d7fd7832efebf1f5aa93f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage(); // Use the device's language for OTP prompts

const googleProvider = new GoogleAuthProvider();

// Function to set up invisible reCAPTCHA
const setUpRecaptcha = (phoneNumber, containerId = "recaptcha-container") => {
  return new Promise((resolve, reject) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      containerId,
      {
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA verified!");
        },
        "expired-callback": () => {
          reject(new Error("reCAPTCHA expired. Please try again."));
        }
      },
      auth
    );

    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        resolve(confirmationResult); // You can use this to confirm OTP later
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { auth, googleProvider, setUpRecaptcha };
