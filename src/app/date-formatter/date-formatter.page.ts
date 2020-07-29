import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-date-formatter",
  templateUrl: "./date-formatter.page.html",
  styleUrls: ["./date-formatter.page.scss"],
})
export class DateFormatterPage implements OnInit {
  unformattedDate: any = "";

  day: any = "";
  month: any = "";
  year: any = "";
  date: any = "";
  showResult: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  format() {
    this.day = this.unformattedDate.toString().slice(0, 2);
    console.log(this.day);
    this.month = this.unformattedDate.toString().slice(2, 4);
    console.log(this.month);
    this.year = this.unformattedDate.toString().slice(4);
    console.log(this.year);
    this.date = this.day + "-" + this.month + "-" + this.year;
    this.showResult = true;
  }
  imageCropper() {
    this.router.navigate(["./home"]);
  }
}
