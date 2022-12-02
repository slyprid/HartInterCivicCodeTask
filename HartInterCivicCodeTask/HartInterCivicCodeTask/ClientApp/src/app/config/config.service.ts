import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IConfig {
  inventoryUrl: string;
  timeUrl: string;
  localInventoryFile: string;
}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get<IConfig>(this.configUrl);
  }
}
