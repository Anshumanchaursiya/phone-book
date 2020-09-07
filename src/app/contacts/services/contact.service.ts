import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

//Decorator -- is making the class dependency injectable
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }


  //create
  createContact(contactData: Contact): Observable<Contact> { //1. get the data from comp
    console.log(contactData);

    //2. send the data to REST API
    //2.1 What is the REST API URL? -- https://jsonplaceholder.typicode.com/users
    //2.2 What is the HTTP Method? -- POST
    //2.3 What's the REST API Client? -- HttpClient
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: any) => {  //3. get the resp from REST API
        console.log(res);
        return res; //4. send the resp to the comp
      }));



  }

  //get the contacts
  getContacts(): Observable<Contact[]> { //1. get the req from the component 
    console.log('Inside getContacts');

    //2. send it to the rest api-  REST_API-URL, Method : GET, Use http client
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => {  //3. get the req from REST API
        console.log(res);
        return res; //4. send it  to the comp
      }));


  }

  //read contact details
  getContactById(id: string): Observable<Contact> {
    console.log(id);
    // REST API URL- https://jsonplaceholder.typicode.com/users/1
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${id}`;

    return this.http.get(CONTACT_DETAILS_URL)
      .pipe(map((res: Contact) => {  //3. get the req from REST API
        console.log(res);
        return res; //4. send it  to the comp
      }));
  }


  //update
  updateContact(updatableContactData: Contact): Observable<Contact> {
    console.log(updatableContactData);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${updatableContactData.id}`;
    return this.http.put(CONTACT_DETAILS_URL, updatableContactData)
      .pipe(map((res: Contact) => {  //3. get the req from REST API
        console.log(res);
        return res; //4. send it  to the comp
      }));
  }

  //delete


  //search

}
