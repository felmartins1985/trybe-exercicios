// ./interfaces.ts

export interface IVehicleDrive{
  drive():void;
}

export interface IVehicleFly{
  fly():void;
}
export default interface  IVehicle extends IVehicleDrive, IVehicleFly{
}