import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-add-cost',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, MaterialModule],
  templateUrl: './add-cost.component.html',
  styleUrl: './add-cost.component.scss'
})
export class AddCostComponent {
  addCost: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.addCost = this.formBuilder.group({
      Description: ["", Validators.compose([Validators.required])],
      Category: ["", Validators.compose([Validators.required])],
      Date: ["", Validators.compose([Validators.required])],
      PaymentMethod: ["", Validators.compose([Validators.required])],
      PaymentStatus: ["", Validators.compose([Validators.required])],
      PaymentType: ["", Validators.compose([Validators.required])],
      PaymentDate: ["", Validators.compose([Validators.required])],
      PaymentAmount: ["", Validators.compose([Validators.required])],
      PaymentCurrency: ["", Validators.compose([Validators.required])]
    })
  }
}
