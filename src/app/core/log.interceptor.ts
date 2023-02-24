import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    const start = Date.now();
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          const duree = Date.now() - start;
          console.log(`la requête ${req.url} a pris ${duree} ms.`);
        }
      })
    );
  }
}
