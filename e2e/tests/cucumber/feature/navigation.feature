Feature: Top IMDB movies list
    As a user I should be able to go to imdb website
    and list all top rated movies

    @tag1
    Scenario: Check if top rated IMDB movies are listed on a page
    Given As a user I navigate to IMDB site
    And I open Menu bar
    When I click on the "Top Rated Movies"
    Then Verify the page title "IMDb Top 250 - IMDb"