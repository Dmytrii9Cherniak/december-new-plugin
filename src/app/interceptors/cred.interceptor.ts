import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CredInterceptor implements HttpInterceptor {
  private password: string = 'QwErTy2020';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${this.password}`,
      },
    });

    console.log('Authorization header:', request.headers.get('Authorization'));

    return next.handle(request);
  }
}
