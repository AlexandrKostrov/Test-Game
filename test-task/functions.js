function tablePrepare(height,width,arr){
    for (let i = 0;i < ((height * width)/2);i++)   {
    
        if(index === 9) {index = 0}
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.style.backgroundImage = "url(" + imageArr[index] + ")";
        p.style.visibility = 'hidden';
        td.appendChild(p);
        var tdClone = td.cloneNode(true);
        
        arr.push(td,tdClone);
         
        index++;
}
   }
   let randomSort = function (a, b) {
    return Math.random() - 0.5;
}

function buttonCreation(text,table,className){
    let button = document.createElement('button');
    button.classList.add(className);
button.innerHTML = text;
table.appendChild(button);
return button;
}

function timer(table){
    let span = document.createElement('span');
    span.classList.add("timer");
    table.appendChild(span);
    let seconds = 0;
    let minutes = 0;
    var interval = setInterval(() => {
       seconds++;
       seconds === 59 ? (minutes++,seconds=0 ): null;
       seconds = seconds < 10 ? '0' + seconds : seconds;
       span.innerHTML = `${minutes} : ${seconds}`
    },1000)
    return interval;
}

   function sort(sortFunc,arr,height,width,table,button,bool){
    arr.sort(sortFunc);
    var fragm = document.createDocumentFragment();
    let y = 0;
    for(let i = 0;i < height;i++){
       let tr = document.createElement('tr');
       for(let j = 0;j < width;j++){
           tr.appendChild(arr[y]);
           y++;}
     fragm.appendChild(tr);
}

if(bool){
button.addEventListener('click',() => {
  return  handler(button,table,fragm);
});}
else{
     table.querySelector('tbody').appendChild(fragm);
    return timer(table);
}
}

function handler(button,table,fragment){
    button.remove();
    // table.querySelector('tbody').innerHTML = '';
    table.querySelector('tbody').appendChild(fragment);
   return timer(table);
}