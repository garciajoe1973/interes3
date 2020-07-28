
let flag = 0;
function formulaFinanciera() {
     


	var a = "a";
	if (document.fformula.formula[0].checked) { a = "Co"};
	if (document.fformula.formula[1].checked) { a = "Cf"};
	if (document.fformula.formula[2].checked) { a = "i"};
	if (document.fformula.formula[3].checked) { a = "n"};


    hh.innerHTML="Elegisteee como incognita: "+ a;
   // document.getElementById(hh).innerHTML = 'Nuevo titulo';
   var intro = document.getElementById('hclave');
   intro.style.padding = "10px";


     hclave.innerHTML="Calculo ";

   //document.h1clave.innerHTML="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz              ";
     if (a == "Co") {
     	  if (flag == 1) { l1.innerHTML=""}; 
    // 	  var intro = document.getElementById('container');
     //         intro.style.background = "red";  

     	  //    container.innerHTML="";
              var input = document.createElement("input");
              input.type="number";
              input.name="Cf";
              input.value="1000000";
              l1.appendChild(input);

              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Capital Final Cf ");
              l1.appendChild(labell);
              l1.appendChild(document.createElement("br"));
              l1.appendChild(document.createElement("br"));
 

              
              var input = document.createElement("input");
              input.type="number";
              input.name="i";
              input.id = "i";
              input.step ="any";
              input.value= ".05";
              l1.appendChild(input);

              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Interes i");
              l1.appendChild(labell);
              l1.appendChild(document.createElement("br"));
              l1.appendChild(document.createElement("br"));


              var input = document.createElement("input");
              input.type="number";
              input.name="n";
              input.value="20";
              l1.appendChild(input);

              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa la cantidad de periodos n");
              l1.appendChild(labell);
              l1.appendChild(document.createElement("br"));
              l1.appendChild(document.createElement("br"));

             


              var input= document.createElement("input");
              input.type="button";
              input.id = "clickMe";
              input.name="z";
              input.value="Calcular: " + a;
              l1.appendChild(input);
              
            
                 jj.innerHTML="El Capital Inicial es :           ";
                  flag = 1 ;
              document.getElementById("clickMe").onclick = function () { 
              	                        	
                    //                if (flag == 1) { l1.innerHTML=""};
                                       var cff = ii =nn = 0 ;
                                       var Cff = document.getElementsByName("Cf")[0].value;
                                       var ii = document.getElementsByName("i")[0].value;
                                       var nn = document.getElementsByName("n")[0].value;
             
                                    
                                       var Coo = parseInt(Cff) / Math.pow ((1 + parseFloat (ii)), parseInt(nn)) ;
                                           Coo = Coo.toFixed(2);
	                              

                                                  jj.innerHTML="El Capital Inicial es : Co =  "+ Coo;

                                                        	             
	                                             alert( '   El Capital Inicial Co es : '+ Coo ) ;
	                flag = 1;
	                                                   }
                                
               //           flag = 1;
                          }
       
           if (a == "Cf") { 
           
                 if (flag == 1) { l1.innerHTML=""};             
               jj.innerHTML="El Capital Final es : ";

              var input = document.createElement("input");
                  input.type="number";
                  input.name="Co";
                  input.value="1000000";
                  l1.appendChild(input);            
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Capital Inicial Co ");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br")); 
                           
              var input = document.createElement("input");
                  input.type="number";
                  input.name="i";
                  input.id = "i";
                  input.step ="any";
                  input.value= ".05";
                  l1.appendChild(input);
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Interes i");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br"));

              var input = document.createElement("input");
                  input.type="number";
                  input.name="n";
                  input.value="20";
                  l1.appendChild(input);
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa la cantidad de periodos n");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br"));

                 
              var input= document.createElement("input");
                  input.type="button";
                  input.id = "clickMe";
                  input.name="z";
                  input.value="Calcular Cf: " + a;
                  l1.appendChild(input);
              
              flag = 1;             

              document.getElementById("clickMe").onclick = function () {             	                        	
                                       var coo = ii =nn = 0 ;
                                       var Coo = document.getElementsByName("Co")[0].value;
                                       var ii = document.getElementsByName("i")[0].value;
                                       var nn = document.getElementsByName("n")[0].value;

                                       var Cff = parseInt(Coo) * Math.pow ((1 + parseFloat (ii)), parseInt(nn)) ;
                                           Cff = Cff.toFixed(2);

                                                 jj.innerHTML="El Capital Final es : Cf =  "+ Cff;
                                                 alert( '   El Capital Final Cf es : '+ Cff ) ;
	                                             flag = 1;
                                                }

             


            }                       
            if (a == "i") { 
           
                 if (flag == 1) { l1.innerHTML=""};             
               jj.innerHTML="El Interes es : ";

              var input = document.createElement("input");
                  input.type="number";
                  input.name="Co";
                  input.value="1000000";
                  l1.appendChild(input);            
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Capital Inicial Co ");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br")); 
                           
              var input = document.createElement("input");
                  input.type="number";
                  input.name="Cf";
                  input.value= "2000000";
                  l1.appendChild(input);
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Capital Final Cf");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br"));

              var input = document.createElement("input");
                  input.type="number";
                  input.name="n";
                  input.value="13";
                  l1.appendChild(input);
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa la cantidad de periodos n");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br"));

                 
              var input= document.createElement("input");
                  input.type="button";
                  input.id = "clickMe";
                  input.name="z";
                  input.value="Calcular : " + a;
                  l1.appendChild(input);
              
              flag = 1;             

              document.getElementById("clickMe").onclick = function () {             	                        	
                                       var coo = Cff =nn = 0 ;
                                       var Coo = document.getElementsByName("Co")[0].value;
                                       var Cff = document.getElementsByName("Cf")[0].value;
                                       var nn = document.getElementsByName("n")[0].value;

                                       var ii = Math.pow ((parseInt(Cff) / parseInt(Coo)),(1/parseInt (nn))) - 1; 
                                           ii = ii.toFixed(3);
                                                 jj.innerHTML="El Interes es : i =  "+ ii;
                                                 alert( '   El Interes i es : '+ ii ) ;
	                                             flag = 1;
                                                }

             


            }                       
             if (a == "n") { 
           
                 if (flag == 1) { l1.innerHTML=""};             
               jj.innerHTML="La cantidad de periodos n son: ";

              var input = document.createElement("input");
                  input.type="number";
                  input.name="Co";
                  input.value="1000000";
                  l1.appendChild(input);            
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Capital Inicial Co ");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br")); 
                           
              var input = document.createElement("input");
                  input.type="number";
                  input.name="Cf";
                  input.value= "2000000";
                  l1.appendChild(input);
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el Capital Final Cf");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br"));

              var input = document.createElement("input");
                  input.type="number";
                  input.name="i";
                  input.step ="any";
                  input.value=".08";
                  l1.appendChild(input);
              var label = document.createElement("label");
              var labell = document.createTextNode("  Ingresa el interes i ");
                  l1.appendChild(labell);
                  l1.appendChild(document.createElement("br"));
                  l1.appendChild(document.createElement("br"));

                 
              var input= document.createElement("input");
                  input.type="button";
                  input.id = "clickMe";
                  input.name="z";
                  input.value="Calcular : " + a;
                  l1.appendChild(input);
              
              flag = 1;             

              document.getElementById("clickMe").onclick = function () {             	                        	
                                       var Coo = Cff =ii = 0 ;
                                       var Coo = document.getElementsByName("Co")[0].value;
                                       var Cff = document.getElementsByName("Cf")[0].value;
                                       var ii = document.getElementsByName("i")[0].value;

                                       var nn = (Math.log (parseInt(Cff) / parseInt(Coo))) / (Math.log (1 + parseFloat(ii)));
                                           nn = nn.toFixed(2);
                                                 jj.innerHTML="la cantidad de  periodos : n =  "+ nn;
                                                 alert( '   La cantidad de periodos n es : ' +nn ) ;
	                                             flag = 1;
                                                }

             


            }                       
                                         
                                        
                  
 }



function hora() {  

 var e =  document.getElementsByClassName('grid-item');  
 var l = e.length ;
      
         var arr = Array.from(e);
         var nodo = arr[12].nodeName ;
         var hijos = e.childNodes;
         arr[12].style.background = "yellow";
         arr[12].innerHTML= "Reservado";


for(let i = 11;i < l;i++){
  arr[i].innerHTML="***IronJoe***"+ i;
  }


 alert ("Tu horario elegido es : Lunes Miercles y Viernes de 11 a 12 hs " + hijos) ;
}