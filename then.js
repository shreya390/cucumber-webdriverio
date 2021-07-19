const {Then } = require('@cucumber/cucumber');
const { assert } = require('chai');
Then ("expect new tab opened {string}",(no_of_tabs) =>{
    const  handles = browser.getWindowHandles();
    no_of_tabs=handles.length
    console.log("no of tabs opened ",no_of_tabs);
    assert.ok(no_of_tabs==2);
});

Then("I expect the elements {string} position  is not equal to  the saved position",(locator)=>{
    var comic_card=$(locator);
    var after_location=Number(comic_card.getLocation('y'));
    console.log("the position after hovering is ",after_location);
    assert(before_location!=after_location);
});