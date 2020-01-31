import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core"

@Component({
  selector: 'app-new-alerts',
  templateUrl: './new-alerts.component.html',
  styleUrls: ['./new-alerts.component.css']
})
export class NewAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}