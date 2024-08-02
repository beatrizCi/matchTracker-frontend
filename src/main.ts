import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {  provideAnimations } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([]),
      provideHttpClient(),
      provideAnimations(),
      { provide: MatFormFieldModule },
      { provide: MatInputModule },
      { provide: MatDatepickerModule },
      { provide: MatNativeDateModule },
      { provide: MatButtonModule },
      { provide: MatTableModule },
      { provide: FormsModule },
      { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    ]
}).catch(err => console.error(err));

