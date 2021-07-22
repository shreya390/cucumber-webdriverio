const { Given} = require('@cucumber/cucumber');
const { assert } = require('chai');

Given("open url {string}",(url) => {
    browser.url(url);
    browser.maximizeWindow();  
});
