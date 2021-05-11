import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MatSelectModule } from '@angular/material/select';
import { StatsBoxComponent } from './components/statistics/stats-box/stats-box.component';
import { StatsTableComponent } from './components/statistics/stats-table/stats-table.component';
import { MapComponent } from './components/statistics/map/map.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { StatsGraphComponent } from './components/statistics/stats-graph/stats-graph.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { TypesComponent } from './components/symptoms/types/types.component';
import { PreventComponent } from './components/prevent/prevent.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    InfoBoxComponent,
    FooterComponent,
    StatisticsComponent,
    StatsBoxComponent,
    StatsTableComponent,
    MapComponent,
    ContactComponent,
    StatsGraphComponent,
    TutorialComponent,
    SymptomsComponent,
    TypesComponent,
    PreventComponent,
   
  ],
  imports: [
     BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    FormsModule,
    SimpleNotificationsModule.forRoot({position:['top', 'right']}),
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
