import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureModule } from '../feature/feature.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule, FeatureModule],
  declarations: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
