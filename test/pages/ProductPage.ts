

import * as telegramData from "../config/telegramData";



const prodSizeUnavailable = "Rozmiar jest niedostepny"
const prodSizeAvailable = "Rozmiar jest dostepny"



class ProductPage {


    get selectSizeButton() {
        return $("//span[contains(text(),'Wybierz rozmiar')]");
    }

    get EmailInput() {
        return $("#pdp_out-of-stock_email-input");
    }

    get sendNotifyButton() {
        return $("//button//span[contains(text(),'Powiadom mnie')]");
    }

    get availableItemText() {
        return $("//label//div//span[contains(text(),'Powiadom mnie')]");
    }



    get productTitle() {
        return $("div.title-group > h1 > span[itemprop='name']");
    }

    get buyButton() {
        return $(" ");
    }

    get productPrice() {
        return $("//span[contains(@class,'sDq_FX _4sa1cA dgII7d Km7l2y')]")
    }



 //---------------------------------------------------------------------------------------------------------------------

    

    async openProductPage(productUrl:string) {
            await browser.url(productUrl);
    }


    async checkProductPrice() {
        const prPrice:WebdriverIO.Element = await this.productPrice
        await prPrice.waitForDisplayed()
        let price = await prPrice.getText()
        console.log(price)
        telegramData.telegram.sendMessage(telegramData.jsonData.telegram_chat_id, "Current price: " + price);
    }


    async clickOnSelectSizeButton() {
        const bButton:WebdriverIO.Element = await this.selectSizeButton;
        await bButton.waitForDisplayed();
        await bButton.click();
    }


    async clickSize(size:string) {
        const _size:WebdriverIO.Element = await $("//div[label[span[div[span[contains(@class, 'sDq_FX _2kjxJ6 dgII7d')]]]]]")
        _size.waitForDisplayed()
        _size.click()
    }


    async availableItemText1(size:string) {
        const itemText:WebdriverIO.Element = await $("  ")
    }


    async typeEmailAdress(value: string) {
        const emInput:WebdriverIO.Element = await this.EmailInput
        await emInput.waitForDisplayed()
        await emInput.setValue(value)
    }


    async clickOnNotifyButton() {
        const nfyButton:WebdriverIO.Element = await this.sendNotifyButton
        await nfyButton.waitForDisplayed()
        await nfyButton.click()
    }


    async availibilityTextIsVisible() {
        
        const avaiText:WebdriverIO.Element = await this.availableItemText

        try
        {
            await avaiText.waitForDisplayed({timeout: 3000})
            console.log("displayed")
            telegramData.telegram.sendMessage(telegramData.jsonData.telegram_chat_id, "Current availability: " + prodSizeUnavailable);
            //rozmiar jest niedostepny
        }
        catch (err)
        {
            console.log("not displayed"),
            telegramData.telegram.sendMessage(telegramData.jsonData.telegram_chat_id, "Current price: " + prodSizeAvailable);
            //rozmiar jest dostepny
        }
         
    }


}

export default new ProductPage();

