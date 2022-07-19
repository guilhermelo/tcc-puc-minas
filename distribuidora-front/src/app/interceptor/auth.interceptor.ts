import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable, OperatorFunction } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.isAuthenticated$.pipe(switchMap(isAuthenticated => this.teste(req, next, isAuthenticated)));
  }

  teste(req: HttpRequest<any>, next: HttpHandler, isAuthenticated: boolean) {
    if(isAuthenticated) {
      return this.authService.getAccessTokenSilently().pipe(switchMap(accessToken => {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        });

        return next.handle(req);
      }));
    }

    return next.handle(req);
  }

}
