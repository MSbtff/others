//문자만 들어올 수 있음
let 이름 :string[] = ['123', 'park'];
// array자료인데 스트링만 가능

// object 자료
let 이름2 : {name: string} = {name: '123'}
let 이름3 : {name?: string} = {name: 'kim'}

// 다양한 타입이 들어오는 union type
let 이름4 : string | number = 'kim'
let 이름5 : string | number[] = 'kim'


// 타입은 변수에 담아쓸 수 있음 type alias
type 내타입 = string | number;
let 이름6 : 내타입 = 123;

// 함수에 타입지정
function 함수(x: number) :number {    //괄호 밖에는 리턴값에 타입 정해주는거
    return x * 2
}

function 함수2(x: number) :void {
    1 + 1 //void 타입을써서 리턴하지 말라는 걸로 활용가능
}

// Narrowing 방법을 사용하는데  typeof 연산자 타입을 거른다
function 내함수(x: number|string){
    if(typeof x === 'string'){
        return x + 1
    } else {
        return x + 1
    }
}

function 내함수2(x : number|string){
    let array : number[] = [];
    if(typeof x === 'number'){ //typeof는 number가 맞는지 아닌지 확인해줌
        array[0] = x;

    }
}

//narrowing 으로  판정해주는 in, instanceof 그냥 현재 변수의 타입이 뭔지 특정지을수있으면 다 인정해줌

// assertion 문법(타입 덮어쓰기)  
// 1.주의사항은 narrowing 할때
// 2.무슨타입이 들어올지 100%확실할때 문자가 올지 넘버가 올지 확신할때 그래서 대부분 if narrowing으로 함
// 3. 진짜 무슨 코드인지 모를때 as를 씀 비상용으로 
function 내함수3(x: number|string){
    let array: number[]=[];
    array[0] = x as number; //as 써서 x를 넘버라고 인식하게 해줌
}



//함수에서 자바스크립트와 다른점은 타입지정된 파라미터가 필수임

//파라미터 입력해도되고 안해도되는 타입은 x?: number 이렇게 만들면 된다.

//?가 중요한이유는 변수 :number|undefined와 같음 

//array에 쓸 수 있는 tuple 타입

type Member = [number, boolean]; //무조건 첫재는 넘버, 둘째는 boolean
let john:Member = [123, true]

// object에 타입지정해야할 속성이 너무 많으면
type Meber1 = {
    [key: string]: string,    //[key: string]는 오브젝트 속성을 뜻으로 문자로 오는 object을 string으로 해야한다
}
let john2 : Meber1 = {name:'kim'}

class User {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}
//타입스크립트의 엄격함에 대해 간단한 수학연산도 타입이 맞아야한다.
let 이름7: unknown;

let 나이 : string|number;
//나이 -1 // 이타입은 안됨 unknown도 안됨 숫자

//나중에 Narrowing/Assrtion 배우면 된다.