
let div1=document.querySelector('.div-1');
let inp=document.querySelector('.but');
inp.addEventListener('click', function(){
    let div2=document.createElement('div');
    div1.appendChild(div2);
    div2.innerHTML='hello';
    div2.className='nub';
    div2.style.background='#8b9dc3';
    let input2=document.createElement('input');
    div1.appendChild(input2);
    input2.type='button';
    input2.value='-';
    input2.style.width= '70px';
    input2.style.height= '30px';
    input2.style.background='#e9fa77';
    input2.addEventListener('click', function(){
        div2.remove();
        input2.remove();
    })
})



        
    