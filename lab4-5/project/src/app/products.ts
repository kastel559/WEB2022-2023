export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string;
  category: string;
  like:number;
}

export const products = [
  {
    id: 1,
    name: 'MacBook air 13',
    price: 799,
    description: 'Macbook air 13',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    rating: 9.8,
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    category: "laptop",
    like: 0
  },
  {
    id: 2,
    name: 'iPhone 13',
    price: 699,
    description: 'iPhone 13 128gb',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    rating: 9.3,
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    category: "phone",
    like: 0
  },
  {
    id: 3,
    name: 'Airpods',
    price: 299,
    description: 'airpods',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h64/46637140475934/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg",
    rating: 9.5,
    link: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000",
    category: "Gadjets / Watches",
    like: 0
  },
  {
    id: 4,
    name: 'Apple watch',
    price: 449,
    description: 'apple watch',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
    rating: 9.5,
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000",
    category: "Gadjets / Watches",
    like: 0
  },
  {
    id: 5,
    name: 'iPhone 12',
    price: 499,
    description: 'iphone 12',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/h3d/33279115886622/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg",
    rating: 9.7,
    link: "https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000",
    category: "phone",
    like: 0
  },
  {
    id: 6,
    name: 'Apple TV',
    price: 199,
    description: 'apple TV',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/h83/34203218903070/apple-tv-4k-2021-32gb-cernyj-101542417-1-Container.jpg",
    rating: 9.5,
    link: "https://kaspi.kz/shop/p/apple-tv-32gb-4k-2021-101542417/?c=750000000",
    category: "Gadjets / Watches",
    like: 0
  },
  {
    id: 7,
    name: 'Macbook Pro 14',
    price: 799,
    description: 'macbook pro 14',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h93/47153374134302/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg",
    rating: 9.8,
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000",
    category: "laptop",
    like: 0
  },
  {
    id: 8,
    name: 'Macbook Pro 16',
    price: 1199,
    description: 'macbook pro 16',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/h20/47152963092510/apple-macbook-pro-16-mk193-seryj-102866164-1.jpg",
    rating: 9.5,
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-16-mk193-seryi-102866164/?c=750000000",
    category: "laptop",
    like: 0
  },
  {
    id: 9,
    name: 'Apple mouse',
    price: 299,
    description: 'apple mouse',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hde/hd7/48468771143710/apple-magic-mouse-3-belyj-103539318-1.jpg",
    rating: 9.3,
    link: "https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000",
    category: "Gadjets / Watches",
    like: 0
  },
  {
    id: 10,
    name: 'iMac',
    price: 299,
    description: 'iMac',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/hea/34185499344926/apple-imac-24-2021-24m182sux-mgtf3-serebristyj-101530799-1-Container.jpg",
    rating: 9.4,
    link: "https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000",
    category: "Gadjets / Watches",
    like: 0
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/