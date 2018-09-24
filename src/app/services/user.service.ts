import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
//model
import { UserInterface } from "../model/user.model";
import { LoginResultModel } from "../model/LoginModelResult";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(
    email: UserInterface,
    password: UserInterface
  ): Observable<LoginResultModel> {
    return this.http.post<LoginResultModel>("https://reqres.in/api/login", {
      email: email,
      password: password
    });
  }
}
