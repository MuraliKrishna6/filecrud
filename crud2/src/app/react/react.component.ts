import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  registerForm: FormGroup;
  url: string | ArrayBuffer;
  fileData:File=null;
  constructor(private formBuilder: FormBuilder) { }
  
  defaultCities = ["Mohali", "Amritsar","hyderabad","ahmadabad"];
  demo=false;
  ngOnInit(): void {
    this.registerdatials();
   
  }

  registerdatials(){
   this.registerForm=this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    gender:['',Validators.required],
    country:['',Validators.required],
    file:['',Validators.required], 
    datepost:['',Validators.required]
  })
  }

  imgdata(event){
  
     
  if(event.target.files && event.target.files[0]){

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload=(event)=>{
      this.url=reader.result
      this.demo=true  
      
      this.registerForm.patchValue({
        file: reader.result
     });
   
    }
 
  }

  }

  

  onSubmit(y){
  console.log("rgisterform values",y);
  }


}
