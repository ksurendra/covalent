import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
import { MarkdownNavigatorDemoBasicComponent } from './markdown-navigator-demo-basic.component';

@NgModule({
  declarations: [MarkdownNavigatorDemoBasicComponent],
  imports: [
    CovalentMarkdownNavigatorModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
  ],
  exports: [MarkdownNavigatorDemoBasicComponent],
})
export class MarkdownNavigatorDemoBasicSharedModule {}
