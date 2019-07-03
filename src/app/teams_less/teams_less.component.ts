// teams.component.ts

import {Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams-less',
  templateUrl: './teams_less.component.html',
  styleUrls: ['./teams_less.component.css']
})
export class TeamsLessComponent implements OnInit {
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
