import firebase from 'firebase'
import dotenv from 'dotenv'
dotenv.config()

// App Configs
export const Config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
}

// UI Configs
export const UiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    // Email Link Sign In
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      requireDisplayName: true
    },
    // 3rd Party Sign In
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    'microsoft.com',
    'yahoo.com',
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy'
  // callbacks: {
  //   signInSuccessWithAuthResult: () => false,
  // }
}
