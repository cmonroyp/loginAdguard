import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const TOKEN = "TOKEN";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  constructor() {}

  setToken(token: any) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  isLogged(): Observable<boolean> {
    // return localStorage.getItem(TOKEN) != null;
    if (localStorage.getItem(TOKEN) != null) {
      return of(true);
    }
  }
}
