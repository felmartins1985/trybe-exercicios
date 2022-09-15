class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[]
  private _connectedTo?:string;

  constructor(b: string, s: number, r: string, c: string[], ct?:string) {

    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = ct;
  }

  turnOn() {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
available connections: ${this._connections}`,
    );
  }
  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(value: string|undefined) {
    if(!value||this._connections.includes(value)){
      this._connectedTo = value;
    }
    else{
      console.log('Sorry, connection unavailable!')
    }
  }
}

const tv1 = new Tv('Philco', 34, 'Full HD',[ 'HDMI', 'USB', 'VGA', 'AV' ]);
tv1.turnOn();
tv1.connectedTo='HDMI';
console.log('Connected to:', tv1.connectedTo);

