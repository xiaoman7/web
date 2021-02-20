// level 0 首字母大写
var str = 'today is a happy day'
function change(str){
    var arr = str.split(' '); //字符转化为数组 str.split(' ')中间可以加分隔符
    for(var i = 0;i<arr.length;i++){
        var char = arr[i].charAt(0); //charAt()返回指定位置即下标的字符
        arr[i] = arr[i].replace (char,function replace(char){ //.replace(被替换的，替换的文本或函数)
            return char.toUpperCase();//大小写转化 toUpperCase()和toLowerCase()
        });
    }
   return arr.join(' ');//数组转化为字符串1. arr.toString() 2.arr.join('')默认逗号，可以添加分隔符如-&空格等
}
console.log(str);
console.log(change(str));

// level 1-1 输出重复元素
var arr = ['S','S','A','J','G','B','B','A','N','N'];
function recur(arr){
    arr.sort();
    for ( i = 0;i<arr.length;i++){
        if(arr[i] === arr[i+1]){
            console.log(arr[i],arr[i+1]);
        }
    }
}
console.log(arr);
recur(arr);

//数组去重：遍历旧数组，用旧数组元素去查询新数组，如果没有就添加
var arr = ['S','S','A','J','G','B','B','A','N','N'];
function unique (arr){
    var newArr = [];
    for (var i = 0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])===-1){ //查询的是新数组中有没有该元素
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique(arr));



//level 1-2 统计次数
var arr = [1,2,4,5,4,4,6,9,4,4,6,4,7,6,8];
var n = 4;
var num = 0;
function count(arr,n){
    for(var i = 0;i<arr.length;i++){
        if(arr[i]==n){
            num++;
        }
    }
    return num;
}
count(arr,4);
console.log(arr);
console.log(num);

//level 2-1 冒泡排序
var arr = [1,4,5,6,1,2,3,7,6,8];
function paixu(arr){
    for(var i=0;i<=arr.length-1;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
paixu(arr);
console.log(arr);

//level 2-2 数组扁平化:将嵌套多层的数组转化为一层(递归循环的结果还是数组)
var arr = [[1,2],[3,4],[6,7,9,[11,12,[12,13,14]]],10]
function even(arr){ 
    brr = [];
    for(var i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){     //检测是否为数组的两种方法：1.instanceof 运算符:console.log(arr instanceof Array)会判断true和false可以用在if条件判断
            brr = brr.concat(even(arr[i]));                  //  2.Array.isArray(参数);
        }
        else{
            brr.push(arr[i]);
        }
    }
    return brr;
}
even(arr);
console.log(arr);
console.log(brr);

//level 2-3 sort实现按照对象数组的某个属性排序
var arr = [{name:'gn',id:17},{name:'bn',id:29},{name:'nn',id:3},{name:'gb',id:37},{name:'mm',id:19}];
arr.sort(function(a,b){
    return a.id-b.id;
});
console.log(arr)

