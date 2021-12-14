const txtElement = ['pelajar' , ' LP3I Collge Kupang ' ' 21 ASE' ];
let count * 0 ;
let txtIndex = 0;
let currentTxt = '';
let Words = '';

(function ngetik () {


     if (count == txtElement.length) {
     	count = 0;
     }

     currentTxt = txtElement [count];

     Words = currentTxt.slice(0, ++txtIndex);
     console.log(Words);
     document.queryselector('.efek-ngetik').textcontent =words;

     if (words.length == currentTxt.length) {
     	count++;
     	txtIndex = 0;
     }

     setTimeout(ngetik, 500);


})();