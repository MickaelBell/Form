import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  buttonSubmit(){
  //  if(myForm.submitted && userMail.valid && userPwd.valid){alert('Submit done');}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
