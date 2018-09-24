import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

//model
import { UserInterface } from "../model/user.model";

//service
import { ClientService } from "../services/client.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any = UserInterface;
  UserAuthenticated: object = {};
  constructor(
    private clientService: ClientService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = new UserInterface("peter@klaven", "cityslicka");
  }

  logIn() {
    this.userService.loginUser(this.user.email, this.user.password).subscribe(
      resp => {
        //asumiendo que el servicio retorna esta informacion
        this.UserAuthenticated = {
          role: "administrator",
          token: resp.token
        };

        this.clientService.setToken(this.UserAuthenticated);
        this.router.navigate(["/dashboard"]);
      },
      resp => {
        console.log(resp.error.error);
      }
    );
  }
}
