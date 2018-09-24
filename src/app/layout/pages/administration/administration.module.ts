import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdministrationComponent } from "./administration.component";
//rutas
import { AdministrationRoutingModule } from "./administration.routing.module";

@NgModule({
  imports: [CommonModule, AdministrationRoutingModule],
  declarations: [AdministrationComponent]
})
export class AdministrationModule {}
