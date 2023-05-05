// alert ('Последний фронтенд марафон')

/*
let value = true
alert (typeof value)
value = String(value)
alert (typeof value)
*/

// alert ('5' + '7')

/*
let str = '123'
alert (typeof str)
let num = Number(str)
alert (typeof num)
*/

/*
let age = Number()
alert (age)
alert (typeof age)
*/

// var timeInMs = Date.now();

/*
let time = Date.now()
alert (time)
*/


// let a = "Дратути!"
// let b = 'Робит шо цэ хениально'
// let c = `Можно добавить сюда переменную ${a}`
// let d = `Бла-бла-бла ${b}`
// alert (c)
// alert (d)


// let nam = 'Чудило Иваныч'
// alert (`Доброй день, ${nam}. Не желаете ${1 + 2} хандрид бакс?`)

// let trigger = 3 < 2
// alert (`3 < 2? Ответ: ${trigger}`)
// trigger = 5 > 2
// alert (`5 > 2? Ответ: ${trigger}`)

// alert ('Привет')


// let nameF = 'Alex', age = 25, man = true
// alert (nameF)

/* let user = 'Alex',
age = 19,
message = 'Hello'; */

// alert (message)

// let message = 'Hello'
// message = 'Goodbye'
// message = 'Nice'

// alert (message)

// let hello = 'Hello!'
// let message
// message = hello

// alert (message)


// let QwertTyu746748_$ в имена переменных разрешены буквы, цифры,
// символы $ и _
// Первый символ не должен быть цифрой

// let 56Hhh = 'Hello!'    Invalid or unexpected token - такая ошибка будет

// alert (56Hhh)

// num = 5 без 'use strict' можно объявить значение переменной таким образом
// alert (num)
// 'use strict'
// num = 5
// alert (num) в строгом режиме будет ошибка

// const myBirthday = '24.04.1994'
// myBirthday = 5 Assignment to constant variable
// Ошибка: "Присвоение значения постоянной переменной"

// alert (myBirthday) 



// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
/*
Широко используются константы для псевдонимов для трудно запоминаемых заранее известных значений. Обычно их имена записываются в верхнем регистре с ипользованием нижнего подчеркивания.
*/

// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

/* 
Другими словами, константы с именами, записанными заглавными буквами, используются только как псевдонимы для «жёстко закодированных» значений.
*/

// let num = 55

// alert (typeof num + ' привет!')




// #6 ПРЕОБРАЗОВАНИЕ ТИПОВ И БАЗОВЫЕ ОПЕРАТОРЫ

/*
let value = true
alert(typeof value) // должно получиться boolean

value = String(value) // теперь value стала строкой
alert(typeof value) // должно получиться string
*/

// alert("6"/"2") 
// дожно получиться 3, так как произошло численное преобразование строк "6" и "2" из-за использования математического оператора / (деление), что делает данную конструкцию кода математическим выражением

/*
let str = "123"
alert(typeof str) // получится string

let num = Number(str) // значение переменной num станет число 123
alert(typeof num) // получится number
*/

/*
let age = Number("Любая строка вместо числа")
alert(age) // NaN, так как строку не удалось явно преобразовать к числу
*/

/*
alert(Number(" 123 ")) // должно получиться 123
alert(Number("123z")) // NaN
alert(Number(true)) // 1
alert(Number(false)) // 0
*/

/*
alert(Boolean(1)) // true
alert(Boolean(0)) // false
alert(Boolean("Привет")) // true
alert(Boolean("")) // false 
*/

/*
alert(Boolean("0")) // true, так как любая не пустая строка всегда становится true
alert(Boolean(" ")) // true, так как любая строка всегда становится true, а пробел тоже также делает строку не пустой
*/

/*
let x = 1
x = -x
alert(x) // -1, так как изпользование унарного минуса (-) меняет знак числа на противоположный
*/

/*
let x = 1, y = 3
alert(y - x) // 2, так как использован бинарный минус, что приведет к вычитанию от значения левого операнда значения правовго операнда
*/

/*
alert(5 % 2) // 1, остаток целочисленного деления 5 на 2
alert(8 % 3) // 2, остаток целочисленного деления 8 на 3
*/

/*
alert(151 % 142) // 9, так как это будет являтся остатком от целочисленного деления 151 на 142

alert(2 ** 2) // 4 (2 умножено на себя 2 раза)
alert(2 ** 3) // 8 (2 умножено на себя 3 раза)
alert(2 ** 4) // 16 (2 умножено на себя 4 раза)
*/

/*
alert(121 ** (1/2)) // 11 (так как использование 1/2 это уже будет не возведение в степень, а взятие квадратного корня)
alert(8 ** (1/3)) // 5 (так как использование 1/3 это уже будет не возведение в степень, а взятие кубического корня)
*/

/*
let s = "моя" +  "строка"
alert(s) // моястрока
alert('1' + 2) // 12
alert(2 + '1') // 21 (в случае использования бинарного плюса (+), если один из операндов является строкой, то рядом стоящий операнд или результат вычисления нескольких соседних операндов, будет также приведён к строке путём конкатенации)
*/

/*
alert(2 + 2 + '1') // 41
alert('1' + 3 + '3' + 4 + 8) // 13348
alert(2 + 2 + 6 + '1' + 4 + 5) // 10145
// счёт идет слева направо.
*/


// alert(2 + 2 + 2 + 2 +'1' )

/*
alert (5 + '55' - 40) // слева направо, сработал бинарный плюс и преобразовал первые два операнда к сткроке и объединил их, минус бинарный выполнил вычитание преобразовав всё предыдущее к числу
*/

/*
let x = '4', y = 5, z = 0
x = +x // приведение к числу
alert (typeof x) // number
z = x + y
alert (z) // 9
alert (typeof z) // number
*/

/*
let x = 'Hello'
x = +x
alert (typeof x)
alert (x)
*/

/*
let a = '5'
let b = '7'
alert (+a + +b)
*/

/*
let n = 2;
n = n + 5;
n = n * 2;
alert (n)
*/

/*
let n = 2
n += 5
n *= 3
alert (n)
*/

/*
let n = 2
n *= 3 + 5 // сперва выполнится то, что справа от =
alert (n)
n = n * 3 + 5 // тоже, но значение будет 53, из-за приоритета * 
alert (n)
*/

/*
let a = 3
a++
alert (a)
*/

/*
let a = 5
let b = ++a
alert (b)
let c = 5
let d = c++
alert (d)
*/

/*
let counter = 0
let b = counter++
alert(b)
++counter
alert(counter)
*/

/*
let a = 0 // начнется отсчёт с 0 до 4, т.к. постфиксная форма начинат с 1
alert (a++)
alert (a++)
alert (a++)
alert (a++)
alert (a++)
*/

/*
let a = 0 // начнется отсчёт с 1 до 5, т.к. префиксная форма начинат с 0
alert (++a)
alert (++a)
alert (++a)
alert (++a)
alert (++a)
*/

/*
let a = 4
alert (3 * a++) // a = 4
alert (3 * a++) // a = 5
alert (3 * ++a) // a = 7 
*/

/*
let counter = 1
alert(2 * counter)
counter++
*/

/*
let a = (5 + 5, 7 + 7) // скобки важны, т.к. у ',' приоритет ниже чем у '=' 
alert (a)
*/




// #8 ОПЕРАТОРЫ СРАВНЕНИЯ

/*
alert (2 > 1)
alert (2 == 1)
alert (2 != 1)
*/

/*
let a = 5 < 15
alert (a)
*/

/*
let a = 'А' > 'а' // 'А' меньше 'а', т.к. сравнивается всё по кодировке Unicode, где 'а' имеет больший код во внутренней таблице кодирования
alert (a)
*/

/*
alert (true == 1)
*/




// #9 ВЕТВЛЕНИЕ


/*
let year = prompt ('Какой сегодня на дворе год?', '')
if (year == 2022) alert ('Верно!')
*/

/*
let year = prompt ('Какой сейчас год?', '')
if (year == 2022) {
    alert ('Всё верно!')
    alert ('Вы правильно поняли вопрос.')
}
*/


/*
let year = prompt ('Какой сейчас год?', '')
let condition = (year == 2022)
if (condition) {
    alert ('Всё верно!')
}
else {
    alert('Не верно!')
}
*/

/*
let year = +prompt ('Какой сейчас год?', '')
if (year == 2022) {
    alert ('Верно!')
} 
else if (year > 2022) {
    alert('Слишком поздно!')
}
else if (year < 2022) {
    alert('Слишком рано!')
}
*/

/*
let age = prompt ('Возраст совершеннолетия?', '')
age == 18 ? alert ('Верно!') : alert ('Неверно!')
*/

/*
let age = prompt ('Возраст', '18');
message =
(age < 0) ? 'Ясно..':
(age < 3) ? 'Привет карапуз!' :
(age <= 18) ? 'Привет!' :
(age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст...'
alert (message)
*/

/*
let question = prompt ('Какой официальное название у JavaScript?', '')
if (question == 'ECMAScript') {
    alert ('Верно!')
} else {
    alert ('Неверно!')
}
*/

/*
let number = prompt ('Введите число...', '')
if (number > 0) {
    alert (1)
} else if (number < 0) {
    alert (-1)
} else {
    alert (0)
}
*/

/*
let result = (a + b < 4) ? 'Мало' : 'Много'
*/

/*
let login
let message =
(login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : ''
*/


/* let x = '5'
x++
alert (x)
let y = x++
alert (y) */

/* let a = 0;
a++;
a++;
alert(a); // 2
a++;
a++;
a++;
a++;
alert(a); // 6
++a;
++a;
++a;
alert(a); */

/* let a = 0;
alert (a++); // 0
alert (a++); // 1
alert (a++); // 2
let c = a;
alert (c); // 3 */

/* let a = 0;
a++;
alert (a) // 1

let b = 0;
++b;
alert (b) // 1 */

/* let c = 0;
alert (c++); // 0
alert (c++); // 1
alert (c++); // 2
alert (c++); // 3
alert (c); // 4
*/


/* let c = 0;
alert (++c); // 1
alert (++c); // 2
alert (++c); // 3
alert (++c); // 4
alert (c); // 4 */

/* let a = 1;
let b = a++;
alert (a); // 2
alert (b); // 1, постфикс возвращает старое значение */

/* let a = 1;
let b = ++a;
alert (a); // 2
alert (b); // 2, префикс возвращает новое значение */

/* alert (" \t \n" - 2); // символы '\t' и '\n' обозначают "пустоту"
//трэш, я о них даже и не знал
// убирая косую черту или букву, alert не запускается
// по отдельности работают */

/* let a = +prompt ('Первое число?', 1);
let b = +prompt ('Второе число?', 2)
alert (a + b);
 */

/* let value = 3 || 5 || 6 || 7
alert (value) // 3, нашёл первое значение true и присваивает его переменной

let num = 0 || false || '' || 0 || false
alert (num) // false, если нет ни одного true, то возвращает последнее значение */


/* let x = 1
false || (x = 5) || 0 || false || '' || (x = 50) || (x = 40)
alert (x) // найден и присвоен переменной x первый true (x = 5) */

/* let x = 1
false || 0 || false || '' || (x = 50) || (x = 40)
alert (x) // найден и присвоен переменной x первый true (x = 50) */

/* let x = false || 0 || false || '' || 0
alert (x) // ни одного true, поэтому переменной x присвается последний false */

/* let x = 5 && 7 && 77 && false && 0 && 'строка'
alert (x) // нашёл и присвоил первый false (false) */

/* let x = 5 && 7 && 77 && 0 && false && 'строка'
alert (x) // нашёл и присвоил первый false (0) */

/* let x = 5 && 7 && 77 && 'строка'
alert (x) // ни одного false, поэтому переменной x присвается последний true */

/* let x = 5 && 7 && 77 && 'строка' && 999
alert (x) // ни одного false, поэтому переменной x присвается последний true */

/* alert (!true) // ! – оператор отрицания, сперва преобразование к логическому
// типу, затем возврат противоположного ему значения

alert (!55) // false */

/* alert (!false) // true

alert (!null) // true */

/* alert (!!NaN) // false
alert (!!0) // false
alert (!!'0') // true
alert (!!-5) // true 
alert (!!5) // true  */
// оператор '!!' приобразовывает значение к логическому типу

/* alert (Boolean(567)) // true
alert (Boolean(0)) // false */


/* alert (prompt ('Введите') || 5 || prompt ('Введите')) */
// если в prompt ничего не указать, он останется undefined
// 5 – первый true, который считался и присвоился, чтение завершено
// если в prompt указать что-либо, то его значение присвоется и отобразится
// alert'ом

/* alert (alert(101) && alert(2) && alert(3) && alert(4)) // 1, undefined

alert (alert(101) || alert(2) || alert(3) || null) // пречисление и null */

/* x = 2 && 7 && 5 && 4
alert(x) // так как всё true возвращает последний операнд (4)

y = 2 && 0 && 5 && 4
alert(y) // 0, так как это первый слева направо false */

// if (5 && 5) {alert('10')}


/* 
let user = prompt ('Кто там?')

if (user == 'Админ') {
    let password = prompt ('Пароль?')
    if (password == 'Я главный'){
        alert('Здравствуйте')
    }
    else if (password === null || password === '' ){
        alert('Отменено')
    }
    else {
        alert('Неверный пароль')
    }
}
else if (user === null || user === '' ){
    alert('Отменено')
}
else {
    alert('Я вас не знаю')
} */


// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)



// #10 ФУНКЦИИ

/* function showMessage () {
    alert('Всем привет!')
}

showMessage() // Всем привет! */

/* function showMessage () {
    let message = 'Всем привет!'
    alert(message)
}
showMessage()
alert (message) */ // будет ошибка, т.к. переменная локальная
// и доступна только внутри функции


/* let userName = prompt ('Как вас зовут?')
function showMessage() {
    message = 'Привет, ' + userName
    alert (message)
}

showMessage() */

/* let nameUser = 'Алексей'
function sampleCall() {
    nameUser = 'Степан'
    let message = 'Привет, ' + nameUser
    alert (message)
}
alert (nameUser)
sampleCall()
alert (nameUser) */


/* let userName = 'Олег'
function showMessage () {
    let userName = 'Дмитрий'
    let message = 'Привет, ' + userName
    alert (message)
}

showMessage() // Привет, Дмитрий
alert (userName) // Олег */
// Заново созданная одноименная переменная внутри функции
// не меняет значения у внешней переменной


/* function showMessage(from, text) {
    from = '***' + from + '***'
    text = '(' + text + ')'
    alert (from + ': ' + text)
}
let from = 'Гена'
showMessage('Игорь', 'Привет!')
showMessage('Юрий', 'Здравствуйте!')
showMessage(from, 'Добрый день!') // Использовано значение
// глобальной переменной совместно с редактированием
//локальной переменной
 */


/* function showMessage(from = 'имя не указано', text = 'текст не добавлен') {
    message = from + ': ' + text
    alert (message)
}

showMessage('Александр', 'Здравствуйте!')
showMessage()  */
// отобразятся значения по умолчанию, указанные
// при объявлении функции
// параметры – при объявлении функции
// аргументы – при вызове функции

/* function secondFunc() {
    alert ('Вызов другой функции по дефолту параметра b')
}

function firstFunc(a, b = secondFunc()) {
    let value = String(a) + String(b)
    alert (value)
}

firstFunc 4, 6)
firstFunc() */

/* function firstFunc (a, b) {
    a = a || 'параметр а не указан'
    b = b || ', параметр b не указан'
    let message = a + b
    alert (message)
}

firstFunc() */

/* function checkAge(age) {
    if (age >= 18) {
        return true
    } else {
        return confirm ('А родители разрешили?')
    }
}

let age = prompt ('Сколько вам лет?', '18')
if (checkAge(age)) {
    alert('Доступ разрешен!')
} else {
    alert ('Доступ закрыт!')
} */

/* function showMessage (from, text) {
    if (text === undefined) {
        text = 'текст не указан'
    }
    alert (from + ": " + text)
}

showMessage('Кирилл',) */

// function showMessage(from, text) {
//     text = text || 'текст не добавлен'
//     alert(from + ": " + text)
// }

// showMessage('','олджфыва')


/* function sum(a, b) {
    return a + b
}

let result = sum(3, 5)
alert (result) */ // возврат значения функции в вызвавший её код

/* Деректива return может находиться в любом месте тела функции.
Как только выполнение доходит до этой дерективы –
функция останавливается и возвращает результат выражения после return
в значение, вызвавшого её кода */





/* function amper(b){
    if(!b){
        return
    }
    alert ('Добрый день!')
    return b
} */

// amper(5) // сработало! 
/* если  не b (!b), то есть false, то выйти из функции */
/* в случае true дальше выполнять тело функции */

/* let result = amper(7)
alert(result) */

/* по сути деректива return либо выходит из функции и возвращает какое-либо значение,
если после return указано какое-то выражение или операнд(параметр, переменная) куда нужно присваивать */
/* или просто останавливает фунцию и выходит из неё с пустым значением
undefined */


/* function doNothing() {
    // ... empty
}

alert(doNothing() === undefined)

function doNothing2() {
    return 5
    // ... with return
}

alert(doNothing2() === undefined)
alert(doNothing2())

function doNothing3() {
    return
    // ... with return
}

alert(doNothing3() === undefined) */

// никогда не добавлять перевод строки между return и его выражение
// интерпритатор в случае переноса ставит точку после return
// что значит остановка функции и возврат значения undefined

// Можно только так...

/* function someFunction() {
    // ...
    return ( // первая скобка должна быть рядом с return
        a + b + c +
        d + e
        + g
        + etc
    )
    // ...
} */


/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  } */
//


/* function checkAge(age) {
    age > 18 ? true : confirm('Родители разрешили?')
}

checkAge() */


/* function checkAge(age) {
    age > 18 || confirm('Родители разрешили?')
}

checkAge() */

/* function min(a, b) {
    if(a < b) {
        return alert(a)
    }
    else if(a > b) {
        return alert(b)
    }
    else {
        return alert('Error')
    }
}

min(3, 5)
min()
min(55, 7)
 */

/* function min(a, b) {
    return a < b ? alert(a) : alert(b);
}

min()
min(17, 5) */

// alert( 5 ** 2)

/* function pow(a, b) {
    if (typeof a && typeof b === 'number'){
        return alert(a ** b)
    }
    else return alert('Error!')
}

pow() // Error!
pow(5, 2) // 25
pow(3, 3) // 27

let result = 55
alert(`Взято значение из переменной result через знак ${result}. Оно равно ${result}`) */


// CALCULATOR

/* function Calc(operation, a, b) {

// Parameter Check
    if (operation, a, b === undefined 
        || typeof a !== 'number' 
        || typeof b !== 'number'){
        return alert('Error')
    }
    else if(operation !== 'sum'
        && operation !== 'min' 
        && operation !== 'mult' 
        && operation !== 'div' 
        && operation !== 'rem'
        && operation !== 'exp'
        && operation !== undefined) {
        return alert('Unknown operation')
    }

// Operations
    else if(operation === 'sum'){
        return alert(a + b)
    }
    else if(operation === 'min'){
        return alert(a - b)
    }
    else if(operation === 'mult'){
        return alert(a * b)
    }
    else if(operation === 'div'){
        return alert(a / b)
    }
    else if(operation === 'rem'){
        return alert(a % b)
    }
    else if(operation === 'exp'){
        return alert(a ** b)
    }
} */

// Error checking
// Calc('sum', 4, 4)        // 8
// Calc('jhg', 4, 4)        // Unknown operation
// Calc()                   // Error
// Calc('sum', 'any', 5)    // Error

// Correct result
// Calc('sum', 2, 2)      // 4
// Calc('min', 4, 7)      // -3
// Calc('mult', 4, 10)    // 40
// Calc('div', 100, 2)    // 50
// Calc('rem', 15, 12)    // 3
// Calc('exp', 3, 4)      // 81




// #11 ПЕРЕКЛЮЧАТЕЛЬ


/* switch(x){
    case 'value1':      //(if x === 'value1')
        ...
        [break]
    case 'value2':      //(if x === 'value2')
        ...
        [break]
    default:            // Необязательный (optional) блок default
        ...
        [break]
} */

/* let a = 2 + 2 - 1 + 2 + 30

switch(a){
    case 4:
        alert('В точку!')
        break
    case 3:
        alert('Мало!')
        break
    case 5:
        alert('Много!')
        break
    default:
        alert('Нет такого числа!')
} */

/* let a = 4 + 4

switch(a){
    case 5:
        alert('Много!')
    case 10:
        alert('Ещё больше!')
    case 8:
        alert('В точку!')
    case 6:
        alert('Мало!')
    case 3:
        alert('Очень мало!')
    default:
        alert('Нет таких значений')
} */
// из-за того что нет break код выполняется с проверками до совпадения
// после совпадения остальная часть кода до конца без проверок выполняется
// до завершения блока switch

/* 
let a = '1'
let b = 0

switch(+a){
    case b + 1:
        alert('Верно!')
        break
    case 4:
        alert('Неверно!')
        break
    default:
        alert('Некорректный результат!')
}
 */


/* let a = 4

switch(a){
    case 4:
        alert('Правильно!')
        break
    case 3:
    case 5:
    case 7:
        alert('Неправильно!')
        alert('Может вам посетить урок математики?')
        break
    default:
        alert('Результат выглядит странновато. Честно.')
} */


/* let arg = prompt('Введите число?')

switch(arg){
    case '0':
    case '1':
        alert('Ноль или один')
        break
    case '2':
        alert('Два')
        break
    case 3:
        alert('Никогда не выполнится!')
        break
    default:
        alert('Неизвестное значение')
} */


/* 
let browser = prompt("What browser do you have?")

if (browser === 'Edge'){
    alert("You've got the Edge!")
} else if (browser === 'Chrome'
|| browser === 'Firefox'
|| browser === 'Safari'
|| browser === 'Opera'){
    alert("Okay we support these browsers too")
} else{
    alert("We hope that this page looks ok!")
} */


/* const number = prompt('Введите число между 0 и 3')

switch(+number){
    case 0:
        alert('Вы ввели число 0')
        break
    case 1:
        alert('Вы ввели число 1')
        break
    case 2:    
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break
    default:
        alert('Некорректное значение!')
} */




/* // CALCULATOR WITH SWITCH black paper

// Parameter Check
function Calc(operation, a, b){
    if(operation, a, b === undefined
        || typeof a !== 'number'
        || typeof b !== 'number'){
            return alert('Error')
    }
    else if(operation !== 'sum'
        && operation !== 'min'
        && operation !== 'mult'
        && operation !== 'div'
        && operation !== 'rem'
        && operation !== 'exp'
        && operation !== undefined){
            return alert('Unknown operation')
    }

// Operations
    else if(operation === 'sum'){
        return alert(a + b)
    }
    else if(operation === 'min'){
        return alert(a - b)
    }
    else if(operation === 'mult'){
        return alert(a * b)
    }
    else if(operation === 'div'){
        return alert(a / b)
    }
    else if(operation === 'rem'){
        return alert(a % b)
    }
    else if(operation === 'exp'){
        return alert(a ** b)
    }
}

// Error checking
Calc('sum', 4, 4)            // 8
Calc('hfm', 4, 4)            // Unknown operation
Calc()                       // Error
Calc('sum', 'any', 4)        // Error

// Correct result
Calc('sum', 2, 2)            // 4
Calc('min', 4, 7)            // -3
Calc('mult', 4, 10)          // 40
Calc('div', 100, 2)          // 50
Calc('rem', 15, 12)          // 3
Calc('exp', 3, 4)            // 81 */



// CALCULATOR WITH SWITCH

/* function Calc(operation, a, b){

// Parameter Check
    if(operation === undefined && a === undefined && b === undefined 
        || typeof a !== 'number'
        || typeof b !== 'number'){
            return alert('Error')
    }

// Operations
    switch(operation){
        case 'sum':
            alert(a + b)
            break
        case 'min':
            alert(a - b)
            break
        case 'mult':
            alert(a * b)
            break
        case 'div':
            alert(a / b)
            break
        case 'rem':
            alert(a % b)
            break
        case 'exp':
            alert(a ** b)
            break
        default:
            alert('Unknown operation')
    }
} */


// Error checking
// Calc('sum', 4, 4)            // 8
// Calc('hfm', 4, 4)            // Unknown operation
// Calc()                       // Error
// Calc('sum', 'any', 4)        // Error

// Correct result
// Calc('sum', 2, 2)            // 4
// Calc('min', 4, 7)            // -3
// Calc('mult', 4, 10)          // 40
// Calc('div', 100, 2)          // 50
// Calc('rem', 15, 12)          // 3
// Calc('exp', 3, 4)            // 81




// #15 ЦИКЛЫ



/* for (let i = 0; i <=100;){
    i = prompt('Введите число больше 100', '')
    if (!i) {
        alert('Нет данных!')
        break
    }
    else if (+i >= 100){
        alert('Готово!')
    }
    else if (!+i)
    alert('Некорректный тип данных')
} */

/* let i = 0
while (i < 3){
    alert(i)
    i++
} // 0, 1, 2 */

/* let i = 3
while (i){
    alert(i)
    i--
} // 3, 2, 1
// не важно постфиксный или префиксный декремент, всегда будет 3, 2, 1 */

// более лаконичный вариант
/* let i = 3
while (i) alert(i--) */
// 3, 2, 1

/* let i = 3 
while (i) alert(--i) */
// 2, 1, 0
// alert выполнит префиксный декремент сперва вычтет единицу
// и вернёт значение и alert его тобразит,
// и только после этого произойдёт присвоение значение переменной i 

/* let i = 0
do {
    alert(i)
    i++
} while (i < 3) */
// 0, 1, 2

/* let i = 4
do {
    alert(i)
    i++
} while (i < 3) */
// 4, первая итерация выполнится без проверки условия, после – только после проверки while

/* for (let i = 0; i < 3; i++) {
    alert(i)
} */
// 0, 1, 2

/* let i = 0
for (; i < 3; ){
    alert(i++)
} */
// 0, 1, 2

/* let i = 0
for (; i < 3;) {
    alert(++i)
} */
// 1, 2, 3
// alert выполнит префиксный инкремент сперва добавит единицу
// и вернёт значение и alert его отобразит,
// и только после этого произойдёт присвоение значение переменной i

/* for (let i = 0; i < 3;) alert(i++) // 0, 1, 2

for (let y = 0; y < 3;) alert(++y) // 1, 2, 3 */

// запись цикла for через if

/* let i = 0
if (i < 3) alert(i++) // 0
if (i < 3) alert(i++) // 1
if (i < 3) alert(i++) // 2
if (i < 3) alert(i++) */ // предыдущий постфиксный инкремент сперва вернул, потом присвоил
// значение, данная интерация не выполнится

/* let i = 0
if (i < 3) alert(++i) // 1
if (i < 3) alert(++i) // 2
if (i < 3) alert(++i) // 3
if (i < 3) alert(++i) */ // не выполнится
// префиксный инкремент сперва вернёт значение увеличенное на единицу для alert
// только после его присвоит переменной i

/* for (let i = 0; i < 3; i++) {
    alert(i) // 0, 1, 2, префиксный/постфиксный инкремент в шаге не имеет значения,
    // так как он выполнится после тела цикла
}
alert(i) // "i is not defined" в консоле, так как встроенная переменная в цикле недоступна за его пределами */

/* let i = 0
for(i; i < 3; ) {
    alert(++i) // 1, 2, 3
}
alert(i) */ // 3, все 3 итерации цикла по итогу присволи значение 3 переменной i

/* 
let i = 0
for (i; i < 3; ) {
    alert(i++) // 0, 1, 2
}
alert(i) */ // 3, все 3 итерации цикла по итогу присволи значение 3 переменной i
// значение 3 будет, так как постфиксный инкремент сперва вернул предыдущее
// значение для alert, и только после его увеличил на единицу и присвоил
// переменной i
// внешний alert воспроизвел значение ранее присвоенное инкрементом из цикла

/* let i = 0
for (; i < 3; i++) alert(i) */
// 0, 1, 2

/* let i = 0
for (; i < 3; ) alert(i++) */
// 0, 1, 2

/* let i = 0
for (; i < 3; ) alert(++i) */
// 1, 2, 3
// префиксный инкремент сперва увеличивает значение на единицу и возвращает его 
// для alert и только потом присваивает его
// постфиксный инкремент сперва возвращает текущее значение и только после alert
// присваивает его переменной i

/* for (;;) {} */ // бесконечный цикл, ";" – обязательна, иначе будет ошибка

/* let sum = 0
while (true) {
    let value = +prompt('Нажимайте Enter. При выходе отобразится количество нажатий.', '1')
    if (!value) break
    sum += value
}
alert('Вы нажали Enter: ' + sum + ' раз(а)') */

/* for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue // выполняет шаг и начинает следующую итерацию
    alert(i) // 1, 3, 5, 7, 9 
}
 */
/* for (let i = 0; i < 10; i++) {
    if (i % 2) {
        alert(i) // 1, 2, 3, 5, 7, 9
    }
} */

// alert(0 % 2)

/* let i = 5;
(i < 5) ? alert(i) : alert('i >= 5'); */
// важнейшее замечание, чтобы работала конструкция с "?" – нужно всегда перед ней
// ставить ";"
// всегда


/* let i = +prompt ('Введите число 5');
(i == 5) ? alert('Верно!') : alert('Это не 5') */
// важнейшее замечание, чтобы работала конструкция с "?" – нужно всегда перед ней
// ставить ";"
// всегда

// let i = 5;
// (i == 6) ? alert('6') : continue
// Unexpected token 'continue'
// синтаксические конструкции continue/break не являются выражениями и их нельзя использовать в конструкции с "?"
// Также применение continue в if конструкции вызывает ошибку, см. ниже

/* let i = 7
  if (i > 5) {
    alert(i)
  } else {
    continue
} */
// Illegal continue statement: no surrounding iteration statement
// Недопустимый оператор continue: нет окружающего оператора итерации

/* let i
for (i = 0; i < 5; i++) alert (i) // 0, 1, 2, 3, 4
alert(i) // 5 */
// когда условие ложно/false, переменной i присвается последнее значение после шага в итерации
// и это значение сохраняется в глобальной переменной
// в данном случае до перезагрузки страницы

/* let b
for (let a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++){
        let input = alert (`Значение на координатах: (${a},${b})`)
    }
}
alert (b) */ // 3, при наличии внешней/глобальной переменной вложенный цикл присвает 
// последнее значение переменной b, полученное в последней итерации

// (0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)

/* for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++){
        for (let c = 0; c < 3; c++) {
            for (let d = 0; d < 3; d++){
                for (let e = 0; e < 3; e++){
                    let input = alert(`Число на координатах: (${a},${b},${c},${d},${e})`)
                }
            }
        }
    }
} */
// в данном случае цикл когда достигает условия false, то последнее значение снова 
// сбрасывается до исходного, присвоенного внутреннней переменной
// если нет внешней переменной для присвоения значения,
// то оно вернётся к исходному в начале цикла

// alert(a) // a is not defined
// нет доступа к внутренним переменным цикла

// for (let a = 'Hello'; a < 3; a++) alert(a)
// не выпонится, так как не соответсвует условию

/* outer:
for (a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++) {
        let input = prompt(`Значение на координатах: (${a},${b})`)
        if (!input) break outer // остановит цикл целиком на всех уровнях и сбросит значения
        // до исходных для внутренних переменных
        // break – прервёт и сбросит значения до исходного у вложенного цикла
        // в котором он вызван
    }
} */

/* outer: for (let a = 0; a < 3; a++) {
                for (let b = 0; b < 3; b++) {
                    let input = prompt(`Значение: ${a},${b}`)
                    if (!input) break outer
                }
} */
//  метку можно объявлять как на одной строке с циклом, так и на следующей

// alert(!5) // оператор не "!" сперва преобразует значение к логическому типу
// затем возвращает противоположное значение


/* for (let a = 0; a < 3; a++) {
    for (b = 0; b < 3; b++) {
        prompt (`Значение ${a},${b}`)
        // alert(b)
    }
    // alert(b) // внешнему циклу также не доступны данные внутренней переменной вложенного цикла
} */


// continue – после данной директивы выполняется шаг в том же цикле, в котором она вызвана,
// либо из любого вложенного в любой внешний по метке и начинается следующая итерация, если 
// условие true

/* let a = 0
while (++a < 5) alert(a) // ++a – сперва увеличил, потом сравнил новое значение */
// 1, 2, 3, 4

/* let b = 0
while (b++ < 5) alert(b) */ // b++ – сперва увеличил, но сравнивает со старым значением (до alert)
// 1, 2, 3, 4, 5

// когда скобки while заканчиваются, происходит присвоение значение переменной, которое и отображает alert


/* for (let a = 1; a <= 10; a++) {
    if(a % 2 == 0) alert(a)
} */

/* for (let a = 2; a <= 10; a++){
    if(a % 2 !== 0) continue
    alert(a)
} */

/* for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
} */



/* let i = 0
while (i < 3) alert(`number ${i++}!`) */

/* let i = 0
while (i < 3) {
    alert(`number ${i}!`)
    i++
} */

/* let num
do {
    num = prompt('Введите число больше 100', 0)
    // if (!num) break
} // while (num < 100)
// или так
while (num < 100 && num) */


/* outer:
for (let a = 2; a < 10; a++){
    for (let b = 2; b < a ; b++){
        if (a % b == 0) continue outer 
    }
    alert(a)
} */
// 2, 3, 5, 7
// вложенный цикл
// ОСМЫСЛИТЬ ПОСЛЕДНЕЕ ЗАДАНИЕ ЕЩЁ РАЗ




// #16 ОБЪЕКТЫ



/* let user = {
    name: "Alex",
    age: 29,
    likesSport: true
}

user.isAdmin = true
user.www = 40
delete user.age
delete user.www

console.log(user)
console.log(user.name)
alert(user.age)
// удобнее будет указывать изменения в объекте до alert и console.log,
// чтобы отображаемые данные были актуальными
// иначе, свойство может быть уже удалено, но console.log отобразит предыдущее состояние
// со списком свойств (в т.ч. удалённых) в нераскрытой строке описания объекта
// хотя в раскрывающемся списке оно будет остутствовать */


/* let user = {
    name: "John",
    age: 30,
    "like birds": true,
}
console.log(user) */
// последнее свойство может заканчиваться запятой ("висячая запятая")
// такой подход упрощает удаление, добавление, перемещение свойств в объекте,
// т.к. все строки (свойства) становятся одинаковыми 
// у всех есть запятая и не будет ошибки, как если бы свойство без запятой на ходилось бы
// например, вторым по счёту, но не последним


/* const user = {
    name: "John"
}
user.name = "Mike"
alert(user.name)
// объект объявленный через const можно изменять как и прежде
// const защищает переменную от присвоения
user = 5
alert(user) // Uncaught TypeError: Assignment to constant variable. */


/* let user = {}

user["likes birds"] = true // добавление объекту user нового свойства с ключем (именем)
// "like birds" и значением true
alert(user["likes birds"]) //  true
delete user["likes birds"] // удаление свойства
alert(user["likes birds"]) // undefined */


/* let user = {
    name: "John",
    age: 30
}
let key = prompt("Что вы хотите узнать о пользователе?", "name")
alert(user[key]) // John, в случае ввода name, запись через точку выдаст undefined*/


/* let fruit = prompt('Какой фрукт купить?','apple')
let bag = {
    [fruit]: 5
}
alert(bag.apple) // 5
console.log(bag) */


/* let fruit = prompt('Какой фрукт купить?', 'apple')
let bag = {}
bag[fruit] = 6 // добавление нового свойства объекту с вычисляемым ключем (именем)
// из переменной fruit и присвоение значения 6
console.log(bag) */


/* let fruit = 'apple'
let bag = {
    [fruit + 'Computers']: 7
}
console.log(bag) */

/* let a = 'one'
let b = 'Two'
let c = 'Three'
let numbersWords = {
    [a + b + '' + c + ': concatenation']: 100 // oneTwoThree: concatenation
}
// numbersWords['oneTwoThree: concatenation'] = 100 // тоже самое
// в данном случае нельзя добавить в объект свойство с таким же именем
console.log(numbersWords) */


/* function makeUser(name, age) {
    return {
        name: name,
        age: age
    }
}
let user = makeUser('John', 30)
alert(user.name)
console.log(user) */


/* function makeUser(name, age, hasJob) {
    return{
        name,
        age,    // короткий способ записи свойств, если их имена совпадают 
                // с именами локальных переменных (параметрами) функции
        hasJob
    }
}

let user = makeUser('John', 40, false)
user.age = 35
alert(user.age)
console.log(user) */


/* let obj = {
    for: 1,
    let: 2,
    return: 3,            // зарезервированные слова можно использовать в качестве
                             // имён свойств объекта
    ['8765,:,%::$__-:%']: 55 // данное название не приводит к ошибке
}
alert(obj.for + obj.let + obj.return) // 6
console.log(obj) */


/* let obj = {
    0: 'Тест'
}
alert(obj[0])
alert(obj['0'])
alert(obj["0"]) // все три alert'а выведут 'Тест' */


/* let obj = {
    __proto__: 55,
    age: 30
}
console.log(obj)
// свойство с именем __proto__ не выводит данных, игнорируется
alert(obj.__proto__) 
// [object Object] - даже если данное свойство не указано вообще */


/* let user = {}
alert(user.someName === undefined) // true */

// проверка существования свойства, оператор in
// 'key' in object (подходят также и двойные ковычки " ")
/* let user = {name: 'John', age: 35}
alert('age' in user) // true
alert('a' in user) // false */


/* let obj = {
    test: undefined
}
alert(obj.test) // undefined
alert('test' in obj) // true
alert(obj.job) // undefined
alert('job' in obj) */

/* let userName = 'John'
let userSurname = 'Brown'
let job = 'Google'
let numberOfYears = 7

let user = {
    [userName]: userSurname,
    [job]: [numberOfYears] + ' years'
}
alert(['name'] in user) // false
alert(job in user) // true
console.log(user) */
// чтобы брать данные для свойств из переменных нужно помнить,
// что имя свойства записывается [x], а значение либо также [x], либо x просто


/* let obj = {}
obj.prop1 = 1 // без присвоения значения свойство не отображается в console.log
console.log(obj) */

/* let user = {
    name: 'John',
    age: 35,
    isAdmin: true
}

for (let key in user) {
    alert(key) // показывает ключи
    alert(user[key]) // показывает значение
} */
// key как и любую переменную можно объявить без let

/* let codes = {
    '49': 'Германия',
    '41': 'Швейцария',
    '44': 'Великобритания',
    // ...,
    '1': 'США',
    city: 'Chicago',
    ['contry of residence']: 'USA'
}

for (let code in codes) {
    alert(code)
    alert(codes[code])
} */
// свойства с ключами и значениями будут перечисляться в порядке возрастания, сперва ключ, затем пренадлежащее ему значение
// свойства, чьи ключи не являются целым числом перечисляются в порядке создания
// code как и любую переменную можно объявить без let

/* alert(String(Math.trunc(Number('+49'))))            // 49
alert(String(Math.trunc(Number('2.4445'))))         // 2
alert(String(Math.trunc(Number('-56.87584858'))))   // -56 */

/* let user = {
    name: 'John',
    surname: 'Smith'
}
user.age = 25

for (prop in user) {
    alert(prop) // перечесление ключей свойств в порядке создания,
    // name, surname, age
} */
// в цикле prop можно использовать без let

/* let codes = {
    '+49': 'Германия',
    '+41': 'Швейцария',
    '+44': 'Великобритания',
    // ...,
    '+1': 'США'
}
codes['+15'] = 'неизвестно'
codes['sample key n1'] = 'string n1'
codes['sample key n404'] = 'string n444'
codes['sample key n4'] = 'string n4'
codes['a1'] = 'a1'
codes['0a01'] = '0a01'
for (let code in codes) {
    alert(+code) // 49, 41, 44, 1, ...
} */
// console.log(codes)
// если перезагрузить страницу с открытой консолью разработчика, то свойства объекта отображаются в порядке создания
// при раскрытии объекта свойства ранжируются сперва в числовом, затем алфавитном(лексикографическом) порядке
// сравнение происходит посимвольно, в данном случае число всегда приоритетнее, чем литера
// но в alert ключи свойств будут отображаться в порядке создания


/* let user = {
    name: 'John',
    surname: 'Smith',
    age: 35
}
alert(user.name) */

/* let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name */

/* function isEmpty(obj) {
    for(let key in obj) {
        return false
    }
    return true
}

let shedule = {}
alert(isEmpty(shedule)) // true
shedule['8:30'] = 'take a walk on the street'
alert(isEmpty(shedule)) // false
console.log(shedule) */

/* const user = {
    name: 'John'
}
user.name = 'Pete'

// user = 123 // Uncaught TypeError: Assignment to constant variable. Присвоение постоянной переменной (перевод с translate.google)

console.log(user) */

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
salaries['info'] = 'unknown'

let sum = 0
for (let key in salaries) {
    if(typeof salaries[key] !== 'number'){
        continue
    }
    sum += salaries[key]
}

alert(sum)
console.log(salaries) */

/* function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu)
console.log(menu)
 */

/* let user = new Object() // синтаксис "конструктор объекта"
user.name = 'John'
console.log(user)
 */

/* let fruit
let user = {
    name: 'John',
    1: 'message',
    'likes birds': true,
    [fruit]: 5
}

console.log(user)
alert(user[1])
alert(user['name'])
alert(user.name) */




// #16 ОБЪЕКТЫ (повторение)



// let user = new Object() // синтаксис "конструктор объекта"
// let user = {} // синтаксис "литерал объекта" или "литеральная нотация"
// литерал – запись в исходном коде компьютерной программы

/* let user = {         // объект
    name: 'John',    // ключ – name, значение – 'John'
    age: 35          // ключ – age, значение – 35
}
user.isAdmin = true // добавление свойства с булевым значением
delete user.age // удаления свойства

alert(user.name)
alert(user.age)


console.log(user) */
// для получение значения свойства выполняется обращение через точку к конкретному ключу объекта


/* let user = {
    name: 'John',
    age: 35,
    'likes birds': true // имя из нескольких свойств заключается в кавычки
}
// последнее свойство объекта может заканчиваться запятой
console.log(user) */


// объект объявленный через const может быть изменен, то есть добавлены, изменены, удалены свойства и тд
// но нельзя вновь также присвоить переменной user значение пустого объекта или иного типа данных
// это вызовет ошибку
/* const user = {}
user.name = 'John'
// user = {} // Uncaught TypeError: Assingment to constant variable. Присвоение постоянной переменной.

console.log(user) */

/* const user = {
    name: 'John'
}
user.name = 'Pete'
alert(user.name) */


/* let user = {}
user['likes birds'] = true
delete user['likes birds']
alert(user['likes birds']) */


/* let user = {}
let key = 'likes birds'
user[key] = true // имя свойства хранится в переменной key
console.log(user) */
// тоже самое, что и user['likes birds'] = true


/* let user = {
    name: 'John',
    age: 35
}
let key = prompt('Что вы хотите узнате о пользователе?', 'name')
alert(user[key])
alert(user.key) // undefined */
// запись через точку такого не позволяет


/* let fruit = prompt('Какой фрукт купить?', 'apple')
let bag = {
    [fruit]: 5
}
alert(bag.apple) */ // 5, если fruit = 'apple'. Иначе undefined

/* let fruit = prompt('Какой фрукт купить?', 'apple')
let bag = {}
bag[fruit] = 5
console.log(bag) */


/* let fruit = 'apple'
let bag = {
    [fruit + 'Computers']: 5,                    // bag.appleComputers = 5
    ['1' + '2' + 3]: 6,                          // bag['123'] = 6
    name: 'John',
    number: 5, 
    ['some key']: 5,
    a: 45,
    b: 'b',
    c: 5
}
console.log(bag)

// Function to find keys with specific value. Функция для поиска ключей с определенным значением
let objectWithFoundValues = {}
function findNeededValue(value, object){
    for(let key in object) {
        if (object[key] == value){
            objectWithFoundValues[key] = value
        }
    }
    for (let key in objectWithFoundValues){
        alert(key)
    }
}
console.log(objectWithFoundValues)

findNeededValue(5, bag)
 */

/* let value                    // черновик для функции
for(let key in bag) {
    if (bag[key] == 5){
        value = bag[key]
    }
}
alert(value) */


/* function makeUser (name, age) {              // указанные параметры присваиваются значениям свойств
    return {
        name: name,
        age: age
    }
}

let user = makeUser('John', 35)
// alert(user.name)

for (let key in user) {
    alert(user[key])
} */


/* let user
function makeUser (name, age) {
    return user = {
        name,                       // короткий синтаксис записи свойств
        age
    }
}

makeUser ('Tom',)

for (let key in user) {
    alert(user[key])        // перечисляет значения свойств
    alert(key)              // перечисляет ключи (имена, идентификаторы) свойств
}
console.log(user) */


/* let user = {
    name,
    age: 30
}
console.log(user)
alert(user.name) // 'пустая строка'
alert(typeof(user.name)) // string */


/* let obj = {
    for: 1,
    let: 2,
    return: 3,
}
alert(obj.for + obj.let + obj.return) */
// 6, для имени (ключей) свойств нет ограничений в использовании зарезервированных свойств


/* let obj = {
    0: 'Тест'       // то же самое, что и '0':'Тест'
}
alert(obj[0])       // Тест
alert(obj['0'])     // Тест */


/* let obj = {}
obj.__proto__ = 5       // присвоение примитивного значения 5 ингнорируется
alert(obj.__proto__)
console.log(obj.__proto__) */
// таковы особенности поведения свойства __proto__, пока что просто запомнить


/* let user = {}
alert(user.noSuchProperty === undefined) // true */

/* let user = {name: 'John', age: 35}
alert('name' in user) // true
alert(`age` in user) // true
alert("hasJob" in user) // false */
// оператор in нужен для проверки существования свойства в объекте
// синтаксис ('key' in object), ключ свойства указывается кавычках (любых)

/* let key
let user = {[key]: 35}
alert(key in user)           // true
console.log(user)            // undefined: 35
for (let prop in user){
    alert(prop)              // undefined
    alert(typeof prop)       // string
} */
// с кавычками будет проверка конкретного имени в свойствах
// без кавычек будет обращение к переменной, которой либо присвоено значение, либо нет
// если значения нет, то alert отобразит true, так как неприсвоенное значение будет undefined, которое
// преобразуется к строке внутри объекта, как и показывает проверка выше

/* let user = {
    name: 'John'
}
alert('age' in user) // false */

/* let obj = {
    test: undefined
}
alert(obj.test)                     // undefined, но свойство есть
alert('test' in obj)                // true
for (let key in obj) {
    alert(obj[key])                 // undefined
    alert(typeof (obj[key]))        // undefined, значение не преобразовано к строке, в отличие от ключа, где значение из переменной
}    */                                // key – undefined, было преобразовано к строке 

// значение undefined редко присваивается явно, но чтобы точно точно удостовериться лучше использовать оператор 'in',
// чем просто проверку на строгое равенство с undefined


/* let user = {
    name: 'John',
    age: 35,
    isAdmin: true
}

for (let key in user) {
    alert(key)                  // ключи (имена, идентификаторы)
    alert(user[key])            // значения
} */


/* let codes = {
    '49': 'Германия',
    '41': 'Швейцария',
    '44': 'Великобритания',
    // ...,
    '1': 'США',
    undefined: 5,
    www: '111',
    '+0': 1,
    '=0': 1,
    0: 1,
    a: 'a',
    A: 'a',
    'бббббббббббббббббббббббббб': 5,
    'слово': 5,
    'Слово': 5,
    aa: 'a',
    aaa: 'a'
}

for (let code in codes){
    alert(code)                // 1, 41, 44, 49
}
console.log(codes) */

// alert('ббб' > 'бббв') // false

// Свойства упорядочены следующим образом: свойства с целочисленными ключами 
// (которые преобразуются к целому числу и обратно без изменений) сортируются по возрастанию,
// остальные свойства сортируются в порядке создания

// НО в console.log при отображении списка объекта всё содержимое сортируется:
// сперва по числам – в порядке возрастания
// затем по символам
// и в последнюю очередь по алфавиту – сперва латиница, затем кириллица, также по возрастанию (от а до я) и тд
// заглавная буква имеет меньший приоритет, чем строчная
// сперва сравнивается лексикографический порядок (алфавитный), затем длина слова, если все буквы одинаковы
// чем дальше буква в алфавите, чем выше её приоритет


/* alert(String(Math.trunc(Number('49'))))      // 49, то же самое, свойство целочисленное
alert(String(Math.trunc(Number('+49'))))     // 49, не то же самое, было '+49', свойство не целочисленное
alert(String(Math.trunc(Number('5.87676'))))  // 5, не то же самое, было '5.87676', свойство не целочисленное */


/* let user = {
    name: 'John',
    surname: 'Smith'
}
user.age = 35

for (let key in user) {
    alert(key)
} */

/* let codes = {
    '+49': 'Германия',
    '+41': 'Швейцария',
    '+44': 'Великобритания',
    // ...,
    '+1': 'США'
}

for (let code in codes) {
    alert(code)             // так как ключи не целочисленные, то они отображаются в порядке создания
}                           //  в console.log сортировка отличается при раскрытии списка свойств объекта, описание указано выше
console.log(codes) */

/* let user = {
    name: 'John',
    age: 35
}

alert(user.name)            // John
alert(user['name'])         // John, одно и то же
*/


/* let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name */


/* function isEmpty(object) {
    for (let prop in object){
        return alert(false)
    }
    alert(true)
}

let shedule = {}

isEmpty(shedule) // true

shedule['8:30'] = 'get up'

isEmpty(shedule) // false

console.log(shedule) */


/* const user = {
    name: 'John'
}
user.name = 'Pete' */ // работать будет
// внутри объета можно выполнять изменения
// нельзя переназначать новое значение для user, user = '1234' и тд
// user = {} // Uncaught Type Error: Assignment to constant variable. Присвоение постоянной переменной


/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    // Tom: 'billion',
    // David: 'billion'
}
console.log(salaries)

let sum = 0

function sumSalaries(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'number') {
            return alert('The value of one or more properties is not a number')  // return - останавливает функцию и выполняет последнее
        }                                                                        // выражение после этой директивы
        else {                                                                   // в данном случае return выполнил alert
            sum += obj[key]                                                      // и присвоил для функции значение undefined
        }
    }
    alert(sum)
}

let check = sumSalaries(salaries)
alert(check) // undefined
alert(typeof check) // undefined

// console.log(sumSalaries(salaries)) // alert, undefined
// sumSalaries(salaries)              // alert       */


/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
let word = 'Note: '

for(let key in salaries){
    sum += salaries[key]
    word += key
}

alert(sum)
alert(word)
console.log(salaries) */


/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Tom: 'billion',
    David: 'billion'
}

let sum = 0

function sumSalaries(object){
    for (let key in object){
        if (typeof object[key] !== 'number'){
            return alert('The value of one or more properties is not a number')      // return - выполняет alert, присваивает значение undefined
        }                                                                            // и останавливает функцию
        else sum += object[key]
    }
    alert(sum)
}

let check = sumSalaries(salaries)  // alert
alert(typeof check)                // undefined
alert(check)                       // undefined

// sumSalaries(salaries) // 390
// если хотя бы у одного из свойств значение !== 'number', то выполняется alert */


/* let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu) */


/* let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

function multiplyNumeric(object){
    for (let key in object){
        if(typeof object[key] == 'number'){
            object[key] *= 2
        }
    }
}

console.log(menu)
multiplyNumeric(menu)
console.log(menu) */

/* let user = {
    name: 'John',
    age: 35,
    'likes birds': true
}
console.log(user)
alert(user.name)    // John
alert(user[name])   // undefined, ссылается на переменную, откуда берёт имя свойства, которая на данный момент отсутствует
alert(user['name']) // John, ссылается на имя ключа, а не к переменной, так как запись через кавычки, 
alert(user['hasJob'] = true) // alert отображает присвоенное значения нового свойства, которое также добавляется в объект

console.log(user) */

/* let user = {
    surname: 'Smith'
}
alert(user.surname)
alert(user['surname']) */




// #11 ПЕРЕКЛЮЧАТЕЛЬ (повторение)



/* let a = 2 + 2

switch(a){
    case 3:
        alert('Маловато')
        break
    case 4:
        alert('В точку!')
        break
    case 5:
        alert('Перебор')
        break
    default:
        alert('Нет таких значений')
} */
// произойдет последовательное сравнение (a) с case
// дойдя до совпадения, выполнится содержимое case до ближайжшей директивы break
// если деректива break отсутствует, то дальше будут выполняться содержимое остальных case, при этом остальные
// проверки (сравнение (a) с case) будут игнорироваться

/* let a = 2 + 2

switch(a){
    case 3:
        alert('Маловато')
    case 4:
        alert('В точку')                    // так как отсутсвует директива break, все остальные case будут выполнены 
    case 5:                                 // без проверок до конца switch конструкции
        alert('Перебор')
    default:
        alert('Нет таких значений')
} */

/* let a = '1'
let b = 0

switch(+a){
    case (b + 1):                                           // выражение в case можно указывать в скобках и без
        alert('Выполнится, так как (+a) = 1 и (b + 1) = 1')
        break
    default:
        alert('Это не выполнится')
} */
// любое выражение может быть аргументом для switch/case

/* let a = 3

switch(a){
    case 4:
        alert('Правильно!')
        break
    case 3:         // группировка case, которые используют один и тот же код внутри
    case 5:         // данное поведение характеризуется отсутствующим break
        alert('Неправильно!')
        alert('Может вам стоит посетить урок математики?')
        break
    default:
        alert('Результат выглядит странновато. Честно.')
} */

/* let arg = prompt('Введите число...')

switch(arg){            // значение switch всегда проверяется на строгое равенство к case (===)
    case '0':
    case ('1'):
        alert('Один или ноль')
        break
    case '2':
        alert('Два')
        break
    case (String(3)):
        alert('Выполнится, если преобразовать значение из переменной к числу или значение case преобразовать к строке')
        break
    default:
        alert('Неизвестное значение')
} */

/* let browser = prompt('What browser are you using? / Какой браузер вы используете?', 'Chrome')

if (browser == 'Edge')
    alert("You've got the Edge!")
else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera')
    alert('Okay we support these browsers too')
else
alert('We hope that this page looks ok!') */

/* const number = prompt('Введите число от 0 до 3...', '')

switch(+number){
    case 0:
        alert('Вы ввели число 0')
        break
    case 1:
        alert('Вы ввели число 1')
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break
    default:
        alert('Неизвестное значение / Unknown value')
}
 */

/* let user = prompt('Кто там?')
let password
if (user == 'Админ'){
    password = prompt('Пароль')
    if(password == 'Я главный') alert('Здравствуйте')
    else if(password == undefined) alert('Отменено')
    else alert('Неверный пароль')
}
else if (user == undefined) alert('Отменено')
else alert('Я вас не знаю') */




// НАПИСАНИЕ СКРИПТОВ ДЛЯ СМЕНЫ СТИЛЕЙ ПО КЛИКУ И ПРЕЛОАДЕРА



/* let lightAndDarkTheme = document.querySelector('.change-theme')
let bodyHtml = document.querySelector('body')
let titleText = document.querySelector('.title-text')
let titleBox = document.querySelector('.title-box') */


/* lightAndDarkTheme.addEventListener('click', () => {
    if (lightAndDarkTheme.style.backgroundColor === 'rgb(0, 255, 0)') {
        lightAndDarkTheme.style.backgroundColor = 'rgb(116, 39, 39)'
        bodyHtml.style.backgroundColor = 'rgb(15, 17, 26)'
    }
    else if (lightAndDarkTheme.style.backgroundColor === 'rgb(116, 39, 39)') {
        lightAndDarkTheme.style.backgroundColor = 'rgb(0, 255, 0)'
        bodyHtml.style.backgroundColor = 'white'
    }
}) */


/* lightAndDarkTheme.addEventListener('click', () => {
    if (lightAndDarkTheme.style.backgroundColor === 'rgb(0, 255, 0)') {
        lightAndDarkTheme.style.backgroundColor = 'rgb(116, 39, 39)'
        bodyHtml.style.backgroundColor = 'rgb(15, 17, 26)'

    }
    else if (lightAndDarkTheme.style.backgroundColor === 'rgb(116, 39, 39)') {
        lightAndDarkTheme.style.backgroundColor = 'rgb(0, 255, 0)'
        bodyHtml.style.backgroundColor = 'white'
    }
})
titleBox.style.textShadow = '0 0 1px #fff, 0 0 2px #fff, 0 0 5px #fff, 0 0 11px #0fa, 0 0 20px #0fa, 0 0 30px #0fa, 0 0 55px #0fa, 0 0 80px #0fa'
console.log(lightAndDarkTheme.style) */


/* let preloaderWeb = document.querySelector('preloader')
document.preloaderWeb.classList.remove('preloader')
console.log(preloaderWeb)
*/


/* let preloaderMain = document.getElementById('pre-main')
window.onload = function (){
    setTimeout(function(){
        preloaderMain.classList.remove('pre')
        preloaderMain.classList.add('pre-end')
        setTimeout(function(){
            preloaderMain.style.display = 'none'
        },1000)
    }, 2000)
} */




// Условное ветвление: if, '?' (повторение)



/* let year = prompt('В каком году была опубликована спецификация ECMAScript-2015', '')
let condition = (year == 2015)
if (condition) {
    alert('Вы правы!')
    alert('Вы такой умный!') 
} else {
    alert('А вот и неправильно!')
} */


// Checking for NaN

/* let year = +prompt ('В каком году была опубликована спецификация ECMAScript-2015?', '')

if (isNaN(year) || year == 0) alert('Недопустимый тип данных') // проверка на NaN
else if (year < 2015) alert ('Слишком рано!')
else if (year > 2015) alert ('Слишком поздно!')
else alert('Верно!')

console.log (typeof year)   // number
console.log (year)          // NaN
console.log (year == NaN)   // false
*/

// Открыл для себя проверку на NaN. При обычном сравнении
// не работало (year == NaN). Сработало так – (isNaN(year)).
// Итог – true и выполнение последующего кода в текущем if.
// Не работало, так как "not a number" имеет определённое значение,
// описанное в стандарте IEEE-794 чисел с плавающей точкой.
// developer.mozilla.org

// I discovered checking for NaN. Normal comparison
// didn't work (year == NaN). It worked like this - (isNaN (year)).
// The result is true and the execution of the
// subsequent code in the current if.
// Didn't work because "not a number" has a specific meaning
// defined in the IEEE-794 floating point standard.
// developer.mozilla.org




// #15 ЦИКЛЫ (повторение)



/* let i = 0

while (i < 3) {
    alert(i)        // 0, 1, 2
    i++
} */

// Одно выполнение цикла по-научному называется итерация
// Любое выражение или переменная может быть условием цикла, а не только сравнение:
// условие while вычесляется и преобразуется в логическое значение

/* let i = 3

while (i) {
    alert(i)
    i--
} */

/* let i = 3
while (i) alert(i--) */

/* let i = 0

do {
    alert(i)
    i++
} while (i < 3) */

/* for (let i = 0; i < 3; i++) {
    alert(i)                    // 0, 1, 2
} */

/* for (let i = 0; i < 3;) alert(i++) // 0, 1, 2 */

// реализация цикла for через конструкцию if
/* let i = 0
if (i < 3) {alert(i++)}
if (i < 3) {alert(i++)}
if (i < 3) {alert(i++)} */

/* for (let i = 0; i < 3; i++) {
    alert(i)
}
alert(i)  */
// Uncaught ReferenceError: i is not defined
// Переменные объявленные внутри цикла for могут использоваться только внутри данного цикла
// В остальных случаях это вызовет ошибку

/* for (i = 0; i < 4; i++) alert(i) */
// тело цикло выполняется без указания ключевого слова let

/* let i = 0 */

/* for (i = 2; i < 5; ) {
    alert(i++)             // 2, 3, 4
} */

/* for (; i < 5;) {
    alert(i++)              // 0, 1, 2, 3, 4
} */




// # ПРОСТО КОД, БЕЗ МЕТРИК ВРЕМЕНИ И ТД



// let a = 0

/* let i = 0    

while (i < 3) {
    alert(i)            // 0, 1, 2
    i++
} */

// условие while вычисляется и преобразуется к логическому значению

/* let i = 3

do {
    alert(i)
    i--
} while (i) */

/* for (let i = 2; i < 5; i++) {
    alert(i)
}
 */


/* let sum = 0

while (true) {
    let value = +prompt('Введите число', '')
    if (!value) break
    sum += value
}
alert('Сумма: ' + sum) */

/* for (let i = 0; i < 10; i++) {
    if(i % 2 == 0) continue
    alert(i) // 1, 3, 5, 7, 9
}
 */

/* for (let i = 0; i < 10; i++){
    if (i % 2){
        alert(i)    // при остуствующей дерективе 
        // continue появляется дополнительная вложенность
    }
} */

/* for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        alert(`Значение на координатах (${i},${j})`)
    }
} */

/* outerLabel: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt (`Значение на координатах (${j},${i})`)
        if (!input) {
            break outerLabel
        }
    }
}
alert ('Цикл for завершен') */

/* outerLabel:
for (let a = 1; a < 4; a++) {
    for (let b = 1; b < 4; b++) {
        for (c = 1; c < 4; c++) {
            let input = prompt(`Значение на координатах (${a},${b},${c})`)
            if (!input) continue outerLabel
        }
    }
}
alert('Цикл for завершен') */

/* let i = 0
while (i < 3) {
    alert(`number ${i}`)
    i++
}
 */

/* let num
do {
    num = +prompt ('Введите число больше 100', '')
} while (num <= 100 && num && typeof num == 'number') */


// console.log (2 % 2)

/* 
nextPrime:
for (let f = 2; f <= 10; f++) {
    for (let h = 2; h < f; h++) {
        if (f % h == 0) continue nextPrime
        
    }
    alert(f)
} */


/* nextPrime:
for (v = 2; v <= 10; v++) {
    for (k = 2; k < v; k++) {
        if (v % k == 0) continue nextPrime
    }
    alert(v)
} */

/* let human = {
    age: 30,
    gender: 'male',
    name: 'Jhon',
    ['likes coding']: 'Yes. It is.'
}
alert (human['likes coding'])
delete human['likes coding']
console.log (human)
human['something else'] = true
human.hobby = 'sport'
console.log (human)
alert (human['something else'])
console.log (human.age) */


/* let arr = new Array ()
let arr = []
 */



/* for (let a = 0; a < 3; a++) {
    alert(a)
} */




