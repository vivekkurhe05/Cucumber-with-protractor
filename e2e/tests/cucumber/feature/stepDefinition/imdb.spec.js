let imdbPage = require('../../../../page-objects/imdb.page');
const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;

Given('As a user I navigate to IMDB site', function () {
    imdbPage.navigateToImdbSite('https://www.imdb.com/');
})

Given('I open Menu bar', function () {
    imdbPage.goToMenuList();
})

When('I click on the {string}', function (text){
    imdbPage.clickOnTopRatedMoviesLink(text);
})

Then('Verify the page title {string}', function (title){
    imdbPage.verifyThePageTitle(title);
    expect(title).to.be.equal("IMDb Top 250 - IMDb");
})






















// Then('Display total movies count', async function () {
//     var total_movie_titles = await imdbPage.getTotalMovieTitles();
//     var total_movie_release_years = await imdbPage.getTotalMovieReleaseYears();
//     var total_movie_ratings = await imdbPage.getTotalMovieRatings();

//     for(var i=0;i<80;i++){
//         process.stdout.write(`${"-"}`);
//     }

//     expect(total_movie_titles).equal(250);
//     console.log("Total movies title ", total_movie_titles);
//     expect(total_movie_release_years).equal(250);
//     console.log("Total movies years ", total_movie_release_years);
//     expect(total_movie_ratings).equal(250);
//     console.log("Total movies ratings ", total_movie_ratings);
// })
