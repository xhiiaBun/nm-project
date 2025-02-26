import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class appConstants{
    public static readonly AWS_API_WORDS = 'https://3bzxmx0mj0.execute-api.us-east-1.amazonaws.com/Prod';
    public static readonly AWS_API_AUTHORS = 'https://q9gw7mlmuh.execute-api.us-east-1.amazonaws.com/Dev';
}