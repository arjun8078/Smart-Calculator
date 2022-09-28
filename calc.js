//display number
function disp(num)
{
    result.value += num;
}

//clear textbox
function clearBox()
{
    result.value= "";
}

//evaluate expression
function evaluateExp()
{
    exp=result.value;
    output=eval(exp);
    result.value=output;
}

//remove last item from textbox
function removeLast(){
    currenteExp=result.value;
    result.value=currenteExp.slice(0,-1)
}