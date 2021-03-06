import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm:NgForm | undefined;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Congrats, form submitted');
    console.log(this.addPropertyForm);
  }

}
function viewChild(Form: any) {
  throw new Error('Function not implemented.');
}

function Form(Form: any) {
  throw new Error('Function not implemented.');
}

