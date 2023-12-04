import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionApplication } from 'src/app/model/connection-application.model';
import { ConnectionApplicationService } from 'src/app/services/connection-application.service';

@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css']
})
export class ApplicationUpdateComponent implements OnInit {

  user?: ConnectionApplication
  data: any

  constructor(private service: ConnectionApplicationService, private route: ActivatedRoute, private router : Router) { }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getApplicationById(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    applicantName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateApplication(this.user?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}