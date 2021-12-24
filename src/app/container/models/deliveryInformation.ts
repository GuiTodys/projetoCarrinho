export class deliveryInformation{

  street:string;
  number:number;
  city:string;
  state:string;
  buyerName:string;
  phone:number;
  email:string;

  constructor(street:string, number:number, city:string, state:string, buyerName:string, phone:number, email:string){
    this.street = street
    this.number = number
    this.city = city
    this.state = state
    this.buyerName = buyerName
    this.phone = phone
    this.email = email
  }
}
