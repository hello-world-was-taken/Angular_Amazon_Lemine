export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export const PRODUCTS: Product[] = [
    {id:1,name:'Yeezy',imageUrl:"https://cdn-images.farfetch-contents.com/16/97/46/20/16974620_33936615_1000.jpg",price:400,description:'description'},
    {id:2,name:'Nike',imageUrl:"https://cdn-images.farfetch-contents.com/13/80/01/87/13800187_21663043_1000.jpg",price:499,description:'description'},
    {id:3,name:'Adidas',imageUrl:"https://cdn-images.farfetch-contents.com/12/75/60/77/12756077_26912562_1000.jpg",price:1100,description:'description'},
    {id:0,name:'Yeezy',imageUrl:"https://cdn-images.farfetch-contents.com/16/65/80/90/16658090_32553873_1000.jpg",price:1100,description:'description'},
]