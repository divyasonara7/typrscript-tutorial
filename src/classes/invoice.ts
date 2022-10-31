import { HasFormatter } from '../interfaces/HasFormatters'
export class Invoice implements HasFormatter{
    constructor(
        readonly client : String,
        private details: String,
        public amount: number,
    ){}

    format(){
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}