import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBPLmHCAEpNUufQZiOZZB_eItEME4ng78",
    authDomain: "chatbox-app-39188.firebaseapp.com",
    databaseURL: "https://chatbox-app-39188.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base