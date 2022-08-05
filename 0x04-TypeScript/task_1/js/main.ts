//Teacher interface
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any;
};


// Directors interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Creating a teacher and director 
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);

const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

// Returns a Teacher's name in this format: J. Doe
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher('John', 'Doe'));

// Class description interface
interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Constructor description interface
interface classConstructor {
    new(firstName: string, lastName: string): classInterface;
}

// Creating class and constructor through interfaces 
class StudentClass implements classInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Creating instance of StudentClass
const studentClass: StudentClass = new StudentClass('Mariana', 'Quique');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());