import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<any> = new Subject<any>();
  forbidden: boolean = false;
  isFormAdmin: boolean = false;
  users: any = [];
  forms: any = [];

  constructor(private activatedRoute: ActivatedRoute,) {}

  ngOnInit(): void {
    this.activatedRoute.data
    .pipe(
      takeUntil(this.unsubscribeAll)
    )
    .subscribe({
      next: (response) => {
        this.isFormAdmin = response['initial'][0];
        this.users = response['initial'][0];
        this.forms = response['initial'][0];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  // async init(): Promise<any> {
  //   try {
  //     const isFormAdmin = await lastValueFrom(this.formsService.isFormAdmin());

  //     if(!isFormAdmin) {
  //       this.forbidden = true;
  //       this.loading = false;
  //       return;
  //     }
  //   } catch (error: any) {
  //     if(error.status === 403) {
  //       this.forbidden = true;
  //     }

  //     this.loading = false;
  //     return;
  //   }

  //   try {
  //     this.users = await lastValueFrom(this.formsService.findAllUsers());
  //   } catch (error) {
  //     this.loading = false;
  //     return;
  //   }

  //   try {
  //     this.forms = await lastValueFrom(this.formsService.findAllForms());
  //   } catch (error) {
  //     this.loading = false;
  //     return;
  //   }

  //   this.loading = false;
  // }
}
