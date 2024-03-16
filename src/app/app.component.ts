import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  forbidden: boolean = false;
  users: any = [];
  forms: any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.init();
  }

  async init(): Promise<any> {
    try {
      const isFormAdmin = await lastValueFrom(this.appService.isFormAdmin());

      if(!isFormAdmin) {
        this.forbidden = true;
        this.loading = false;
        return;
      }
    } catch (error: any) {
      if(error.status === 403) {
        this.forbidden = true;
      }

      this.loading = false;
      return;
    }

    try {
      this.users = await lastValueFrom(this.appService.findAllUsers());
    } catch (error) {
      this.loading = false;
      return;
    }

    try {
      this.forms = await lastValueFrom(this.appService.findAllForms());
    } catch (error) {
      this.loading = false;
      return;
    }

    this.loading = false;
  }
}
