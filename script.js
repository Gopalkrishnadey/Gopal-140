const name = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const mess = document.getElementById('mess');

btn.addEventListener('click',function()
{
    if(name.value==" " || email.value==" ")

        alert("please enter the details");
    else
    {
        alert("You will be reached out soon");
    }

    name.value="";
    email.value="";
    mess.value="";

});

