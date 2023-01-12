import { Component } from '@angular/core';
import { Uye } from './models/Uye';
import { Router } from '@angular/router';
import { FileUploadService } from './services/file-upload.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uye = this.fbServis.AktifUyeBilgi;

  user: any;
  constructor(public fbServis: FileUploadService,
    public router: Router) { }

  OturumKapat() {
    this.fbServis.OturumKapat().subscribe(() => {
      this.router.navigate(['login']);
    });
  }

}
