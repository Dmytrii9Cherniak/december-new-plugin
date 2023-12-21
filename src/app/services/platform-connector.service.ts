import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IHttpService, PlatformHelper, PluginLocalData } from '@natec/mef-dev-platform-connector';

@Injectable({
  providedIn: 'root'
})
export class PlatformConnectorService {

  private platformHttpService: IHttpService | undefined = PlatformHelper.getPlatformHttpClient();

  constructor(private httpService: HttpService) { }

  get HttpClient(): IHttpService{
    return this.platformHttpService ?? this.httpService;
  }

  get PluginData(): PluginLocalData | undefined{
    return PlatformHelper.getPluginData();
  }


}
