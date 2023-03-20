import { Product } from './../../../../shared/models/product.model';
import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  listOfData: Product[] = [
    {
      id: 'c4b383a4-71d1-4b8d-9bfb-5bb5c5d5d5f5',
      name: 'Camiseta',
      marca: 'Nike',
      productByPrices: [
        {
          id: 'f4b39c20-72f1-4ec8-88b7-0a42af98307d',
          productId: 'c4b383a4-71d1-4b8d-9bfb-5bb5c5d5d5f5',
          color: 'Blanco',
          cost: 15,
        },
        {
          id: '66d9a99c-8588-476f-a6f5-6f0b6d13bce7',
          productId: 'c4b383a4-71d1-4b8d-9bfb-5bb5c5d5d5f5',
          color: 'Negro',
          cost: 20,
        },
      ],
    },
    {
      id: 'a0a12a9c-76d5-48bb-a2cc-5ab7a107d1fa',
      name: 'Pantalón',
      marca: 'Adidas',
      productByPrices: [
        {
          id: '98d6ca57-0fb7-4068-bd9d-1beef3a3c0b8',
          productId: 'a0a12a9c-76d5-48bb-a2cc-5ab7a107d1fa',
          color: 'Azul',
          cost: 25,
        },
        {
          id: 'f54b691f-6e8a-4f44-9d67-44a15bf8ba17',
          productId: 'a0a12a9c-76d5-48bb-a2cc-5ab7a107d1fa',
          color: 'Verde',
          cost: 30,
        },
      ],
    },
    {
      id: '8b0b846d-9c31-43dd-8df0-f6aa46d6d833',
      name: 'Zapatos',
      marca: 'Puma',
      productByPrices: [
        {
          id: '678ccab7-6672-4293-bf3b-ea2a5e5e5f5a',
          productId: '8b0b846d-9c31-43dd-8df0-f6aa46d6d833',
          color: 'Gris',
          cost: 50,
        },
        {
          id: 'a8a6f54c-d023-4b72-aaec-4961bb32f7f9',
          productId: '8b0b846d-9c31-43dd-8df0-f6aa46d6d833',
          color: 'Negro',
          cost: 60,
        },
      ],
    },
    {
      id: 'a08229d9-17f9-4ca3-b3c3-2edf6c7aa6a1',
      name: 'Pantalón',
      marca: 'Levis',
      productByPrices: [
        {
          id: 'b8d634dc-424d-46c7-9e2f-0fb33b293a36',
          productId: 'a08229d9-17f9-4ca3-b3c3-2edf6c7aa6a1',
          color: 'Negro',
          cost: 35,
        },
        {
          id: 'a80b67f2-9853-4f5f-9875-5b8a7c67d34c',
          productId: 'a08229d9-17f9-4ca3-b3c3-2edf6c7aa6a1',
          color: 'Azul',
          cost: 30,
        },
        {
          id: 'b3f74d6c-d29e-4eb8-bd09-fc747ae6de80',
          productId: 'a08229d9-17f9-4ca3-b3c3-2edf6c7aa6a1',
          color: 'Gris',
          cost: 32,
        },
      ],
    },
    {
      id: 'f51f8c7d-982d-46df-9ea9-5368d7d46112',
      name: 'Gorra',
      marca: 'Nike',
      productByPrices: [
        {
          id: 'ebf039d7-45c6-4965-8c2e-e7425f5bf5d5',
          productId: 'f51f8c7d-982d-46df-9ea9-5368d7d46112',
          color: 'Rojo',
          cost: 15,
        },
        {
          id: '4e4f9b02-b81d-4ad6-8e7f-bb25aef8137d',
          productId: 'f51f8c7d-982d-46df-9ea9-5368d7d46112',
          color: 'Negro',
          cost: 12,
        },
        {
          id: '102742c1-e2d2-45c2-a8df-9f93c59ec33a',
          productId: 'f51f8c7d-982d-46df-9ea9-5368d7d46112',
          color: 'Blanco',
          cost: 14,
        },
        {
          id: 'ce106e81-909f-4681-a880-8d7b26a6fbbc',
          productId: 'f51f8c7d-982d-46df-9ea9-5368d7d46112',
          color: 'Azul',
          cost: 13,
        },
      ],
    },
  ];
}
