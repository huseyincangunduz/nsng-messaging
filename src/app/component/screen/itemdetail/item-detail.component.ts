import {
  AfterViewInit,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  TemplateRef,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { Item } from "../../../model/item";
import { ItemService } from "../../../service/item.service";
import { Frame, ScrollView } from "@nativescript/core";
import { UserMessage } from "../../../model/user-message";

@Component({
  selector: "ns-item-detail",
  templateUrl: "./item-detail.component.html",
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemDetailComponent implements OnInit, AfterViewInit {
  itemService = inject(ItemService);
  route = inject(ActivatedRoute);
  item = signal<Item>(null);
  nsScrollView = viewChild<ElementRef<ScrollView>>("NsScrollView");

  messages = signal<UserMessage[]>([
    {
      from: "Testo",
      content: "Selam Nice yılların olsun",
      date: new Date(2025, 4, 23, 0, 10),
    },
    {
      from: "Hüseyin",
      content: "Eyw",
      date: new Date(2025, 4, 23, 0, 11),
    },
  ]);

  /**
   *
   */
  constructor() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      const scroll = this.nsScrollView()?.nativeElement;
      if (scroll) {
        scroll.scrollToVerticalOffset(scroll.scrollableHeight, false);
      }
    }, 200);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item.set(this.itemService.getItem(id));

    // log the item to the console
    console.log(this.item());
  }

  goBack() {
    const frame = Frame.topmost();
    frame.goBack();
    // this.router.navigate([".."]);
  }
}
