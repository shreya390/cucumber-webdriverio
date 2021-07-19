const { Given} = require('@cucumber/cucumber');
const { assert } = require('chai');

var no_of_tabs=0;
var before_location='';

Given("open url {string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();   
    expect(url).toEqual("/explore");
});
