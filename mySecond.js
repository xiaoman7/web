//level 1
const user = {
    name: "John",
    years: 30
  };
  let {name, years:age, isAdmin: isAdmin = 'False'} = user;
  console.log(name);
  console.log(age);
  console.log(isAdmin);
  
//level 2 
//1.递归实现
var ary = [1, [2, [3, [4, 5]]], 6];
function even (ary) {     
  brr = [];
  for(i = 0;i<ary.length;i++){
    if(Array.isArray(ary[i])){
      brr = brr.concat(even(ary[i]));
    }
    else{
      brr.push(ary[i]);
    }
  }
  return brr;
  
}
 //[1,2,3,4,5,6]
console.log(even(ary));


//2.toString+split 或者 join+split 粗暴破坏多维数组
var ary = [1, [2, [3, [4, 5]]], 6];
function even (arr) {
  let brr = [];
  brr = arr.toString().split(',');
  return brr;
}
 //[1,2,3,4,5,6] 
console.log(even(ary)); 

//level 3 ???
//1.
function Animal(){
  this.species = "动物";
  　　}
function Cat(name,color){
  this.name = name;
  this.color = color;
    　}
var cat1 = new Cat("大毛","黄色");
var cat1 = new Animal();
console.log(cat1.species);

//!!!!!!!?????2.拷贝.......
function Animal(){
  Animal.prototype.species = "动物"; 
  　　}
function Cat(name,color){
  this.name = name;
  this.color = color;
    　}
function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;    
  for (var i in p) {    
    c[i] = p[i];  
  }    
  c.uber = p; 
  }
extend2(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);

//level 4  递归实现的深拷贝
var data = {
  age: 18,
  name: "liuruchao",
  education: ["小学", "初中", "高中", "大学", undefined, null],
  likesFood: new Set(["fish", "banana"]),
  friends: [
        { name: "summer",  sex: "woman"},
        { name: "daWen",   sex: "woman"},
        { name: "yang",    sex: "man" }  ], 
  work: { 
          time: "2019", 
          project: { name: "test",obtain: ["css", "html", "js"]} 
        }, 
  play: function() {    console.log("玩滑板");  }
}
deepCopy = function (obj){
  let newObj = null;
  if(typeof(obj) === 'object'){
    newObj = obj instanceof Array?[]:{};    //语法：object instanceof constructor  用来检测 constructor.prototype 是否存在于参数 object 的原型链?上
    for(var i in obj){
      newObj[i] = deepCopy(obj[i]);
    }
  }
  else{
    newObj = obj;
  }
  return newObj;
}
var obj2 = deepCopy(data);
obj2.name = 'tangxiaoman';
console.log(data,obj2); 


