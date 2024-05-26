exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page

        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', {name:'Login'})

    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    

    async login(userName, passWord) {
        await this.username_textbox.fill(userName)
        await this.password_textbox.fill(passWord)
        await this.login_button.click()

    }


}