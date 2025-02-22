export class Student {

    id: number;
    
    firstName: string;
    
    lastName: string;
    
    phone: number;
    
    address: string; // Note the correct spelling
    
    averageMarks: number;
    
    
    constructor(id: number, firstName: string, lastName: string, phone: number, address: string, averageMarks: number) {
    
    this.id = id;
    
    this.firstName = firstName;
    
    this.lastName = lastName;
    
    this.phone = phone;
    
    this.address = address; // Note the correct spelling
    
    this.averageMarks = averageMarks;
    
    }
    
    }