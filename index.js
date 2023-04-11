//문자만 들어올 수 있음
var 이름 = ['kim', 'park'];
// array자료인데 스트링만 가능
// object 자료
var 이름2 = { name: 'kim' };
var 이름3 = { name: 'kim' };
// 다양한 타입이 들어오는 union type
var 이름4 = 'kim';
var 이름5 = 'kim';
var 이름6 = 123;
// 함수에 타입지정
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: 'kim' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
