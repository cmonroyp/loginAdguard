import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

//guard
import { AuthGuard } from "../adguards/auth.guard";
import { AdminGuard } from "../adguards/administration.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "login", loadChildren: "../login/login.module#LoginModule" },
      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
        canActivate: [AuthGuard]
      },
      {
        path: "",
        loadChildren: "./pages/information/information.module#InformationModule"
      },
      {
        path: "administration",
        loadChildren:
          "./pages/administration/administration.module#AdministrationModule",
        canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
