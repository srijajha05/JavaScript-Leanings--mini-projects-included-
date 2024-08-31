a='Apple!';
b="Banana";
a=a&b;
document.write(a)
window.prompt("Enter your age","Yourage");
arr = [85,97,44,37,76,60];
for(let a of arr){
    document.write("Your mark is"+ a );
}

let sum = 0;
for (let i =0;i<arr.length;i++){
    sum+=arr[i];
}
document.write(sum);
avg=sum/arr.length;

document.write(avg);

