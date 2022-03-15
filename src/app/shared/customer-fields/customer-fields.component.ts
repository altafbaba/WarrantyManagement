import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/core/customer/customer.service';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-customer-fields',
  templateUrl: './customer-fields.component.html',
  styleUrls: ['./customer-fields.component.scss'],
})
export class CustomerFieldsComponent implements OnInit {
  data: any[] = [];
  filteredOptions: Observable<any[]> | undefined;
  customergroup: FormGroup = new FormGroup({
    name: new FormControl('abcdef', [Validators.required]),
    address: new FormControl('abcdefghig', [Validators.required]),
    email: new FormControl('a@a.com', [Validators.email]),
    contactNo: new FormControl('1234567809', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    state: new FormControl('gujarat', [Validators.required]),
    city: new FormControl('ahmedabad', [Validators.required]),
    pincode: new FormControl('123456', [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
    ]),
  });

  constructor(private _getcustomer: CustomerService) {}

  ngOnInit(): void {
    this.filteredOptions = this.customergroup.get('name')?.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value);
      })
    );

    //get Coustomer data form API
    this._getcustomer.getCustomers().subscribe((Response: any) => {
      this.data = Response.data;
    });
  }
  private _filter(value: any): any[] {
    if (typeof value == 'object') {
      //all input auto file
      this.customergroup.patchValue(value);

      const filterValue = value.name.toLowerCase();
      return this.data.filter((option: any) =>
        option.name.toLowerCase().includes(filterValue)
      );
    } else {
      const filterValue = value.toLowerCase();

      return this.data.filter((Option: any) =>
        Option.name.toLowerCase().includes(filterValue)
      );
    }
  }
  //autofiled
  displayFn(value: any) {
    if (typeof value == 'object') {
      //all input auto file
      return value.name;
    } else return value.toLowerCase();
  }
}
