import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FbservisService } from 'src/app/services/fbservis.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fbServis:FileUploadService,public htoast:HotToastService,public router:Router) { }

  ngOnInit() {
  }
  OturumAc(mail: string, parola: string) {
    this.fbServis.OturumAc(mail, parola)
      .pipe(
        this.htoast.observe({
          success: 'Oturum Açıldı',
          loading: 'Oturum Açılıyor...',
          error: ({ message }) => `${message}`
        })
      )
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
  OturumAcGoogle(){
    
  }
}
