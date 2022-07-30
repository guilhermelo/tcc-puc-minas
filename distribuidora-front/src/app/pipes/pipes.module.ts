import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrderStatePipe } from "./order-state.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [OrderStatePipe],
  exports: [OrderStatePipe]

})
export class PipesModule {

}
