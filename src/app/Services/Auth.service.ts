import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import * as firebase from 'firebase/app';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** My code here */

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json',
	//'Access-Control-Allow-Origin':'http://localhost:8080/*',
	//'Access-Control-Allow-Credentials':'true',
	//'Access-Control-Allow-Methods': '*',
	//'Access-Control-Allow-Headers':'Authorization'
   },
							   )
  };
@Injectable({
		providedIn: 'root',
	 })

	 export class AuthService {

		constructor(private http: HttpClient) {}

loginUser(loginForm) : Observable<any> {
	console.log('called here');
	let email  = loginForm.email;
	let password = loginForm.password;
	return this.http.post (AUTH_API + 'signin', {email,password},httpOptions); 		
	}
}
		// loginUser(loginForm): Observable<any> {
		// 	return this.http.post(
		// 	  AUTH_API + 'signin',
		// 	  {
		// 		email,
		// 		password.password,
		// 	  },
		// 	  httpOptions
		// 	);
		//   }
	//  }

/** the original code is below */

// @Injectable({
// 	providedIn: 'root',
// })

// export class AuthService {

// 	user: Observable<any>;
// 	userData: any;
// 	isLoggedIn = false;


// 	constructor(private firebaseAuth: AngularFireAuth,private router : Router,private toastr: ToastrService ) {
// 		this.user = firebaseAuth.authState;
// 	}

// 	/*
// 	 * getLocalStorageUser function is used to get local user profile data.
// 	 */
	// getLocalStorageUser(){
	// 	this.userData = JSON.parse(localStorage.getItem("userProfileData"));
	// 	if(this.userData) {
	// 		this.isLoggedIn = true;
	// 		return true;
	// 	} else {
	// 		this.isLoggedIn = false;
	// 		return false;
	// 	}
	// }

// 	/*
// 	 * signupUserProfile method save email and password into firabse &
// 	 * signupUserProfile method save the user sign in data into local storage.
// 	 */
// 	signupUserProfile(value) {
// 		this.firebaseAuth
// 		.createUserWithEmailAndPassword(value.email, value.password)
// 		.then(value => {
// 			this.setLocalUserProfile(value);
// 			this.router.navigate(['/dashboard/ecommerce']);
// 			this.toastr.success('Account Created!');
// 		})
// 		.catch(err => {
// 			this.toastr.error(err.message);
// 		});
// 	}

// 	/*
// 	 * loginUser fuction used to login.
// 	 */
// 	loginUser(value) {
// 		this.firebaseAuth.signInWithEmailAndPassword(value.email,value.password)
// 			.then(value => {
// 				this.setLocalUserProfile(value);
// 				this.router.navigate(['/dashboard/ecommerce']);
// 				this.toastr.success('Successfully logged In!');
// 			})
// 			.catch(err => {
// 				this.toastr.error(err.message);
// 			});
// 	}

// 	/*
// 	 * resetPassword is used to reset your password.
// 	 */
// 	resetPassword(value) {
// 		this.firebaseAuth.sendPasswordResetEmail(value.email)
// 			.then(value => {
// 				this.toastr.success("Email Sent");
// 				this.router.navigate(['/session/reset-password']);
// 			})
// 			.catch(err => {
// 				this.toastr.error(err.message);
// 			});
// 	 }

// 	/*
// 	 * logOut function is used to sign out.
// 	 */
	// logOut() {
		// this.firebaseAuth.signOut();
		// localStorage.removeItem("userProfileData");
		// this.isLoggedIn = false;
		// this.toastr.success("Successfully logged out!");
		// this.router.navigate(['/session/login']);
	// }

// 	/*
// 	 * setLocalUserProfile function is used to set local user profile data.
// 	 */
// 	setLocalUserProfile(value){
// 		localStorage.setItem("userProfileData", JSON.stringify(value));
// 		this.isLoggedIn = true;
// 	}
// }

