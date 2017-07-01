import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from    './schedule/schedule.component';

import { routing } from './app.routing';


// tslint:disable-next-line:import-destructuring-spacing
import { MenubarModule, DialogModule, CalendarModule, CheckboxModule} from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// ---- Providers ----
import { ApiService } from './shared';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
// -----Models -------


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    routing,
    MenubarModule,
    DialogModule,
    CalendarModule,
    CheckboxModule,
    ScheduleModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
