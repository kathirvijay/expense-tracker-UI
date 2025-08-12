import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- FORM CONTROLS ---
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // For native Date objects with Datepicker
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// --- NAVIGATION ---
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// --- LAYOUT ---
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree'; // Often used with CDK Tree

// --- BUTTONS & INDICATORS ---
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core'; // For ripple effect on custom elements

// --- POPUPS & MODALS ---
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

// --- DATA TABLE ---
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// --- CDK Modules (often used with Material, but not directly Material components) ---
import { A11yModule } from '@angular/cdk/a11y'; // Accessibility utilities
import { CdkTableModule } from '@angular/cdk/table'; // CDK Table for custom table implementations
import { CdkTreeModule } from '@angular/cdk/tree'; // CDK Tree for custom tree implementations
import { DragDropModule } from '@angular/cdk/drag-drop'; // Drag and Drop functionality
import { PortalModule } from '@angular/cdk/portal'; // For attaching components to a portal
import { ScrollingModule } from '@angular/cdk/scrolling'; // Virtual Scrolling

const materialModules = [
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  // CDK Modules - only include if you are using their features
  A11yModule,
  CdkTableModule,
  CdkTreeModule,
  DragDropModule,
  PortalModule,
  ScrollingModule,
];

@NgModule({
  declarations: [], // No components, directives, or pipes are declared here
  imports: [
    CommonModule, // Required for ngIf, ngFor etc., even in a Material module
    ...materialModules // Use spread operator to add all modules from the array
  ],
  exports: [
    // Export all the modules you want to make available to other modules/components
    ...materialModules
  ]
})
export class MaterialModule { }