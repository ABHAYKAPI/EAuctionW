import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:Product;
  employeeForm: FormGroup;  
    title: string = "Create";  
    employeeId: number;  
    errorMessage: any; 
    public categoryTypes;
    enumKeys=[];
    public products:any=[];
    
    public minDate: Date = new Date ("05/07/2022 2:00 AM");

    public maxDate: Date = new Date ("05/27/2025 11:00 AM");

    public dateValue: Date = new Date ("05/16/2022 5:00 AM");
    constructor(private _fb: FormBuilder,private _router :Router,public _productService:ProductService) {  
        // if (this._avRoute.snapshot.params["employeeID"]) {  
        //     this.employeeId = this._avRoute.snapshot.params["employeeID"];  
        //     //alert(this.employeeId);  
        // }  
        
        this.employeeForm = this._fb.group({  
            productName: ['', [Validators.required]],  
            shortDescription: ['', [Validators.required]],  
            detailDescription: ['', [Validators.required]],  
            category: ['', [Validators.required]],  
            startingPrice: ['', [Validators.required]],  
            bidEndDate: ['', [Validators.required]],  
        }) ;

        this.getProucts();

        this.categoryTypes = CategoryMapping;
        
    }  
    ngOnInit() {  
        if (this.employeeId > 0) {  
            this.title = "Edit";  
            //this._employeeService.getEmployeeById(this.employeeId).subscribe(resp => this.employeeForm.setValue(resp), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.employeeForm.valid) {  
            return;  
        }  
        if 
        (this.title == "Create") 
        {  
         this.product={
           "productName":this.employeeForm.value.productName,
           "shortDescription" : this.employeeForm.value.shortDescription,
           "detailDescription":this.employeeForm.value.detailDescription,
           "category" : this.employeeForm.value.category,
           "startingPrice" :5000.25,
           "bidEndDate" : this.employeeForm.value.bidEndDate,
           "createdBy":'System'
         }


            this._productService.saveProduct(this.product).subscribe((data) => {  
                this._router.navigate(['/mod']);  
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

    onDelete(PMId:string) {
      if (confirm('Are you sure to delete this record ?')) {
        this._productService.deletProduct(PMId)
          .subscribe(res => {
            this._router.navigate([this._router.url]);  
          },
          err => { console.log(err); })
      }
    }

   
    getProucts(){
      this._productService.getProduct().subscribe((response) => 
      {
        this.products= JSON.parse(response.data);
        
    }, error => this.errorMessage = error) 
    }

    get firstName() {  
        return this.employeeForm.get('firstName');  
    }  
    get lastName() {  
        return this.employeeForm.get('lastName');  
    }  
    get title1() {  
        return this.employeeForm.get('title');  
    }  
    get city() {  
        return this.employeeForm.get('city');  
    }  
    get region() {  
        return this.employeeForm.get('region');  
    }  
    get postalCode() {  
        return this.employeeForm.get('postalCode');  
    }  
    get country() {  
        return this.employeeForm.get('country');  
    }  
    get notes() {  
        return this.employeeForm.get('notes');  
    }  
    get titleOfCourtesy() {  
        return this.employeeForm.get('titleOfCourtesy');  
    }  
    get birthDate() {  
        return this.employeeForm.get('birthDate');  
    }  
    get hireDate() {  
        return this.employeeForm.get('hireDate');  
    }  
    get address() {  
        return this.employeeForm.get('address');  
    }  
    get homePhone() {  
        return this.employeeForm.get('homePhone');  
    }  
    get extension() {  
        return this.employeeForm.get('extension');  
    }  
    get photo() {  
        return this.employeeForm.get('photo');  
    }  
    get reportsTo() {  
        return this.employeeForm.get('reportsTo');  
    }  
    get photoPath() {  
        return this.employeeForm.get('photoPath');  
    }  
    get salary() {  
        return this.employeeForm.get('salary');  
    }  
    get reportsToNavigation() {  
        return this.employeeForm.get('reportsToNavigation');  
    }  
    get employeeTerritories() {  
        return this.employeeForm.get('employeeTerritories');  
    }  
    get inverseReportsToNavigation() {  
        return this.employeeForm.get('inverseReportsToNavigation');  
    }  

}

export const CategoryMapping = [
  { value: "Painting", type: 'Painting' },
  { value: "Sculptor", type: 'Sculptor'},
  { value: "Ornament", type: 'Ornament'},
];




export class Product{
 productName :string;
 shortDescription :string;
  detailDescription :string;
  category :string;
  startingPrice :number;
  bidEndDate:string;
  createdBy :string;
}
