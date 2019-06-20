
let div1=document.querySelector('.div-1');
let inp=document.querySelector('.but');
let input2=document.querySelector('.input2')
inp.addEventListener('click', function(){
    let div2=document.createElement('div');
    let span=document.createElement('span');
    let input3=document.createElement('input');
    
    div1.appendChild(span);
    div1.appendChild(div2);
    div2.innerHTML=input2.value;
    
    div1.appendChild(input3);
    span.style.display='block';
    div2.className='nub';
    div2.style.fontSize='17px';
    input3.type='button';
    input3.value='-';
    
    for(let i=0; i<document.querySelectorAll('span').length; i++){
        document.querySelectorAll('span')[i].innerHTML=i+1;
    };

    input3.addEventListener('click', function(){
        /* h1.remove();
        input2.remove();
        span.remove(); */
        div1.removeChild(div2);
        div1.removeChild(span);
        div1.removeChild(input3);
        
        for(let j=0; j<=document.querySelectorAll('span').length; j++){
            document.querySelectorAll('span')[j].innerHTML=j+1;            
        }; 
        
    })
})



        
    