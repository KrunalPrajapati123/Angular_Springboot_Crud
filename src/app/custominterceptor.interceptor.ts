import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustominterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=localStorage.getItem("token");
    request=request.clone({headers:request.headers.set('authorization','bearer 2gywffwfvfvfvevfetf777vygrvefeytfvevfvfefveufveuv ')});
    return next.handle(request);
  }
}
