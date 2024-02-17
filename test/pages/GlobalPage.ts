

class GlobalPage {
    async openPage(pageUrl:string, expectedPageUrl) {
        await browser.url(pageUrl);
        await expect(browser).toHaveUrl(expectedPageUrl);
        browser.pause(3000);
    }


}

export default new GlobalPage();