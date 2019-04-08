//getters setters

const person = {
    firstName: 'John',
    lastName:   'Doe',
    //getter
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    //setter
    set fullName(nameString){
        const nameParts = nameString.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};

console.log(person);
console.log(person.fullName);
//set full name
person.fullName = 'Lukorito Wabomba';
console.log(person);