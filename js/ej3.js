// ejercicio 3.1
var link = document.getElementsByTagName('a').length;
console.log(link);

// ejercicio 3.2
var link = document.getElementsByTagName('a');
console.log(link[link.length - 2]);

// ejercicio 3.3
var link = document.getElementsByTagName('a');
var cont = 0; 

for (i=0; i < link.length; i++){
  if (link[i] == 'http://prueba/'){
    cont ++;
  };
}; 

console.log(cont);

// ejercicio 3.4
var p = document.getElementsByTagName('p')[2];
var cant_link = p.getElementsByTagName('a').length;

console.log(cant_link);
