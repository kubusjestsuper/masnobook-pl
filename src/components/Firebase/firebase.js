import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDqs6gA4CWhlauk-dSjKf-xXs-9GqgqtFw',
	authDomain: 'masnobook-pl.firebaseapp.com',
	projectId: 'masnobook-pl',
	storageBucket: 'masnobook-pl.appspot.com',
	messagingSenderId: '346932485545',
	appId: '1:346932485545:web:890ec81a5a47fcd5fc38b8',
	databaseURL:
		'https://masnobook-pl-default-rtdb.europe-west1.firebasedatabase.app/',
};
class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);

		this.auth = app.auth();
		this.db = app.database();
	}
	// *** User Data ***
	userInfo = () => this.auth.currentUser;
	// *** Auth API ***
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = (password) =>
		this.auth.currentUser.updatePassword(password);

	// *** User API ***

	user = (uid) => this.db.ref(`users/${uid}`);

	users = () => this.db.ref('users');
}
export default Firebase;
