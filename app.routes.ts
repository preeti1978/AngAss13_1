//This is the main configuration file for routing
import {RouterModule,Route} from '@angular/router'; //importing these modules for use in this file
import {HomeComponent} from './home/home.component'; //we create 3 new components: Home, Contact, About
import {AboutComponent} from './about/about.component'; //importing all the components
import {ContactComponent} from './contact/contact.component';

//define the array for routinh. On clicking URL pattern /home, the Home Component should be loaded etc...
const routes:Route[]=[
	{path:"",component:HomeComponent},//if path is empty, then load HomeComponent
	{path:"home", component:HomeComponent},//if path is /home then also load HomeComponent
	{path:"about",component:AboutComponent},//if path is /about then load AboutComponnet
	{path:"contact",component:ContactComponent} //if path is contact then load ContactComponent
    ]

//passing this routes arry as paramatere ti forRoot() function of RouterModule
export const RoutesProvider = RouterModule.forRoot(routes);