

class SearchResultPage {

    get pageTitle() {
        return $("div > h1 > div > span")
    }

    get choosenItem() {
        return $("div > article > a:nth-child(2)")
    }

    get confirmButton() {
        return $("button#uc-btn-accept-banner");
    }

    get searchedItem() {
        return $("figure>div.JT3_zV");
    }



    async clickOnConfirmButton() {
        const confirmBtn:WebdriverIO.Element = await this.confirmButton;
        await confirmBtn.waitForDisplayed();
        await confirmBtn.click();
    }


    async clickOnChoosenItem() {
        const choosenItem:WebdriverIO.Element = await this.searchedItem;
        await choosenItem.waitForDisplayed();
        await choosenItem.click();
    }


    async clickOnchoosenItem() {
        const bookItem:WebdriverIO.Element = await this.choosenItem;
        await bookItem.waitForDisplayed();
        await bookItem.click();
    }


    async getPageTitle():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText();
    }

}


export default new SearchResultPage();