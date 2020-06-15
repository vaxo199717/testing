import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // users: FormGroup;
  user: any[] = [];
  days: number[] = [];
  months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']
  years: number[] = [];

  constructor(private fb: FormBuilder) { }

  userProfileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    persNumber: [''],
    dge: [''],
    tve: [''],
    weli: ['']
  })

  add() {
    // this.user.push(this.users.value)
    this.user.push(this.userProfileForm.value);
    this.userProfileForm.reset();
  }

  ngOnInit(): void {

    // this.users = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   persNumber: new FormControl(),
    //   dge: new FormControl(),
    //   tve: new FormControl(),
    //   weli: new FormControl()
    // })

    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    for (let i = 2020; i >= 1920; i--) {
      this.years.push(i);
    }
  }
}
