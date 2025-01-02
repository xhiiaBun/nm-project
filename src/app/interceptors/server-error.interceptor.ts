import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { inject } from '@angular/core';

export const serverErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const _router = inject(Router)
  return next(req).pipe(catchError(error => {
    console.log('Error!! ', error);
    _router.navigate(['/error']);
    throw error;
  }  )) ;
};
