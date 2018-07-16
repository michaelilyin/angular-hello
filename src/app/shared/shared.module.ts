import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AlivenessPipe} from './pipes/aliveness.pipe';
import {EmptyPlaceholderPipe} from './pipes/empty-placeholder.pipe';

@NgModule({
  declarations: [
    AlivenessPipe,
    EmptyPlaceholderPipe
  ],
  exports: [
    AlivenessPipe,
    EmptyPlaceholderPipe
  ],
  imports: [
    FlexLayoutModule
  ]
})
export class SharedModule {
}
