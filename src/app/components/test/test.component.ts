import { Component, OnInit } from '@angular/core';
import { PlatformHelper } from '@natec/mef-dev-platform-connector';
import { PlatformConnectorService } from '../../services/platform-connector.service';
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  PlatformHelper = PlatformHelper
  public pluginData: any;
  public currentTab: number = 1;
  public requestResponse: any;
  public createdResourceItem: any;

  constructor(
    private platformConnectorService: PlatformConnectorService
  ) {
  }

  ngOnInit(): void {
    this.pluginData = PlatformHelper.getPluginData();

    if (window.location.href.includes('localhost')) {
      this.platformConnectorService.HttpClient.get('http://localhost:82/api/v2/test/restresource/1').subscribe(value => {
        this.requestResponse = value
      });
    } else {
      this.platformConnectorService.HttpClient.get('/api/v2/test/restresource/1').subscribe(value => {
        this.requestResponse = value
      });
    }
  }

  createResource(): void {
    const objectCreate = {
      name: 'Walk dog'
    }

    this.platformConnectorService.HttpClient.post('http://localhost:82/api/v2/test/restresource/create-item', objectCreate).subscribe(value => {
      console.log(value)
    })
  }

  getTableKeys(): string[] {
    return Object.keys(this.pluginData);
  }

  public changeTab(tab: number): void {
    this.currentTab = tab;
  }

}
