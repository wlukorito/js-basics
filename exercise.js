//address object + function that displays properties and values

let address = {
    street: '1st Avenue',
    city: 'Eastleigh',
    zipcode: '00100'
};
showAddress(address);

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

//Factory Function
let address2 = createAddress('Kimathi', 'NBO', '20100');
console.log(address2);

function createAddress(street, city, zipcode){
    return {
        street,
        city,
        zipcode
    }
}

//Constructor Function
let address3 = new Address('Selasie', 'NBO', '00100');
let address4 = new Address('Selasie', 'NBO', '00100');
let address5 = address3;  //copies reference aka points to same memory as address3

console.log(address3);

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipcode = zipCode;
}


//Object Equality

console.log(areEqual(address3, address4)); //true
console.log(areSame(address3, address4));  //false
console.log(areSame(address3, address5));  //true

//true if values are the same
function areEqual(address1, address2){
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}
//true if the objects point to (reference) same memory location
function areSame(address1, address2){
    return address1 === address2;
}

//Blog post object

let blogPost = {
    title: 'Blog Post',
    author: 'Lukorito',
    body: 'Welcome to my Blog post Javascript Object',
    views: 12,
    comment: [
        {author: 'Stan', body: 'Awesome'},
        {author: 'Long', body: 'Cool'}
    ],
    isLive: true
};

console.log(blogPost);

//Blog post using constructor function
let bPost = new Post('Post', 'Luko', 'This is a blog post');
console.log(bPost);

function Post(title, author, body){
    this.title = title;
    this.author = author;
    this.body = body;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

//Price Range array of Objects

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPrice: 0, maxPrice: 10},
    {label: '$$', tooltip: 'Moderate', minPrice: 11, maxPrice: 20},
    {label: '$$$', tooltip: 'Expensive', minPrice: 21, maxPrice: 50}
];