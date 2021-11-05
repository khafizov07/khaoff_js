// let name = prompt('Ismingizni kiriting'),
//     age = +prompt('Yoshingizni kiriting'),
//     misol = ('misolni yeching')
//     let num1 = 15 + 13,
//         num2 = 15 - 13,
//         num3 =  29 * 2,
//         num4 = 81 / 9,
//         num5 = 23 + 45,
//         num6 = 41 * 4,
//         num7 = 73 - 23,
//         num8 = 21 * 2,
//         num9 = 79 / 12,
//         num10 = 123 - 63,
//         num11 = 12 / 23,
//         num12 = 63 + 9,
//         num13 = 12 - 2,
//         num14 = 122 * 9,
//         num15 = 243 + 34,
//         num16 = 54 / 2,
//         num17 = 12 + 9
        
//    let  misol1 = +prompt('15 + 13 ='),
//         misol2 = +prompt('15 - 13 ='),
//         misol3 = +prompt('29 * 2 ='),
//         misol4 =  +prompt('81 / 9 ='),
//         misol5 =  +prompt('23 + 45 ='),
//         misol6 =  +prompt('41 * 4 ='),
//         misol7 =  +prompt('73 - 23 ='),
//         misol8 =  +prompt('21 * 2 ='),
//         misol9 =  +prompt('79 / 12 ='),
//         misol10 =  +prompt('123 - 63 ='),
//         misol11 =  +prompt('12 / 23 ='),
//         misol12 =  +prompt('63 + 9 ='),
//         misol13=  +prompt('12 - 2 ='),
//         misol14=  +prompt('122 * 9 ='),
//         misol15=  +prompt('243 + 34 ='),
//         misol16=  +prompt('54 / 2 ='),
//         misol17=  +prompt('12 + 9 =')
    
//     alert('Colsole ga qarang')
        
//     console.log('Sizning ismingiz ' + name);
//     console.log('Siz ' + age + ' yoshdasiz');
//     console.log('Sizning javobingiz ' + misol1 + ': ' +'Javob: ' + num1)
//     console.log('Sizning javobingiz ' + misol2 + ': ' +'Javob: ' + num2)
//     console.log('Sizning javobingiz ' + misol3 + ': ' +'Javob: ' + num3)
//     console.log('Sizning javobingiz ' + misol4 + ': ' +'Javob: ' + num4)
//     console.log('Sizning javobingiz ' + misol5 + ': ' +'Javob: ' + num5)
//     console.log('Sizning javobingiz ' + misol6 + ': ' +'Javob: ' + num6)
//     console.log('Sizning javobingiz ' + misol7 + ': ' +'Javob: ' + num7)
//     console.log('Sizning javobingiz ' + misol8 + ': ' +'Javob: ' + num8)
//     console.log('Sizning javobingiz ' + misol9 + ': ' +'Javob: ' + num9)
//     console.log('Sizning javobingiz ' + misol10 + ': ' +'Javob: ' + num10)
//     console.log('Sizning javobingiz ' + misol11 + ': ' +'Javob: ' + num11)
//     console.log('Sizning javobingiz ' + misol12 + ': ' +'Javob: ' + num12)
//     console.log('Sizning javobingiz ' + misol13 + ': ' +'Javob: ' + num13)
//     console.log('Sizning javobingiz ' + misol14 + ': ' +'Javob: ' + num14)
//     console.log('Sizning javobingiz ' + misol15 + ': ' +'Javob: ' + num15)
//     console.log('Sizning javobingiz ' + misol16 + ': ' +'Javob: ' + num16)
//     console.log('Sizning javobingiz ' + misol17 + ': ' +'Javob: ' + num17)
    
    
    let mamarayimYosh = +prompt('Yoshingizni kiriting')
    
    
    if (mamarayimYosh <= 20 && mamarayimYosh > 0) {
        alert("O'qishingiz kerak")
    }else if (mamarayimYosh <= 50 && mamarayimYosh > 20){
        alert("Ishlashingiz kerak")
    } else if (mamarayimYosh <= 80 && mamarayimYosh > 50) {
        alert('Yaqinda nafaqaga chiqasiz')
    } else if (mamarayimYosh <= 100 && mamarayimYosh > 80) {
        alert('Pensionerga oxshaysiz, agar tirik bo`lsangiz')
    } else if (mamarayimYosh <=  150 && mamarayimYosh > 100) {
        alert("Insof bormi shunga ham yashaydimi odam")
    } else if (mamarayimYosh <= 200 && mamarayimYosh > 150) {
        alert("Hazillashma kazyolcha🤣🤬")
    } else if (mamarayimYosh <= Infinity && mamarayimYosh > 200) {
        alert("Xoz dadanga aytib beraman kazyolcha🤬")
    }
   