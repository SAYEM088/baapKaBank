// creating a function
function getTheInputs(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue =parseFloat(inputFieldString);
    inputField.value ='';
    return inputValue;
    
}
function getTheElements(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementValue =parseFloat(elementFieldString);
    elementField.value ='';
    return elementValue;
}
 function setElementTotalByID(elementId,WhereToSet){
    const elementField = document.getElementById(elementId);
    elementField.innerText= WhereToSet;
 }
document.getElementById('btn-depo').addEventListener('click',function(){
    // for deposit
    const inputDeposit = getTheInputs('input-depo');
    const depoValue = getTheElements('show-depo');
    const newDepo = inputDeposit + depoValue ;
    setElementTotalByID('show-depo',newDepo);
    // forbalance
    const  balanceValue = getTheElements('show-balance');
    const newBalance = balanceValue + inputDeposit;
    setElementTotalByID('show-balance',newBalance);
})
document.getElementById('btn-with').addEventListener('click',function(){
    const inputWithdraw = getTheInputs('input-withdraw');
    const withValue = getTheElements('show-withdraw');
    const newWith = withValue + inputWithdraw ;
    setElementTotalByID('show-withdraw',newWith);
    const balanceW =getTheElements('show-balance');
    const newBalanceW = balanceW - inputWithdraw;
    setElementTotalByID('show-balance',newBalanceW);
})