import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

@NgModule({
  declarations: [MainComponent, MyAccountComponent, MyOrdersComponent, OrderDetailsComponent, NewOrderComponent],
  imports: [CommonModule, MainRoutingModule, CoreModule, ReactiveFormsModule],
})
export class MainModule {}
