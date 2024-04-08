  export interface ITrip {
      id?: string;
      isBooked?:number,
      busHouseId: string|number;
      startTime: string;
      seats: number;
      price: number;
      fromStation: string;
      toStation: string;
      busHouse?: IBusHouse; 
      
      name?: string,
      address?: string,
      phone?: string
    }
    
    export interface IBusHouse {
      id: number;
      name: string;
      address: string;
      phone: string;
    }
    