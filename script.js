function run(){
  let htmlCode=document.querySelector('#htmlCode').value;
  let cssCode=document.querySelector('#cssCode').value;
  let jsCode=document.querySelector('#jsCode').value;
  let output=document.querySelector('#output');
  output.contentDocument.body.innerHTML=htmlCode+'<style>'+cssCode+'</style>';
  output.contentWindow.eval(jsCode);
};