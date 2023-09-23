export interface Product {
  id : number ,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string ,
  amount ?: number ,
  rating ?: {
    rate ?: number ,
    count ?: number
  } ,

}
