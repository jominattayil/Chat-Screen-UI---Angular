import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-screen',
  templateUrl: './message-screen.component.html',
  styleUrls: ['./message-screen.component.css']
})
export class MessageScreenComponent implements OnInit {
  name = "Stefin"
  status = "Online "

  constructor() { }

  ngOnInit(): void {
  }

}
