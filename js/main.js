let burger=document.getElementById('burger')
let input=document.getElementById('input')
let exit=document.getElementById('exit')
burger.addEventListener('click',run)
function run() {
    input.setAttribute('style' , 'display:flex')
}
exit.addEventListener('click', resut)
function resut() {
   input.setAttribute('style' , 'display:none') 
}

//input value

let frist=document.getElementById('frist')
let last=document.getElementById('last')
let email=document.getElementById('email')
let messaga=document.getElementById('message')
let btn=document.getElementById('btn')
btn.addEventListener('click', ()=>{
   let elemet=document.createElement('h1')
   elemet.textContent='Frist name: '+ frist.value
   messaga.appendChild(elemet)

   let l=document.createElement('h1')
   l.textContent='Last name: '+ last.value
   messaga.appendChild(l)

   let e=document.createElement('h1')
   e.textContent='Last name: '+ email.value
   messaga.appendChild(e)
})

//slayder
// let cards=document.getElementById('cards')
// let card=document.getElementById('card')
// let card_btn=document.getElementById('card_btn')

// let i= 0

// function run() {
    
//     if(i >card.length-1){
//         i=0
//     }else if(i<0){
//         i=card.length-1
//     }
//     cards.style.transform=`translateY( ${-i *634}px)`
// }
// card_btn.addEventListener('click', function change(){
//     i++;
//     run()
// });