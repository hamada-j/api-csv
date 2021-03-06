export class Customer {
    _id: string | null;
    name: string;
    power: number;
    consumption: number;
    difference: number;
    city: string;
    bonus: boolean;
    constructor(pId: string, pName: string, pPower: number, pDifference: number, pConsumption: number, pCity: string, pBonus: boolean) {
        this._id = pId;
        this.name = pName;
        this.power = pPower;
        this.consumption = pConsumption;
        this.difference = pDifference;
        this.city = pCity;
        this.bonus = pBonus;
    }
}
