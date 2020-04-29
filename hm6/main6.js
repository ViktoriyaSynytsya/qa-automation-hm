

function login(email, pass) {
    emailInput.sendKeys(email).then(() => {
        passwordInput.sendKeys(pass).then(() => {
            loginButton.click()
        })
    })
}

async function login(email, pass) {
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(pass);
    await loginButton.click();
}