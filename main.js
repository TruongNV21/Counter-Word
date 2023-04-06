const input = document.querySelector('#textArea');
const characterCount = document.querySelector('.characters.count');
const wordCount = document.querySelector('.word.count');
const sentence = document.querySelector('.sentence.count');

// const str = 'Trong phòng có 3 người.\nDDo la nhuwg ai?      '
// console.log(str.match(/[\w|\)][.?!](\s|$)/g))
input.addEventListener('keyup',(event)=>{
        let str = input.value;
        let arr = str.split(/\s+/g);
        characterCount.textContent = str.split('').length;
        wordCount.textContent = str.trim().split(/\s+/g).length    
        sentence.textContent = str.match(/[\w|\)][.?!](\s|$)/g).length;
})

