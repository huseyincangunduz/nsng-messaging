import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
} from "@nativescript/angular";
import { UserMessage } from "../../../model/user-message";

@Component({
  selector: "app-message-textbox-area",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  templateUrl: "./message-textbox-area.component.html",
  styleUrl: "./message-textbox-area.component.css",
  schemas: [NO_ERRORS_SCHEMA],
})
export class MessageTextboxAreaComponent {}
