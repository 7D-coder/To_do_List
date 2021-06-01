var add= document.getElementById("ad");
let inp = document.getElementById("inp1");

let bac = document.getElementById("du");
add.addEventListener("click", addth);

function addth()
{
    alert("WE HAVE TO ADD A ITEM TO THE LIST");
    var par=  document.createElement('p');
    par.classList.add('par-styling');
    par.innerText = inp.value ;
    bac.append(par);
    inp.value = "";


    // removing...


    par.addEventListener("click",see);
    function  see()
    {
        par.style.textDecoration = "line-through";
    }

    par.addEventListener("dblclick",see_2);
    function see_2()
    {
        bac.removeChild(par);
    }
    


} 



var B1  = document.getElementById("b1");
B1.addEventListener("click", add_b1);

function add_b1()
{
    alert("WE HAVE you COMPLETED first task..!");
    
} 

var B2= document.getElementById("b2");
B2.addEventListener("click", add_b2);

function add_b2()
{
    alert("WE HAVE TO EMPTY THIS LIST..!");
    bac.remove();

} 

var B3 = document.getElementById("b3");
B3.addEventListener("click", add_b3);

function add_b3()
{
    alert("DO YOU WANT TO SAVE THE LIST...!");
}


 


