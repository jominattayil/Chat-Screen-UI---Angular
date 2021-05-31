import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {
  name = "Stefin Thomas"
  position = "Software Dev , Theralogic";
  email = "stefinthomas@gmail.com"
  phone = "+91 6523895645"
  location = "Kodukuthi , Idukki"


  constructor() { }

  ngOnInit(): void {
  }

}
