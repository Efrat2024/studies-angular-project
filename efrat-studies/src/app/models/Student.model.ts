export class Student {
    id: number;
    firstName!: string;
    lastName!: string;
    phone!: number; // Using `!` to indicate that 'phone' must be defined later.
    address!: string; 
    averageMarks!: number;
    livingDate!: Date;
    active!: boolean;
    job!: Jobs;
    year!: Years;
    absences: { startDate: Date; days: number }[] = []; // Added absences property
    grades: number[] = []; // Added grades property

    constructor(
        id: number, 
        firstName: string = '', // Default value
        lastName: string = '',
        phone: number = 0, // Default to null
        address: string = '',
        averageMarks: number = 0,
        livingDate: Date = new Date(), // Use current date as default
        active: boolean = true, // Default value
        absences: { startDate: Date; days: number }[] = [], // Added absences parameter
        grades: number[] = [] // Added grades parameter
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address; 
        this.averageMarks = averageMarks;
        this.livingDate = livingDate; // Use passed in date
        this.active = active;
        this.year = Years.FIRST;
        this.absences = absences; // Initialize absences in the constructor
        this.grades = grades; // Initialize grades in the constructor
    }
}
export enum Jobs{
    COMPUTER="computer",
    TICHER="ticher",
    GRAPHIC="grafic"
}
export enum Years{
    FIRST="year 1",
    SECOND="yaer 2",
    LAST="year 3"
}
export enum StudiesDays{
    FIRST=100,
    SECOND=200,
    LAST=300
}