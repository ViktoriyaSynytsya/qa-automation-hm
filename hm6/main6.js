


class FieldInput {
  sendKeys(keys) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        console.log('keys sent: ' + keys); resolve(1);
      }, 2000)
    )
  }
}

class Button {

  click() {
    return new Promise((resolve, reject) =>
      setTimeout(() => { console.log('click!'); resolve(); }, 2000)
    )
  }
}

let emailInput = new FieldInput();
let passwordInput = new FieldInput();
let loginButton = new Button();

function login(email, pass) {
  emailInput.sendKeys(email).then(() => {
    passwordInput.sendKeys(pass).then(() => {
      loginButton.click()
    })
  })
}

async function loginAsync(email, pass) {
  await emailInput.sendKeys(email);
  await passwordInput.sendKeys(pass);
  await loginButton.click();
}


Promise.all([login('viktoriasynytsa@gmail.com', '12345'), loginAsync("aaaqq@mail.com", "65774")])
  .then((results) => { console.log(results) })