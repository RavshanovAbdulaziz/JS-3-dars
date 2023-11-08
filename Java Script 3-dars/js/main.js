/* Data types in JS */

/*let arrayObject = [45,78, "JavaScript", "matn", true,false];*/
/*let oddiyObject ={ism:"Rustam",familya:"Murodov", yoshi: 15};*/
/*console.log(arrayObject[2]);*/
/*console.log(oddiyObject.ism);*/

/* Functons in JS*/

/*function savatchaniTekshir(){
    if (savatcha.length == 0){
        document.write("Savatchaning ichida " + savatcha.length + " dona malumot bor");
    }
    else {
        document.write("Savatchaning ishida " + savatcha.length + " ta ma'lumot bor")
    }
}
let savatcha = [12,"text",];
savatchaniTekshir()*/

/* Date in JS*/

let sana = new Date();

sana.setFullYear(year);


let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let realhafta = sana.getDay();
let vaqt = sana.getHours();
let soat = sana.getTime();
let minut = sana.getMinutes();
let seconds = sana.getSeconds();
let milesekond = sana.getMilliseconds();
let utc_yil = sana.getUTCFullYear();
let utc_oy = sana.getUTCMonth();
let utc_kun = sana.getUTCDate();
let utc_soat = sana.getUTCHours();
let utc_minut = sana.getUTCMinutes();
let utc_second = sana.getUTCSeconds();





let oylar = ["yanvar", "fevral", "mart","aprel","may", "iyun" ,"iyul", "avgust",
    "sentyabr", "oktyabr", "noyabr", "dekabr"];

let hafta = ["yakshanba","dushanba", "seshanba","chorshanba", "payshanba","juma",
    "shanba" ]

document.write(yil+" -yil "+ oylar[oy]+" oyining " +kun+"-kuni. Haftaning esa " + hafta[realhafta] + " kuni.");
document.write(yil+" -yil "+ oylar[oy]+" oyining " +kun+"-kuni. Haftaning esa " + hafta[realhafta] + " kuni.");











