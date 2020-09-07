import { Injectable } from '@angular/core';
   
// interface
export interface IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

@Injectable()
//class that implements interface
//Model -- ng g cl cltacts/models/contact
export class Contact implements IContact{
    id: number;
    name: string;
    email: string;
    phone: string;
}