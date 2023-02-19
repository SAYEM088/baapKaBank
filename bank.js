// deposit
document.getElementById('btn-depo').addEventListener('click',function(){
//    for deposit
    const inputDepo = document.getElementById('input-depo');
    const inputDepoString = inputDepo.value;
    const inputDeposit = parseFloat(inputDepoString);
    const depoValue = document.getElementById('show-depo');
    const depoValueString = depoValue.innerText;
    const showDepo = parseFloat(depoValueString);
    const newDeposit = inputDeposit + showDepo;
    depoValue.innerText = newDeposit;
    inputDepo.value ="";
// for balance
    const showBalance = document.getElementById('show-balance');
    const showBalanceString = showBalance.innerText;
    const balanceOld = parseFloat(showBalanceString);
    const newBalance = inputDeposit + balanceOld;
    showBalance.innerText = newBalance;
})

// withdraw
 document.getElementById('btn-with').addEventListener('click',function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawString = inputWithdraw.value;
    const withdrawValue = parseFloat(inputWithdrawString);
    // for showing withdraw
    const showWithdraw = document.getElementById('show-withdraw');
    const showWithdrawString = showWithdraw.innerText;
    showWithdraw.innerText =withdrawValue;
    //  for balance reduce
    const showBalance = document.getElementById('show-balance');
    const showBalanceString = showBalance.innerText;
    const balanceOld = parseFloat(showBalanceString);
    const newBalance = balanceOld-withdrawValue;
    showBalance.innerText = newBalance;
    inputWithdraw.value ='';
 })