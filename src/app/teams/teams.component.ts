// teams.component.ts

import {Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  @Input() amount: number;
  tableData = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.amount; i++) {
      this.tableData.push({
        name: `Name ${i}`,
        id: i
      });
    }
  }

}
