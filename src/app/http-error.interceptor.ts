import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(0),
        catchError((err: HttpErrorResponse) => {
          if (err != null) {
            console.log(err);
            if (err.error.indexOf('logonPage.do') !== -1) {
              // timeout
              location.href = err.error;
            }
            
          }
          return throwError(err);
        })
      );
  }
 }
