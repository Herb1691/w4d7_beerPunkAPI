# w4d7_beerPunkAPI

Partner up with two other developers. This is a hackathon and you need to get going.
Create a repo you can push your work to.
Create a new project using the Angular CLI toolbox to do so.
We'll be fetching beer info from this API so go ahead and generate a beer component and a service.
Use the git init command to initialize your local directory.
git remote add origin <your repo's url>
git add, commit, push
Make sure everything went up and have your partners clone it.
Do not use the HttpClient directly in your component.
Make an Api and Beer service.
Import and register the HttpClientModule module in app.module
Import the HttpClientinto your service
Then create a get method using HttpClient that uses this url https://api.punkapi.com/v2/beers
Note 1: note the follow-up video Note 2: refer to the practice problem last night for knowing the syntax of a get method. Node 3: Remember async/await

Use Material, so install and import it.
Display the data in a Material table
Note: this was covered last week.

Your app component template should just contain a tag that contains the beer component. For example </beer-component> and in your beer component it should look something like this:

 Component({
   selector: 'beer-component',
   templateUrl: './beercomponent.component.html',
   styleUrls: ['./beercomponent.component.css']
 })
Console log the data your fetching or use Postman to to see what you're getting back.

Create a structure to display the image, title, abv, etc...
Create a button that will fetch a new beer if the user clicks it.
Push Yourself Further
Create a header that is on all of your pages.
Display 3 beers at a time, how about 6, 12
What if the user could choose the number they wanted to fetch and the app then change the number.
Add a search feature. *You'll have to look at the punkAPI documentation for this.
