// module pattern does exist in native es6 but is still porly supported - would require webpack and babel

    //Basic structure
        //It uses IIFE
    // (function(){
    //     //Declare private veriables and functions

    //     return {
    //         //Declare public variables and functions
    //     }
    // })();

    //STANDARD MODULE PATTERN
    const UIController = (function(){
        //Both of those cannot be accessed outside of the IFFE
            //Private variable
            let text = 'Hello World';

            //Private function
            const changeText = function(){
                const element = document.querySelector('h1');
                element.textContent = text;
            }

        //Returns a object that will be accessible in the variable 
        return {
            //Public function
            callChangeText: function(){
                changeText();
                
            },
            //Public variable
            callVariable: text
        }
    })();

    //Init the
    UIController.callChangeText()
    console.log(UIController.callVariable)


    //REVEALING MODULE PATTERN
        //Same idea as standard module pattern, but we create functions in the provate part and reveal them by mapping

    const ItemController = (function(){
        //Often variables that are private will be called with underscore
        let _data = [];

        function add(item){
            _data.push(item);
            console.log('Item Added...');
        }

        function get(id){
            return _data.find(item => {
                return item.id === id;
            })
        }

        //Those functions are revealed
        return {
            add: add,
            get: get
        }
    })();

    ItemController.add({id:1, name: 'John'})
    console.log(ItemController.get(1))