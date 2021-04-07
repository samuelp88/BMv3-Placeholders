const rp = require('./bmplaceholders');

const errorMessages = require("./errorMessages.json")
/*
///////// errorMessages.json ///////////
{
    "error": "Então cara {error1}",
    "sucess": "Acho que {sucess}",
    "wtf": "É {error2}"
}
////////////////////////////////////
*/

const values = {
    error1: 'deu quase tudo errado',
    error2: 'deu tudo errado',
    sucess: 'deu tudo certo'
}

const messages = rp(errorMessages, values);
console.log(messages)  /*
{
  error: 'Então cara deu quase tudo errado',
  sucess: 'Acho que deu tudo certo',
  wtf: 'É deu tudo errado'
}
*/


