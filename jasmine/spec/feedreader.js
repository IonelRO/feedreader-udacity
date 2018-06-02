/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() { /* RSS feed testing unit */ 
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
it("has an URL defined and the URL is not empty", function() {
            allFeeds.forEach(function(feed) {fined
                expect(feed.url).toBeDefined(); /* test feed to be defined*/
                expect(feed.url.length).not.toBe(0); /* test feed not to be empty*/
                expect(feed.url).toMatch(/^(http|https):\/\//); /* test feed prefix start*/
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined and the name is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined(); /* test feed name to be defined*/
        expect(feed.name).not.toBe(''); /* test feed name not to be empty*/
      });
    });
    });


    /* TODO: Write a new test suite named "The menu" */
describe("The menu", function() { /* sencond test unit - menu*/
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
    it('the menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true); /* test if by defaul menu is hiden*/
    });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    it('the menu display when clicked and does it hide when clicked again', function() {
       const menuDisply = $('.menu-icon-link'); /* test menu change on click*/
       menuDisply.click();
       expect($('body').hasClass('menu-hidden')).toBe(false);
       menuDisply.click();
       expect($('body').hasClass('menu-hidden')).toBe(true);
    });
});  
    /* TODO: Write a new test suite named "Initial Entries" */
describe("Initial Entries", function() { /* third test units - entries*/
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      beforeEach(function(done) { /* load feed*/
            loadFeed(0, function() {
            done();
            });
        });
    it('when the loadFeed function is called has a single .entry within the .feed container', function(done) {
       const  entries = $('.entry');
       expect(entries.length).toBeGreaterThan(0); /* Test if feed entris aren't empty*/
      done();
    });
    });   
    /* TODO: Write a new test suite named "New Feed Selection" */
describe("New Feed Selection", function() { /* New feed test unit*/
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
        */
    let initFeedContent; /* variable define*/
    let newFeedContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initFeedContent = document.querySelector(".feed").innerHTML;
                loadFeed(1, function() {
                done();
                });
            });
        });

    it('when new feed is loaded content actually changes', function(done) {
            newFeedContent = document.querySelector(".feed").innerHTML; /* Check if feed changes are loaded*/
            expect(initFeedContent).not.toBe(newFeedContent);
            done();    
    });  
     });
}());
