import { HasFormatter } from '../interfaces/HasFormatters'
export class Payment implements HasFormatter{
    constructor(
        readonly recipient : String,
        private details: String,
        public amount: number,
    ){}

    format(){
        return `${this.recipient} is owed ₹${this.amount} for ${this.details}`;
    }
}