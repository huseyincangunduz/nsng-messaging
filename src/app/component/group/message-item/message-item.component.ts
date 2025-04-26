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
  selector: "app-message-item",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  templateUrl: "./message-item.component.html",
  styleUrl: "./message-item.component.css",
  schemas: [NO_ERRORS_SCHEMA],
})
export class MessageItemComponent {
  item = input<UserMessage>();
  currentUserName = "hüseyin";
  isSenderIsThisDevice = computed(() => {
    return this.item()?.from == this.currentUserName;
  });
}
