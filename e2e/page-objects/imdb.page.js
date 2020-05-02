'use strict'

var IMDBpage = function () {

    this.navigateToImdbSite = async function (URL) {
        await browser.get(URL);
    };

    this.goToMenuList = async function () {
        await element(by.xpath("//label[@id='imdbHeader-navDrawerOpen--desktop']")).click();
       
    };

    this.clickOnTopRatedMoviesLink = async function (text) {
        await element(by.xpath("//a[@href='/chart/top/?ref_=nv_mv_250']//span[text()='" + text + "']")).click();
    };

    this.verifyThePageTitle = async function () {
        return await browser.driver.getTitle();
    };

};
module.exports = new IMDBpage();