import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, forkJoin, Observable, of, Subject } from 'rxjs';
import { FormsService } from './forms.service';

@Injectable({
  providedIn: 'root'
})
export class FormsResolver implements Resolve<any> {
  constructor(private formsService: FormsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin([
      this.formsService.isFormAdmin(),
      this.formsService.findAllUsers().pipe(delay(2000)),
      this.formsService.findAllForms()
    ]);
  }
}
