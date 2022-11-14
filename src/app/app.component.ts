import { Component } from '@angular/core';
import { Todo } from './Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<ejs-grid [dataSource]='data'> </ejs-grid>`,
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'cwh-todo-list';
  //public data:Todo[]
  constructor(){
  //   setTimeout(() => {
  //     this.title = "Changed title";
  // }, 2000);
  
  }
}
