import http = require('http');

class Startup {
    public static main(): number {
        console.log("Hello WorasaaasadDd");
        return 0;
    }
}

interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}


class Book implements IBook {
    title: string;
    author: string;
    published: Date;
    pages: number;

}

let book = new Book();


interface MyFunc {
    (str1:string, str2:string, str3:string): Array<string>
}

let myFuncNormal: MyFunc = function(str1:string, str2:string, str3:string): Array<string> {
    return [str1, str2, str3];
}

let myFuncUpper: MyFunc = function(str1:string, str2:string, str3:string): Array<string> {
    return [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
}

let f2 = function logger(f1: MyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["a", "b", "c"];
    console.log(f1(a,b,c));
}

f2(myFuncNormal);
f2(myFuncUpper);









Startup.main();
