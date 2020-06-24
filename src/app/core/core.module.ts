import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import * as interceptors from './interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClarityModule],
  providers: [...interceptors.providers],
  exports: [ClarityModule],
})
export class CoreModule {}
