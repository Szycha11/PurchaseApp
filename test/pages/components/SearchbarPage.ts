

class SearchBarPage {
    

    get searchInput() {
        return $("input#header-search-input");
    }

    get searchedPhrase() {
        return $("div#header-search-dropdown > div > ul > li");
    }

    get confirmButton() {
        return $("button#uc-btn-accept-banner");
    }



    get suggestPopup() {
        return $(" ");
    }

    get searchIcon() {
        return $(" ");
    }

    get geAlert() {
        return $(" ")
    }





    async getAlertContent():Promise<string> {
        const alert:WebdriverIO.Element = await this.geAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }


    async clearSearchBar() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }


    async getInputValue():Promise<string> {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }


    async searchBarisVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }


    async clickOnSearchIcon() {
        const Icon:WebdriverIO.Element = await this.searchIcon;
        await Icon.waitForDisplayed();
        await Icon.click();

    }


    async typeSearchPhrase(value: string) {
        const input:WebdriverIO.Element = await this.searchInput;  
        await input.waitForDisplayed();
        await input.setValue(value);
        
    }


    async suggestPopupIsVisible() {
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();
    }


    async clickOnSearchedPhrase() {
        const searchedPhraseBtn:WebdriverIO.Element = await this.searchedPhrase;
        await searchedPhraseBtn.waitForDisplayed();
        await searchedPhraseBtn.click();
    }

    
}


export default new SearchBarPage();
