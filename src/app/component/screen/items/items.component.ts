import { Component, NO_ERRORS_SCHEMA, inject } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ItemService } from "../../../service/item.service";
import { PersonItemComponent } from "../../group/person-item/person-item.component";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html",
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    PersonItemComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemsComponent {
  alertx(arg0: string) {
    alert(arg0);
  }
  itemService = inject(ItemService);
  page = inject(Page);

  constructor() {
    // Setup large titles on iOS
    this.page.on("loaded", (args) => {
      if (__IOS__) {
        const navigationController: UINavigationController =
          this.page.frame.ios.controller;
        navigationController.navigationBar.prefersLargeTitles = true;
      }
    });
  }
}
