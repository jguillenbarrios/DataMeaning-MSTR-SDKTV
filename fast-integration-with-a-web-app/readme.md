# Fast Integration with a Web App #

This code may be the fastest (not the best) solution for quickly integrating with a Web app.

Please use responsibly. Never pull raw HTML in from another site unless it is one you own and can trust.

## Instructions for using in MicroStrategy Web ##

### Server steps ###

1. Download and install [node.js](http://nodejs.org) if you don't have it. If you install node.js and running `node` on the command line doesn't do anything, you may have to follow instructions for setting environment variabls.

2. Git Clone this repository or download the files.

3. Using the command line, set the directory containing this readme as the working directory. 

4. Run the command `npm install`

5. Modify `serverTemplate.js` with the base URL of the site you want data from and code to transform the HTML. For example, in the [SDK TV](http://datameaning.com/resources/learn-more/sdk-tv) video I cut out all of the HTML except the HTML for flight data.

6. Run the command `node serverTemplate.js`. You should see a message saying that the server is running.


### MicroStrategy Web Steps ###

1. Create a MicroStrategy report has an attribute you can use for adding parameters to the `BASE_URL` in `serverTemplate.js`. In the [SDK TV](http://datameaning.com/resources/learn-more/sdk-tv) video, I used a report that provides flight numbers.

2. Create a grid from the report and target a panel stack.

3. Put an HTML container in the panel stack. Add the base URL for your Web server with dynamic text for the parameters you are using. Use this syntax for the dyamic text for URL parameters (`[Attribute]@[Attribute Form]`). For example, if you have an attribute with a "query" attribute form, you could use the following text in the HTML container: `http://server_name_or_ip_address/[Attribute]@[Attribute Form]`. For example, in the [SDK TV](http://datameaning.com/resources/learn-more/sdk-tv) video the URL was `http://10.1.157/{[Flight]@[ID]}`.  Save your document.

4. In MicroStrategy Web, run the document in Express Mode.