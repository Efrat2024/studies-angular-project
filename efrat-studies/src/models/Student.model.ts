export class Student {
    id: number;
    firstName: string;
    lastName: string;
    phone!: number; // Using `!` to indicate that 'phone' must be defined later.
    address: string; 
    averageMarks: number;
    livingDate: Date;
    active:boolean;

    constructor(
        id: number = 1, // Default value
        firstName: string = '',
        lastName: string = '',
        phone: number  = -1,
        address: string = '',
        averageMarks: number = 0,
        livingDate: Date = new Date(),
        active:boolean=false
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address; 
        this.averageMarks = averageMarks;
        this.livingDate = livingDate; // Use passed in date
        this.active=active
    }
}