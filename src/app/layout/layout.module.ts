import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//componente
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./components/header/header.component";

//rutas
import { LayoutRoutingModule } from "./layout.routing.module";

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, FormsModule],
  declarations: [LayoutComponent, HeaderComponent]
})
export class LayoutModule {}
