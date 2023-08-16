// 1
var hello;
console.log(hello);                                   
 hello = 'world';                                 

// undefined

// 2
var needle ;
needle = 'haystack';
test();
function test(){
    var needle ;
    needle = 'magnet';
    console.log(needle);
}

// magnet

// 3

var brendan ;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// super cool


// 4
var food ;
food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    food = 'gone';  
}

// chicken
// half-chicken

// 5

mean();
console.log(food);
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
     food = "fish";
    console.log(food);
}
console.log(food);

// 6

var genre;
console.log(genre);
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
genre = "disco";
console.log(genre);

// undefined
// rock
// r&b
// disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// san jose
// seattle
// burbank
// san jose

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Nothing changes













