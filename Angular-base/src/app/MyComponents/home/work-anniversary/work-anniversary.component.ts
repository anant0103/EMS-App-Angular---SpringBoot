import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { BirthdayService } from 'src/app/Services/APIService/birthday.service';

@Component({
  selector: 'app-work-anniversary',
  templateUrl: './work-anniversary.component.html',
  styleUrls: ['./work-anniversary.component.css']
})
export class WorkAnniversaryComponent implements OnInit {

  user: User[] = [];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit(): void {
    let month = new Date().getMonth();
    this.birthdayService.getAnniversaryList(month+1).subscribe((data) => {
      this.user = data;
    })
  }
}
