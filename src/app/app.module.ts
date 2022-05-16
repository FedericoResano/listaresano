import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    EstudiantesComponent,
    InicioComponent,
    ComentariosComponent,
    
    
  ],
  imports: [
    BrowserModule,
    MatIconModule, 
    MatSidenavModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component:InicioComponent},
      {path:'inicio', component: InicioComponent},
      {path:'estudiantes', component: EstudiantesComponent},
      {path:'comentarios', component: ComentariosComponent}

    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
