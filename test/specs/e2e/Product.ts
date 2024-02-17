
import GlobalPage from "../../pages/GlobalPage";
import { zalandoHomeUrl, searchPageUrl, notFoundUrl, searchProductUrl, openZalandoHomeUrl } from "../../config/pagesUrl";
import SearchBarPage from "../../pages/components/SearchbarPage";
import { searchPhrasee, searchResultTitle, incorrectSearchPhrase, expectedPhrase, alertMessage, deletedProdctMessage, emailAdress } from "../../config/data";
import SearchResultPage from "../../pages/SearchResultPage";
import SearchbarPage from "../../pages/components/SearchbarPage";
import ProductPage from "../../pages/ProductPage";






// Test weryfikuje poprawność kroków zakupu produktu
describe("E2E - Products", async () => {

    let productTitle: string = "";
    let price: string = "";
    let notifyInfo: string = "Powiadom mnie";



    it("Should open product page", async () => {
        await ProductPage.openProductPage(searchProductUrl)
        browser.pause(1000);
    })

    it("Should click on confirmButton", async () => {
        await browser.pause(1000);
        await SearchResultPage.clickOnConfirmButton();
    })

    
    it("Should click on select size button", async () => {
        await ProductPage.clickOnSelectSizeButton();
        await browser.pause(1000);    
    })


    it("Should verify product availability", async () => {
        await expect(await ProductPage.availibilityTextIsVisible()).toContain(notifyInfo);
    })


    it("Should click on choosen size", async () => {
        await ProductPage.clickSize("44")
        await browser.pause(2000);
    })


    it("Should type E-mail adress", async () => {
        await ProductPage.typeEmailAdress(emailAdress)
        await browser.pause(3000);
    })

    
    it("Should click on notify Button", async () => {
        await ProductPage.clickOnNotifyButton();
        await browser.pause(2000);
    })



})

































