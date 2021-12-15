export class Product {

  id:string
  name:string
  imgPath:string
  description: string
  value: number
  quantity?: number

  constructor(id:string,name:string, imgPath:string, description:string, value:number){
    this.id = id
    this.name = name
    this.imgPath = imgPath
    this.description = description
    this.value = value
  }

}
