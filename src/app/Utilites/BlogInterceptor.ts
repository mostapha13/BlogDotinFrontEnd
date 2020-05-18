import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { domainName } from './Path';

export class BlogInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let myRequest: HttpRequest<any> = req;

        myRequest = req.clone({
            url: domainName + req.url
        });
 
        return next.handle(myRequest);
    }

}