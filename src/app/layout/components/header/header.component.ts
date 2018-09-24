import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClientService } from "../../../services/client.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem("TOKEN");
    this.route.navigate(["/login"]);
  }
}
