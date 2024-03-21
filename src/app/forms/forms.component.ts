import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { FormsService } from './forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  forbidden: boolean = false;
  users: any = [];
  forms: any = [];
  private _unsubscribe: Subject<void> = new Subject<void>();

  constructor(private formsService: FormsService) {}

  ngOnInit() {
    forkJoin({
      admin: this.formsService.isFormAdmin(),
      users: this.formsService.findAllUsers(),
      forms: this.formsService.findAllForms(),
    })
    .pipe(
      takeUntil(this._unsubscribe)
    )
    .subscribe({
      next: (response) => {
        this.users = response.users;
        this.forms = response.forms;
      },
      error: (error) => {
        this.loading = false;

        if (error.status === 403) {
          this.forbidden = true;
        }
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
