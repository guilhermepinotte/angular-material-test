import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const autenticacaoInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.retornarToken();

  if (tokenService.possuiToken()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};

// @Injectable()
// export class AutenticacaoInterceptor implements HttpInterceptor {
//   constructor(private tokenService: TokenService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const token = this.tokenService.retornarToken(); // Get the token from the service

//     if (this.tokenService.possuiToken()) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return next.handle(req);
//   }
// }
