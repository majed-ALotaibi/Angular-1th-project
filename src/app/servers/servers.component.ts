import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Servers',// element selector
  //selector:'[app-Servers]', this is atripute selector
  //selector: '.app-Servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
