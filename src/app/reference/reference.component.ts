import { Component, Input } from "@angular/core";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.component.html",
  styleUrls: ["./reference.component.css"],
})
export class ReferenceComponent {
  @Input() references: any;
}
