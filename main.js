
let div1=document.querySelector('.div-1');
let inp=document.querySelector('.but');
let input3=document.querySelector('.input2')
inp.addEventListener('click', function(){
    let input2=document.createElement('input');
    let h1=document.createElement('h1');
    div1.appendChild(h1);
    div1.appendChild(input2);
    h1.innerHTML=input3.value;
    h1.className='nub';
    h1.style.fontSize='12px';
    input2.type='button';
    input2.value='-';
    input2.style.width= '70px';
    input2.style.height= '30px';
    input2.style.background='#e9fa77';
    input2.addEventListener('click', function(){
        h1.remove();
        input2.remove();
    })
})



        
    