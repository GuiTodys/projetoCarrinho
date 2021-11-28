export class deliveryInformation{

  street:string;
  number:number;
  city:string;
  buyerName:string;
  phone:number;
  email:string;

  constructor(street:string, number:number, city:string, buyerName:string, phone:number, email:string){
    this.street = street
    this.number = number
    this.city = city
    this.buyerName = buyerName
    this.phone = phone
    this.email = email
  }
}
