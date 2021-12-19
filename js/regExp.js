// создать регулярку для ввода телефона в формате

// +375(хх)ххх-хх-хх

// где х любые цифры, все остальное пользователь должен ввести включая +375 скобки и тире

// проверить строку на соответствие регулярки, примеры ниже

const t1 = '+375(33)123-45-67'; 
const t2 = '+375(29)543-54-22';
const t3 = '+375(44)875-43-87';
const t4 = '+37(33)123-45-67'; 
const t5 = '+375(3)123-45-67'; 
const t6 = '+375(29)31-543-32';
const t7 = '+375(33)4337642';
const t8 = 'tel +375(29)564-65-11';

const regTel = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/;

console.log(regTel.test(t1)); //true
console.log(regTel.test(t2)); //true
console.log(regTel.test(t3)); //true
console.log(regTel.test(t4)); //false
console.log(regTel.test(t5)); //false
console.log(regTel.test(t6)); //false
console.log(regTel.test(t7)); //false
console.log(regTel.test(t8)); //false

