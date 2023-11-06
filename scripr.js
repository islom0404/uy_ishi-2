alert("1 - uy ishi")
let a = +prompt("son kiriting biz juft yoki toqligini aniqlab beramiz")
while (isNaN(a) || a == 0) {
    a = +prompt("bu son emas " + "iltimos son kiriting")
}
if (a % 2 == 0) {
    alert("Juft")
} else if (a % 2 > 0) {
    alert("Toq")
}
alert("2-uy ishi")
let d = +prompt("son kiriting")
let b = +prompt("darajasini kiriting")
let ans = 1
for (let i = 0; i < b; i++) {
    ans *= d
}
console.log(ans);
alert("3-uy ishi")
let h = + prompt("son kiriting")
for (let k = 1; k < 5; k++)
    alert(k * h)