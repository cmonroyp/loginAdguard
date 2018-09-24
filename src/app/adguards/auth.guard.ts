import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

//service
import { ClientService } from "../services/client.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private clientService: ClientService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route["_routerState"]["url"];

    if (this.clientService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(["/login"], {
        queryParams: {
          redirectUrl
        }
      })
    );
    return true;
  }
}
