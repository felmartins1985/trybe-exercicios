class Cliente{
  private _nome: string;
  constructor (nome:string){
    this._nome = nome;
  }

}
class ItemPedido{
  private _nomePedido: string;
  private _preco: number;
  constructor (nomePedido:string, preco:number){
    this._nomePedido = nomePedido;
    this._preco = preco;
  }
  get preco(){return this._preco}
  set preco(newPrice: number){
    if (newPrice< 0){
      throw new Error('Preço inválido');
    }
    this._preco = newPrice;
  }
}

class Pedido{
  private _cliente:Cliente;
  private _itens: ItemPedido[];
  private _pagamento: string;
  private _desconto: number;
  constructor(cliente:Cliente, itens:ItemPedido[], pagamento:string, desconto:number) {
    this._cliente = cliente;
    this._itens = itens;
    this._pagamento = pagamento;
    this._desconto = 0;
  }
  get desconto(): number { 
    return this._desconto; 
  }
  set desconto(newDesconto:number) {
    if(newDesconto<0 || newDesconto>1){
      throw new Error('Desconto inválido');
    }
    this._desconto = newDesconto;
  }
  somaPedido(): number{
    const soma = this._itens.reduce((a,b) => a+b.preco,0);
    return soma;
  }

  somaPedidoDesconto(): number{
    return this.somaPedido()*(1-this.desconto);
  }
}


