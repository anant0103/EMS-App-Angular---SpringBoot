import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { BirthdayService } from 'src/app/Services/APIService/birthday.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  user: User[] = [];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit(): void {
    let month = new Date().getMonth();
    this.birthdayService.getBirthdayList(month+1).subscribe((data) => {
      this.user = data;
    })
  }

}
