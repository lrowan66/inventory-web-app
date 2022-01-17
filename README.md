# inventory-web-app
Here is an inventory management web app that I made for my Shopify co-op application. It uses the free cloud based Cassandra database offered by AstraDB for storage, React for the page design, Netlify for website and serverless function hosting, and Gitpod for an environment.

Instructions:

1. From a webbrowser, go to https://gitpod.io/ and create or login to an account. You can use your Github account.
    Gitpod is a free browser based IDE that can be configured to automativally setup your work environment, and save your work as you go without having to commit it.
    Gitpod is based on VSCode so many of the features and shortcuts are the same.
2. Open new tab and go to https://github.com/ and create a new repository.
3. Press the green, CODE, button and copy the HTTPS address for your new Github repository.
4. Open another new tab and type: gitpod.io/# into the url bar, then paste your respositories full address after the # and press enter.
    As an example, your url should look like this: gitpod.io/#https://github.com/lrowan66/inventory-web-app.git
    This will open a new Gitpod workspace connected to your repository.
5. On the left side of the screen you will see a list of all the files in your repository under your repositories name. Hovering your cursor beside your repositories name will reveal several buttons, the first being the new file button.
6. Press the new file button to create a new file named .gitpod.yml in your root folder, then copy and paste the contents of the .github.yml file from my inventory-web-app repository into your newly created file.
    The .gitpod.yml file configures the Gitpod workspace on startup.
7. In your .gitpod.yml file, you will have to replace inventory-web-app with the name of your Github repository on lines 2,4, and 8.
8. Now open a new terminal by opening the Application Menu in the top left of the Gitpod IDE, then navigate to Terminal > New Terminal.
9. In the new terminal window, type the code: npx create-react-app my-react-app
    You will be prompted to install the create-react-app packages, press y and enter to continue.
    You can change the name of the react app folder by replacing my-react-app in the above terminal entry, but you will also have to replace my-react-app with the new folder name on line 8 in your .gitpod.yml file.
10. Now in the file explorer on the left side of the page you will see a new folder, open it then open the src folder.
11. Delete the setupTests.js, reportWebVitals.js, logo.svg, App.text.js, App.js, and the App.css files.
12. To save your work to your repository, press the Source Control button on the left side of the screen, then click on the + to state all changes.
    If there are over 10000 changes in the Source Control, try just stating the .gitpod.yml file's changes by finding it in the list of changes then pressing the + next to  its name. That should leave you with 14 changes instead of over 10000, then you can state all changes.
13. At the top of the source control menu press the check mark to commit your stated changes to your repository, when prompted enter your commit message, press enter, then press the orange Sync Changes button that will pop up if all the changes have been commited or discarded.
    If the sync button doesn't pop up, then press the ... button at the top of the source control menu and navigate to Push, Pull > Sync.
14. Now go to your Github repository tab and refresh the page to make sure your commit worked.
15. Press the green, CODE, button and copy the HTTPS address for your new Github repository, then return to your Gitpod dashboard tab and enter gitpod.io/# followed by your repositories full address into the url search bar.
    This will start a new workspace from your repo but this time it will be configured by the .gitpod.yml file.
    Once the new workspace opens up you will see a terminal window at the bottom of the screen installing a bunch of packages. First it installs a version of Node.js that is compatible with Netlify-Cli, then in your react app folder it installs the react, netlify, astra, and axios, packages.
    Netlify allows us to use serverless functions to call data from our database hosted by AstraDB, which we will be using astra collections to comunicate with.
    Axios allows us to call our serverless functions without visiting a new webpage from our react app.
16. At this point we need a few more accounts, open a new tab and go to https://www.datastax.com/ then press Sign In and create an account. You can use your Github account.
17. On the left hand side of your Datastax Astra dashboard press Create Database. Enter a database name and keyspace, then select Google Cloud as the provider, North America as area, and South Carolina as region. Make sure the current plan is free before pressing the Create Database button.
18. It will take some time to initialize the database, so open a new tab and go to https://app.netlify.com/ and create and account. You can use your Github account.
    You will have to do some profile setup, and name your team space which will hold your website if you choose to deploy it with netlify.
19. On the next page press, Skip this step for now, as we won't be deploying a website for this project, although you could in the future.
20. Go back to your Gitpod tab and in the terminal type, netlify login, then hold Ctrl and click on the link beside where it says Opening in the terminal, then press Authorize.
21. Your database should now be setup so go back to your AstraDB tab, and click on the button with three dots to the right of the name of your new database and select Generate a Token.
22. Select Database Administrator as the role, press Generate Token, and then Download Token Details.
    You should save your databases name and keyspace to the downloaded .csv so you don't forget them.
23. In the terminal type, npm exec astra-setup inventoryDatabase inventory_space, but replace inventoryDatabase with the name of your database and inventory_space with your keyspace. Press y and enter when prompted to install the setup packages.
24. Open the GeneratedToken.csv you downloaded and copy the "Token" value, then paste it into the terminal when prompted for the Admin Token.
    You should now see a .env file in the file explorer.
25. Click on your react app folder in the file explorer, then press on the create new folder button beside the name of your repository at the top of the explorer.
26. You must name the new folder, functions, so that netlify can access the serverless functions stored in it correctly.
27. Using the same method, create a new file called, createItem.js in the functions folder, then copy and paste the contents from the createItem.js file from my repository.
28. Using the same method, create a new file called, updateItem.js in the functions folder, then copy and paste the contents from the updateItem.js file from my repository.
29. Using the same method, create a new file called, deleteItem.js in the functions folder, then copy and paste the contents from the deleteItem.js file from my repository.
30. Using the same method, create a new file called, getAllItem.js in the functions folder, then copy and paste the contents from the getAllItem.js file from my repository.
    These are the serverless functions that netlify will use to communicate with your database.
31. Using the same method, create a new file called, Inventory.css in the src folder, then copy and paste the contents from the Inventory.css file from my repository.
32. Using the same method, create a new file called, Inventory.js in the src folder, then copy and paste the contents from the Inventory.js file from my repository.
33. Using the same method, create a new file called, InventorySpreadsheet.js in the src folder, then copy and paste the contents from the InventorySpreadsheet.js file from my repository.
34. Using the same method, create a new file called, TypeSelect.js in the src folder, then copy and paste the contents from the TypeSelect.js file from my repository.
35. Using the same method, create a new file called, netlify.toml in your react app folder, then copy and paste the contents from the netlify.toml file from my repository.
36. Open the index.js file, then remove lines 4,5,11,12,13,14, and 15. Then replace App on line 7 with Inventory and paste the line, import Inventory from './Inventory.js'; at just underneath import './index.css';
37. 