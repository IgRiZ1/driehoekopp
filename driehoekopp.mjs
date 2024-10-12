
import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});





function oppervlakteDriehoek(basis, hoogte){
    let oppervlakte = basis * hoogte / 2;
    return oppervlakte

}

console.log(oppervlakteDriehoek(5,10));
