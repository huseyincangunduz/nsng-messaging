import {
  ChangeDetectionStrategy,
  Component,
  input,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { Item } from "~/app/model/item";

@Component({
  selector: "app-person-item",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  templateUrl: "./person-item.component.html",
  styleUrl: "./person-item.component.css",
  schemas: [NO_ERRORS_SCHEMA],
})
export class PersonItemComponent {
  item = input<Item>();
}
