import { Component, inject } from '@angular/core'
import { Product } from '../../models/product.interface'
import { CommonModule } from '@angular/common'
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title: string = 'Products'
  selectedProduct: Product

  private productService = inject(ProductService);
  products: Product[];

  constructor() {
    this
      .productService
      .products$
      .subscribe(
        result => this.products = result
      )
  }

  onSelect(product: Product) {
    this.selectedProduct = product
  }

}
