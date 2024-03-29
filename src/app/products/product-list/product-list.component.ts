import { Component, inject } from '@angular/core'
import { Product } from '../../models/product.interface'
import { CommonModule } from '@angular/common'
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title: string = 'Products'
  selectedProduct: Product | undefined

  private router = inject(Router)

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

  //products: Product[];

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
    this.router.navigateByUrl('/products/' + product.id)
  }

}
