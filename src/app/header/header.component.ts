import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() basicInfo: any;

  hireMe() {
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/feed/";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }
  downloadCV() {
    const link = document.createElement("a");
    link.href = "https://www.google.com";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }
}
