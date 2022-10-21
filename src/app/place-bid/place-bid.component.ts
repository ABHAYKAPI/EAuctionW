import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../_services/buyer.service';
import {  
  Route,
  Router  
} from '@angular/router';  
import {  
  NgForm,  
  FormBuilder,  
  FormGroup,  
  Validators,  
  FormControl  
} from '@angular/forms';  
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {

 
  bidDetails:BidDetails;
  bidDetailsForm: FormGroup;  
    title: string = "Create";  
    employeeId: number;  
    errorMessage: any; 
    public categoryTypes;
    enumKeys=[];
    
    public minDate: Date = new Date ("05/07/2022 2:00 AM");
    public maxDate: Date = new Date ("05/27/2025 11:00 AM");
    public dateValue: Date = new Date ("05/16/2022 5:00 AM");
    constructor(private _fb: FormBuilder,private _router :Router,public _buyerService:BuyerService) {  
        // if (this._avRoute.snapshot.params["employeeID"]) {  
        //     this.employeeId = this._avRoute.snapshot.params["employeeID"];  
        //     //alert(this.employeeId);  
        // }  
        
        this.bidDetailsForm = this._fb.group({  
            firstName: ['', [Validators.required]],  
            lastName: ['', [Validators.required]],  
            address: ['', [Validators.required]],  
            city: ['', [Validators.required]],  
            state: ['', [Validators.required]],  
            pin: ['', [Validators.required]],
            phone: ['', [Validators.required]],  
            email: ['', [Validators.required]],  
            product: ['', [Validators.required]],  
            bidAmount: ['', [Validators.required]],  
        }) ;

        this.categoryTypes = CategoryMapping;
        
    }  
    ngOnInit() {  
        if (this.employeeId > 0) {  
            this.title = "Edit";  
            //this._employeeService.getEmployeeById(this.employeeId).subscribe(resp => this.employeeForm.setValue(resp), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.bidDetailsForm.valid) {  
            return;  
        }  
        if 
        (this.title == "Create") 
        {  
debugger;

         this.bidDetails={

          "firstName":this.bidDetailsForm.value.firstName,
   "lastName":this.bidDetailsForm.value.lastName,
    "address":this.bidDetailsForm.value.address,
    "city":this.bidDetailsForm.value.city,
    "pin":this.bidDetailsForm.value.pin,
    "email":this.bidDetailsForm.value.email,
    "phone":this.bidDetailsForm.value.phone,
    "productID":this.bidDetailsForm.value.productID,
    "bidAmount":this.bidDetailsForm.value.bidAmount,
    "createdBy":"system"

           
         }


            this._buyerService.saveProduct(this.bidDetails).subscribe((data) => {  
                this._router.navigate(['/home']);  
            }, error => this.errorMessage = error)  
        // } else if (this.title == "Edit") {  
        //     this._employeeService.updateEmployee(this.employeeForm.value).subscribe((data) => {  
        //         this._router.navigate(['/employee-data']);  
        //     }, error => this.errorMessage = error)  
         }  
    }  
    cancel() {  
       // this._router.navigate(['/employee-data']);  
    }  
    get firstName() {  
        return this.bidDetailsForm.get('firstName');  
    }  
    get lastName() {  
        return this.bidDetailsForm.get('lastName');  
    }  
    get title1() {  
        return this.bidDetailsForm.get('title');  
    }  
    get city() {  
        return this.bidDetailsForm.get('city');  
    }  
    get region() {  
        return this.bidDetailsForm.get('region');  
    }  
    get postalCode() {  
        return this.bidDetailsForm.get('postalCode');  
    }  
    get country() {  
        return this.bidDetailsForm.get('country');  
    }  
    get notes() {  
        return this.bidDetailsForm.get('notes');  
    }  
    get titleOfCourtesy() {  
        return this.bidDetailsForm.get('titleOfCourtesy');  
    }  
    get birthDate() {  
        return this.bidDetailsForm.get('birthDate');  
    }  
    get hireDate() {  
        return this.bidDetailsForm.get('hireDate');  
    }  
    get address() {  
        return this.bidDetailsForm.get('address');  
    }  
    get homePhone() {  
        return this.bidDetailsForm.get('homePhone');  
    }  
    get extension() {  
        return this.bidDetailsForm.get('extension');  
    }  
    get photo() {  
        return this.bidDetailsForm.get('photo');  
    }  
    get reportsTo() {  
        return this.bidDetailsForm.get('reportsTo');  
    }  
    get photoPath() {  
        return this.bidDetailsForm.get('photoPath');  
    }  
    get salary() {  
        return this.bidDetailsForm.get('salary');  
    }  
    get reportsToNavigation() {  
        return this.bidDetailsForm.get('reportsToNavigation');  
    }  
    get employeeTerritories() {  
        return this.bidDetailsForm.get('employeeTerritories');  
    }  
    get inverseReportsToNavigation() {  
        return this.bidDetailsForm.get('inverseReportsToNavigation');  
    }  

}

export const CategoryMapping = [
    { value: "Painting", type: 'Painting' },
    { value: "Sculptor", type: 'Sculptor'},
    { value: "Ornament", type: 'Ornament'}]
  ;


export class BidDetails{
   firstName :string;
   lastName :string;
    address :string;
    city :string;
    pin :string;
    phone:string;
    email :string;
    productID:string;
    bidAmount:string;
    createdBy:string;
}

