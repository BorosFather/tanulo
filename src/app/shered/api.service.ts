/*
* File: api.service.ts
* Author: Boros Zoltán
* Copyright: 2023 Borosfather
* Group: Szoft II N
* Date: 2023-03-08
* Github: https://github.com/borosfather
* Licenc: GNU GPL
*/ 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getStudents() {

    let endpoint = "students";
    let url = this.host + endpoint;
  
    return this.http.get<any>(url);
  }

}
