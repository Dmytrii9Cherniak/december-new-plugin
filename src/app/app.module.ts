import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PlatformHelper } from '@natec/mef-dev-platform-connector';
import { TestComponent } from './components/test/test.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CredInterceptor } from './interceptors/cred.interceptor';

const routes: Routes = PlatformHelper.updatePluginsRoutes([
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full',
      },
      {
        path: 'test',
        component: TestComponent
      },
    ]
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
