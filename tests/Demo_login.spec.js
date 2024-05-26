
import { test, expect } from '@playwright/test';
import {loginPage} from '../pages/login'


test('test', async ({ page }) => {

    const login = new loginPage(page)

    await login.gotoLoginPage()
    await login.login('tomsmith', 'SuperSecretPassword!')
  
});