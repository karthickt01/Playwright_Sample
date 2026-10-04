/* Browser -> actual browser engine
Context -> isolated and incognito window
Page -> tab or page specific to the context */

import { chromium, test } from "@playwright/test";
import { log } from "console";

test('learn to lauch the browser', async () => {
    let browser = await chromium.launch()
    let context = await browser.newContext()
    let newPage = await context.newPage()

    await newPage.goto("https://www.amazon.in/")
    //store it in the variable and print
    const URL = newPage.url()
    console.log(URL);
    //title
    const title = await newPage.title()
    console.log(title);

})

//page fixture:
test.only('learn to launc browser suig page fixture', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
})