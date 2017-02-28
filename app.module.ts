import {BrowserModule} from '@angular/platform-brwoser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from '.contact/contact.component';

import {RoutesProvider} from './app.routes';

@NgModule({
  declarations: [
     AppComponent,
     HeaderComponent,
     HomeComponent,
     AboutComponent,
     ContactComponent
   ],
    imports:[
      BrowserModule,
      FormsModule,
      HttpModule,
      RoutesProvider //mentining it here for import
    ],
    providers: [],
    bootstrap:[AppComponent]
})
export class AppModule{}