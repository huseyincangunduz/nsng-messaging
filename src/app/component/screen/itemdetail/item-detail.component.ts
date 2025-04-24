import {
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
  inject,
  signal,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { Item } from "../../../model/item";
import { ItemService } from "../../../service/item.service";
import { Frame } from "@nativescript/core";

@Component({
  selector: "ns-item-detail",
  templateUrl: "./item-detail.component.html",
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemDetailComponent implements OnInit {
  itemService = inject(ItemService);
  route = inject(ActivatedRoute);
  item = signal<Item>(null);

  /**
   *
   */
  constructor(private router: Router) {}

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
