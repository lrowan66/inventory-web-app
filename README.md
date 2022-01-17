# inventory-web-app
Here is an inventory management web app that I made for my Shopify co-op application. It uses the free cloud based Cassandra database offered by AstraDB for storage, React for the page design, Netlify for website and serverless function hosting, and Gitpod for an environment.

Instructions:

1. From a webbrowser, go to gitpod.io and create or login to an account. You can use your Github account.
    Gitpod is a free browser based IDE that can be configured to automativally setup your work environment, and save your work as you go without having to commit it.
    Gitpod is based on VSCode so many of the features and shortcuts are the same.
2. Open new tab and go to github.com and create a new repository.
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
15. Return to your Gitpod workspace tab, then open the Application Menu from the top left of the page and press Gitpod: Stop Workspace, then your IDE will close and offer a button to return to your Gitpod Dashboard, press it.

12. Now we are going to restart the Gitpod workspace so that the .gitpod.yml file con configure your environment.