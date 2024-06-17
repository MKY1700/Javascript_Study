let player1 = new Object();
player1.name = '레골라스'
player1.job = '레인저'
player1.race = '엘프'
player1.stats = {
    STR: 8,   // 힘
    DEX: 15,  // 민첩
    CON: 14,  // 체력
    INT: 10,  // 지능
    WIS: 14,  // 지혜
    CHA: 8    // 매력
}
console.log(player1.name)
console.log(player1.job)
console.log(player1.stats)

let player2 = {
    name: '레골라스',
    job: '레인저',
    race: '엘프',
    stats: {
        STR: 8,   // 힘
        DEX: 15,  // 민첩
        CON: 14,  // 체력
        INT: 10,  // 지능
        WIS: 14,  // 지혜
        CHA: 8    // 매력
    }
}
console.log(player2.name)
console.log(player2.job)
console.log(player2.stats)

function playerFunc(name, job, race, stats) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function() { return this.name; }
    this.getJob = function() { return this.name; }
    this.getRace = function() { return this.name; }
    this.setName = function() {  this.name = name; }
    this.setJob = function() { this.job = job; }
    this.setRace = function() {  this.race = race; }
}
let player3 = new playerFunc(
        "레골라스",
        "레인저",
        "엘프",
        {
            STR: 8,   // 힘
            DEX: 15,  // 민첩
            CON: 14,  // 체력
            INT: 10,  // 지능
            WIS: 14,  // 지혜
            CHA: 8    // 매력
        }
    )
console.log(player3.name)
console.log(player3.job)
console.log(player3.stats)

let now = new Date();

let stu1 = new Map();

// set
stu1.set('id', 0);
stu1.set('이름', '제임스');
stu1.set('전공', '컴공');
// 배열
let stu2 = new Map([
    ['id', 0],
    ['이름', '제임스'],
    ['전공', '컴공']
]);
// get
console.log(stu1)
console.log(stu1.get('id'))
console.log(stu1.get('이름'))
console.log(stu1.get('전공'))

// 프로퍼티 추가
player1.age = 200
player2.age = 200
player3.age = 200

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

// 프로퍼티 삭제
// delete 연산자
delete player1.age;
delete player2.age;
delete player3.age;

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

// 메소드 추가
player1.sayHello = function() {
    console.log("hello")
}
player2.sayHello = function() {
    console.log("hello")
}
player3.sayHello = function() {
    console.log("hello")
}

// 메소드 사용
player1.sayHello();
player2.sayHello();
player3.sayHello();

// 반복문으로 객체 순회하기
let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ": " + person[key])
}

// 반복문으로 객체 순회하기
for (let stat in player3.stats) {
    console.log(stat)
}

// 동적 접근
function show(obj, key) {
    console.log(obj[key])
}
show(player3, "job");

// 객체 배열
let cars = [
    { brand: "페라리", model: "911" },
    { brand: "포드", model: "머스탱" },
    { brand: "닷지", model: "차저" }
]

for(let i=0; 1>cars.length; i++) {
    console.log(cars[i].model)
}