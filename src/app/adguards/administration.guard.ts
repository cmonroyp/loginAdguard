import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ClientService } from "../services/client.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(private clientService: ClientService) {}

  canActivate() {
    if (this.clientService.isLogged()) {
      let token = JSON.parse(localStorage.getItem("TOKEN"));

      if (token.role === "administrator") {
        return true;
      } else {
        console.log("No Autorizado");
        return false;
      }
    } else {
      return false;
    }
  }
}
