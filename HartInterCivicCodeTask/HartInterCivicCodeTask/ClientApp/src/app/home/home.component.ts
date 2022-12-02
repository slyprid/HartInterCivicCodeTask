import { Component, OnInit } from '@angular/core';

import { InventoryService } from "../inventory/inventory.service"
import { TimeService } from "../time/time.service"
import { ConfigService } from "../config/config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  inventory: any;
  inventoryUrl: string;
  timeUrl: string;
  localInventoryFile: string;
  startTime: Date;
  endTime: Date;
  secondsRemaining: number;
  percent: number;
  timer: any;

  constructor(private inventoryService: InventoryService, private timeService: TimeService, private configService: ConfigService) {
    this.inventoryUrl = "";
    this.timeUrl = "";
    this.localInventoryFile = "";
    this.startTime = new Date();
    this.endTime = new Date();
    this.secondsRemaining = 0;
    this.percent = 0;

    this.timer = setInterval(() => { this.countDown(); }, 1000);
  }

  ngOnInit(): void {
    this.configService.getConfig()
      .subscribe(
        items => {
          this.inventoryUrl = items.inventoryUrl;
          this.timeUrl = items.timeUrl;
          this.localInventoryFile = items.localInventoryFile;
          this.getInventory();
          this.getTime();
        });
  }

  getInventory(): void {
    this.inventoryService.getInventory(this.inventoryUrl)
      .subscribe(
        items => {
          this.inventory = items;
        });
  }

  getTime(): void {
    this.timeService.getStartTime(this.timeUrl)
      .subscribe(
        items => {
          this.startTime = new Date(items.toString());
          this.endTime.setSeconds(this.startTime.getSeconds() + 20);
          this.secondsRemaining = 20;
          this.percent = 100;
        });
  }

  countDown(): void {
    console.log('Tick: ' + this.startTime);
    if (this.startTime > new Date()) return;
    this.secondsRemaining--;

    if (this.secondsRemaining <= 0) {
      this.secondsRemaining = 0;
      this.timeService.postEndTime(this.timeUrl, new Date());
      this.getTime();
    }

    this.percent = (this.secondsRemaining / 20) * 100;
  }
}
