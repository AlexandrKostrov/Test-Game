// let coincidenceArray = [];
// let time = null;
function MainFrame () {
    this.elem = document.createElement('div');
    this.elem.classList.add('sect');
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    let bool = true;
    let button = buttonCreation("Start new Game",table,"start");
    button.style.position = 'absolute';
    button.style.top = 50+'%';
    button.style.left = 45 + '%';
     async function getting(bool){
        let size = await fetch('https://kde.link/test/get_field_size.php').then(r=>r.json());
        tdArray = [];
        
       tablePrepare(size.height,size.width,tdArray);
      time = sort(randomSort,tdArray,size.height,size.width,table,button,bool);
     console.log(time);
    }
    document.addEventListener('click', (event) => {
            let target = event.target;
            if(target.tagName === 'TD' && event.target.firstElementChild){
                if(coincidenceArray.length === 2){
                    coincidenceArray[0].firstElementChild.style.visibility = 'hidden';
                    coincidenceArray[1].firstElementChild.style.visibility = 'hidden';
                    coincidenceArray = [];}
                if(coincidenceArray.length < 2 && !coincidenceArray.includes(target)){
            event.target.firstElementChild.style.visibility = 'visible';
            coincidenceArray.push(target);}
            if(coincidenceArray.length === 2){
               
                setTimeout(function(){
                    if(coincidenceArray[0].firstElementChild.style.backgroundImage === coincidenceArray[1].firstElementChild.style.backgroundImage){
                        coincidenceArray[0].firstElementChild.remove(); 
                        coincidenceArray[1].firstElementChild.remove(); 
                        if(!document.getElementsByTagName('p').length){
                           let coords = table.getBoundingClientRect();
                           let width = table.offsetWidth;
                           let height = table.offsetHeight;
                           let finish = document.createElement('div');
                           finish.classList.add('end');
                           finish.style.width = width+'px';
                           finish.style.height = height+'px';
                           // finish.innerHTML = `<div>THE END</div>`;
                           let timer = document.querySelector('.timer');
                           let start = document.querySelector('.start');
                           tbody.innerHTML = '';
                           let div = document.createElement('div');
                           div.style.width = 100+'%';
                           div.innerHTML = `Your time : ${timer.innerHTML}`;
                           let button = buttonCreation("Once more",table,"start");
                           button.classList.add('button');
                            button.addEventListener('click',() => {
                             tbody.innerHTML = '';
                               getting(false);
                             });
                           tbody.appendChild(finish);
                           
                           finish.appendChild(div);
                           finish.appendChild(button);
                           
                           timer.remove();
                           clearInterval(time);
                           coincidenceArray = [];
                           return;
                        }
                        coincidenceArray[0].innerHTML = "DONE";
                        coincidenceArray[1].innerHTML = "DONE";
                        coincidenceArray = [];
                    }else {
                    
                    }
                   
                },300)
                
            }} 
    });
   
  
    getting(bool);
    this.elem.appendChild(table);
}