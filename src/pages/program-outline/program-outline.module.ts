import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramOutlinePage } from './program-outline';

@NgModule({
  declarations: [
    ProgramOutlinePage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramOutlinePage),
  ],
})
export class ProgramOutlinePageModule {}
