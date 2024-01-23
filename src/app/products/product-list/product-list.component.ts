import { Component, inject } from '@angular/core'
import { Product } from '../../models/product.interface'
import { CommonModule } from '@angular/common'
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title: string = 'Products'
  selectedProduct: Product | undefined

  // Pagination
  pageSize = 5
  start = 0
  end = this.pageSize
  pageNumber = 1

  previousPage(): void {
    this.start -= this.pageSize
    this.end -= this.pageSize
    this.pageNumber--
    this.selectedProduct = undefined
  }

  nextPage(): void {
    this.start += this.pageSize
    this.end += this.pageSize
    this.pageNumber++
    this.selectedProduct = undefined
  }

  private productService = inject(ProductService);
  products$: Observable<Product[]> = this.productService.products$;

  products: Product[];

  constructor() {
    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     result => this.products = result
    //   )
  }

  onSelect(product: Product) {
    this.selectedProduct = product
  }

}
