import { Product } from './../models/productInformation';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductInformationService {

  product1: Product = new Product('A-01','MEMÓRIA DDR4 XPG GAMMIX D20, 8GB', 'assets/images/memoria.jpg', 'A série GAMMIX D20 ostenta um dissipador de calor preto ou cinza intimidante que ofuscará seus pares mais chamativos.', 330)
  product2: Product = new Product('A-02','SSD Kingston A400, 120GB', 'assets/images/ssd.jpg', 'Rápida inicialização, carregamento e transferência de arquivos; Mais confiável e mais durável do que um disco rígido.', 140)
  product3: Product = new Product('A-03','Mouse Gamer Redragon Perdition 3', 'assets/images/mouse.jpg', 'Mouse Redragon Gamer Perdition 3 com 18 botões programáveis e DPI de 12.400. O design também ajuda a torná-lo o mouse n°1 para gamers de MMOs. ', 160)
  product4: Product = new Product('A-04','SSD Externo Portátil Hikvision T100I 480GB', 'assets/images/ssdPortatil.jpg', 'O Ssd Externo Hikvision Hs-Essd-T100I permite proteger os arquivos de grande tamanho armazenados no Pc ou salvar todo tipo de arquivos para levá-los a qualquer lugar.', 545)

  productList:Product[] = [this.product1,this.product2,this.product3, this.product4]

  constructor() { }

}
