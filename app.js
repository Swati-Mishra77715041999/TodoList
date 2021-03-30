let input = document.querySelector('#add')
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');


//add function
    btn.onclick = function(){
    const text = input.value;
    const li = document.createElement('li');
    li.innerText = text;
    //delete function
    li.onclick = function(e){
        e.target.remove();
    }
    list.append(li);
    input.value = " ";
}
   




