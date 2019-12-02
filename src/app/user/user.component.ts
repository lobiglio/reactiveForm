import { User } from "./../models/user";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  username = new FormControl("");
  useremail = new FormControl("");
  userpassword = new FormControl("");
  useraddress = new FormControl("");
  userpostalcode = new FormControl("");
  usercity = new FormControl("");
  user: User = new User();

  constructor() {}

  ngOnInit() {}

  createUser() {
    this.user.name = this.username.value;
    this.user.email = this.useremail.value;
    this.user.password = this.userpassword.value;
    this.user.address = this.useraddress.value;
    this.user.postalCode = this.userpostalcode.value;
    this.user.city = this.usercity.value;
  }
}
