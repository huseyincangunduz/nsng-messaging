import { Routes } from "@angular/router";
import { ItemsComponent } from "./component/screen/items/items.component";
import { ItemDetailComponent } from "./component/screen/itemdetail/item-detail.component";

export const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent },
];
