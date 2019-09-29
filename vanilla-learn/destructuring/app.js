//It is important for modular javascript and React

    //Destructuring assignment
    let a, b;
    [a,b] = [100, 200]; //first value from array will be assigned to first variable and the second value to second variable

    console.log(`Value of a is: ${a}`); //100
    console.log(`Value of b is: ${b}`); //200

    //rest pattern
        //If we have more values then variables rest of them will not be assigned. We can however use spread operator (...) and rest in order to gather rest of them to this variable
    [a, b, ...rest] = [100, 200, 300, 400];

    console.log(`Value of a is: ${a}`); //100
    console.log(`Value of b is: ${b}`); //200
    console.log(`Value of rest is: ${rest}`); //300, 400

    //Example of spread operator. 
    const testArray = ['john', 'mike', 'marco'];
    console.log(...testArray);

    //Destructuring a object
        //Those will be paired by key value!
    ({a, b, ...rest} = {a: 100, b: 200, c: 300, d:400})

    console.log(`Value of a object is: ${a}`); //100
    console.log(`Value of b object is: ${b}`); //200
    console.log(`Value of rest object is: ${Object.keys(rest)}`); //c and d keys will be assiagned tot his object
    console.log(`Value of rest object is: ${rest}`)



    //Array destructuring - in practice
    const people = ['John', 'Beth', 'Mike' ];
    //Those values will be assigned to those variables in order
    const [person1, person2, person3] = people;
    console.log(person1);

    //Parse array returned from function
    function getPeople(){
        return ['John', 'Beth', 'Mike' ];
    }

    let person5, person6, person7;
    [person5, person6, person7] = getPeople();
    console.log(person7);

    //Object destructuring
    const personObject = {
        name: 'John Doe',
        age: 32,
        city: 'Detroit',
        gender: 'Male',
        sayHello: function(){
            console.log('Hello')
        }
    }

    //Old ES5 way
    // const name = personObject.name,
    //       age = personObject.age,
    //       city = personObject.city
    // console.log(name)

    //New ES6 Destructuring
    const {name, age, city, sayHello} = personObject; //this will create variables that use same names as the object keys
    console.log(name, age, city)

    //This will also work with functions
    sayHello()


