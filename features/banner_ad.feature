

  Feature: Marvel Home Page 
  
   Scenario: Testing the ad functinality
      
       Given open url "/explore"
       When click on the element "//iframe[@id='google_ads_iframe_/21783347309/marvel.com/explore/ad-1-87_0']"
       Then expect new tab opened "no of tabs"
