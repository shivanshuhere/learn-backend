import './style.css'
import axios from 'axios';
const wrap = document.querySelector('.wrap')

const jokes =[]

axios('/api/meme')
.then((response)=> {
  response.data.forEach(joke => {
    jokes.push(joke.joke)
  })
})


window.addEventListener('click', ()=> {

  wrap.innerHTML = ``
  jokes.forEach(joke =>{
    let newJoke = document.createElement('h3')
    newJoke.textContent = `${joke}`
    wrap.appendChild(newJoke)
    console.log(newJoke)
  })
  
})
