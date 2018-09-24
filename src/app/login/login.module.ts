import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
//rutas
import { LoginRoutingModule } from "./login.routing.module";

@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginModule {}