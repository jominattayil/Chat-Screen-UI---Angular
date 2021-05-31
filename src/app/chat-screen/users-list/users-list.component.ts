import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  name1 = "Stefin Thomas"
  name2 = "Maria Jose"
  name3 = "Christy Rose"
  name4 = "Rixon George"
  name5 = "Akshai Joseph"
  name6 = "Anna Jose"

  
  time = "10:46 am"

  constructor() { }

  ngOnInit(): void {
  }

}
