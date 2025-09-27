import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ApiService } from '../_service&interceptors/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../_service&interceptors/auth.service';

@Component({
  selector: 'app-add-cost',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, MaterialModule],
  templateUrl: './add-cost.component.html',
  styleUrl: './add-cost.component.scss'
})
export class AddCostComponent {
  addCost: FormGroup;
  isSubmitted: boolean= false;
  costData: any;

  constructor( 
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    this.createForm()
  }

  createForm() {
    this.addCost = this.formBuilder.group({
      Description: ["", Validators.compose([Validators.required])],
      Category: ["", Validators.compose([Validators.required])],
      PaymentDate: [new Date(), Validators.compose([Validators.required])],
      PaymentMethod: ["", Validators.compose([Validators.required])],
      PaymentStatus: ["", Validators.compose([Validators.required])],
      PaymentType: ["", Validators.compose([Validators.required])],
      PaymentAmount: ["", Validators.compose([Validators.required])],
      PaymentCurrency: ["", Validators.compose([Validators.required])]
    })
    console.log(this.addCost.valid);
  }

  async submitAddCost() {
    console.log(this.addCost);
    let params = {
      description: this.addCost.value.Description,
      category: this.addCost.value.Category,
      payment_date: this.addCost.value.PaymentDate,
      payment_method: this.addCost.value.PaymentMethod,
      payment_status: this.addCost.value.PaymentStatus,
      payment_type: this.addCost.value.PaymentType,
      payment_amount: this.addCost.value.PaymentAmount,
      payment_currency: this.addCost.value.PaymentCurrency
    }

    let result = await this.apiService.addCost(params);
    if(result?.success) {
      this.costData = {
        description: this.addCost.value.Description,
        category: this.addCost.value.Category,
        payment_date: this.addCost.value.PaymentDate,
        payment_method: this.addCost.value.PaymentMethod,
        payment_status: this.addCost.value.PaymentStatus,
        payment_type: this.addCost.value.PaymentType,
        payment_amount: this.addCost.value.PaymentAmount,
        payment_currency: this.addCost.value.PaymentCurrency
      }
      this.addCost.reset();
      this.isSubmitted = true;
      this.snackBar.open(result?.message, 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    } else {
      console.log('error', result);
      this.snackBar.open(result?.message, 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }

  }

  counter() {
    this.authService.counter()
  }
}
