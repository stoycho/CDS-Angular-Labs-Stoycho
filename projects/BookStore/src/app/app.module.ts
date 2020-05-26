import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookHeaderComponent } from './book-header/book-header.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BookHeaderComponent,
    TestComponentComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
