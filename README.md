# Hotel Management System

## Home Page

- Displays a table of hotel properties with various details such as name, address, website, and different amenities.
- Supports searching for hotels based on name and address.
- Allows editing hotel names and addresses.
- Provides links to visit the hotel's website.
- Allows viewing detailed information about each hotel property.
- Provides pagination for navigating through the list of hotel properties.
- Supports deleting hotel properties.
- Supports editing all the fields.
- You can also add a new hotel through the `Add New Hotel` button.
- If you click the `Test` button, you will be redirected to the test page where you will find three different buttons: `Download Chrome Extension`, `News API`, `YouTube API`.

## Test Page

- If you click the `Download Chrome Extension` button, the Chrome extension will be downloaded.
- If you click the `News API` button, you will be redirected to the `News API` page.
- If you click the `YouTube API` button, you will be redirected to the `YouTube API` page.

## Login Page

- Provides a user interface for hotel login.
- Allows users to input their email address and password.
- Supports toggling password visibility to ensure secure input.
- Validates user input and displays appropriate error messages.
- Initiates login action and redirects to the hotel home page upon successful login.

## Hotel Home

- Displays a sidebar menu with navigation links for different sections of the hotel management system.
- Supports toggling visibility of the sidebar menu on smaller screens (mobile devices).
- Allows users to navigate between different sections such as property information, location, beach, health data, transportation, aquamotion, reef, gym, kids club, food & beverage, services, pool, room, and media.
- Provides icons for each navigation link to enhance user experience.
- Includes a logout button for hotel users to sign out of the system.
- You will get all the information about your hotel and you will get the `Edit Option` for each section and you will get also the `Make Empty Option` for all sections.

## Chrome Extension - Summary

This extension will display the summary of any hotel by catching its URL when the user clicks the extension toolbar icon.

### How to Use Chrome Extension?

- Download the Chrome extension zip file.

### Load an Unpacked Extension

To load an unpacked extension in developer mode:

1. Go to the Extensions page by entering "chrome://extensions" in a new tab. (By design, chrome:// URLs are not linkable.)
   Alternatively, click the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu.
   Or, click the Chrome menu, hover over More Tools, then select Extensions.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the Load unpacked button and select the extension directory.

### Pin the Extension

By default, when you load your extension locally, it will appear in the extensions menu (Puzzle). Pin your extension to the toolbar to quickly access your extension during development.

## News API Page

The News API component is a part of the user interface designed to interact with a news API endpoint. It allows users to query news articles based on keywords and display the results in a tabular format.

- Users can enter keywords in the input field to query news articles.
- Upon submission, the component sends a POST request to the news API endpoint with the entered query parameters.
- Displays a loading animation while waiting for the response from the API.
- Once the response is received, it renders the data in a table format, showing various fields of information for each hotel.
- If no data is found for the given query parameters, it displays a message indicating that the data is not found.

## YouTube Transcripter Component

The YouTube Transcripter component is a part of the user interface designed to interact with a YouTube transcript API endpoint. It allows users to query YouTube transcripts based on keywords and display the results in a tabular format.

### Features

- Users can enter keywords in the input field to query YouTube transcripts.
- Upon submission, the component sends a POST request to the YouTube transcript API endpoint with the entered query parameters.
- Displays a loading animation while waiting for the response from the API.
- Once the response is received, it renders the data in a table format, showing various fields of information for each YouTube transcript.
- If no data is found for the given query parameters, it displays a message indicating that the data is not found.
