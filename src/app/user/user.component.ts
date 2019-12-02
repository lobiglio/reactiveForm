import { User } from "./../models/user";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { emailValidator } from "../directives/email-validatoir";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  userForm = this.fb.group({
    username: [""],
    credentials: this.fb.group({
      useremail: ["", [Validators.required, emailValidator]],
      userpassword: [""]
    }),
    userstreet: [""],
    userpostalcode: [""],
    usercity: [""]
  });

  user: User = new User();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  // createUser() {
  //   this.user.name = this.username.value;
  //   this.user.email = this.useremail.value;
  //   this.user.password = this.userpassword.value;
  //   this.user.address.street = this.userstreet.value;
  //   this.user.address.postalCode = this.userpostalcode.value;
  //   this.user.address.city = this.usercity.value;
  // }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
