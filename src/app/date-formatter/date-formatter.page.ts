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
  len: any = "";
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
    this.unformattedDate = this.date;
    this.showResult = true;
  }
  imageCropper() {
    this.router.navigate(["./home"]);
  }
  autoFormat() {
    this.len = this.unformattedDate.toString().length;
    if (this.len != 8) {
      setTimeout(() => {
        this.autoFormat();
      }, 5000);
      console.log("enter date");
    } else if ((this.len = 8)) {
      this.format();
    }
  }
  clear() {
    this.len = this.unformattedDate.toString().length;
    if (this.len == 0) {
      this.autoFormat();
    } else {
    }
  }
}
