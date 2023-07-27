import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SidePanelComponent, MainPanelComponent],
  exports: [SidePanelComponent, MainPanelComponent],
})
export class FeatureModule {}
