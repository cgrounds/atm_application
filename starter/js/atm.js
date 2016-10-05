console.log("clint");
$(document).ready(function () {
  $('#depositChecking').on('click', checkingAccountDepost)
  $('#withdrawChecking').on('click', checkingAccountWithdrawl)
  $('#depositSavings').on('click', savingsAccountDeposit)
  $('#withdrawSavings').on('click', savingsAccountWithdrawl)
  $('#withdrawChecking').on('click', overdraftProtection)
});

  $('body').css('background-color','red');
//Begin with the document ready function

    //Checking account deposit function
      // var checkingInput = $('#amountChecking').val()

      // var checkingWithdawBalance = checkingInput -= checkingBalance


    function checkingAccountDepost() {
      var checkingBal = $('#checkingBalance').text().replace('$','');
      var checkingNum = parseInt(checkingBal);
      var checkingInput = $('#amountChecking').val()
      var checkingNumTwo = parseInt(checkingInput);
      checkingBal = checkingNum+checkingNumTwo;
      $('#checkingBalance').text('$'+checkingBal)
    };

    //Checking account withdrawl funtion
    function checkingAccountWithdrawl() {
      var checkingBal = $('#checkingBalance').text().replace('$','');
      var checkingNum = parseInt(checkingBal);
      var checkingInput = $('#amountChecking').val()
      var checkingNumTwo = parseInt(checkingInput);
      checkingBal = checkingNum-checkingNumTwo;
      // if (checkingBal<0) {
      //   return alert('Your account is too low!')
      // }
      // $('#checkingBalance').text('$'+checkingBal)
    }
      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function
    function savingsAccountDeposit() {
      var savingsBal = $('#savingsBalance').text().replace('$','');
      var savingsNum = parseInt(savingsBal);
      var savingsInput = $('#amountSavings').val()
      var savingsNumTwo = parseInt(savingsInput);
      savingsBal = savingsNum+savingsNumTwo;
      $('#savingsBalance').text('$'+savingsBal)
    };
      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion
    function savingsAccountWithdrawl() {
      var savingsBal = $('#savingsBalance').text().replace('$','');
      var savingsNum = parseInt(savingsBal);
      var savingsInput = $('#amountSavings').val()
      var savingsNumTwo = parseInt(savingsInput);
      savingsBal = savingsNum-savingsNumTwo;
      // if (savingsBal<0) {
      //   return alert('Your account is too low!')
      // }
      $('#savingsBalance').text('$'+savingsBal)
    }

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection
function overdraftProtection() {
  var savingsBal = $('#savingsBalance').text().replace('$','');
  var savingsNum = parseInt(savingsBal);
  var savingsInput = $('#amountSavings').val()
  var savingsNumTwo = parseInt(savingsInput);
  var checkingBal = $('#checkingBalance').text().replace('$','');
  var checkingNum = parseInt(checkingBal);
  var checkingInput = $('#amountChecking').val()
  var checkingNumTwo = parseInt(checkingInput);

  if (checkingNum == 0 && savingsNum > 0) {
    savingsNum = savingsNum - checkingNumTwo;
    checkingNum = checkingNum + checkingNumTwo;
    $('#checkingBalance').text('$'+checkingNum)
    $('#savingsBalance').text('$'+savingsNum)
  } else{
    alert('YOU BROKE!!')
  };
};

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
