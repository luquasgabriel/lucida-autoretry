# Lucida AutoRetry

Browser extension that automatically clicks the "Retry" button whenever a error appears on **https://lucida.to/**. For some reason, retrying can usually solve some errors and you won't need to be checking every time anymore.


## Requirements

- Manifest V3 compatible browser. Tested in Chromium based browsers like Google Chrome, Brave and Microsoft Edge.

## Installation

### Option 1 — Using Git

Open your terminal and run:

```
git clone https://github.com/luquasgabriel/lucida-autoretry.git
```

### Option 2 — Without Git

1. Create a folder named **lucida-autoretry**
2. Inside it, create two files:
    - `manifest.json`
    - `content.js`
3. Paste the correct content into each file or download them and put inside the folder

## Installing the extension in your browser

1. Open your browser
2. Type in the address bar:

    ```
    chrome://extensions
    ```

3. Enable **Developer mode**
4. Click on **Load unpacked**
5. Select the **lucida-autoretry** folder

## Usage

1. Visit **https://lucida.to/**
2. Start a download
3. When an error appears, the "Retry" button will be clicked automatically

## Notes

- It is able to run in the background (if the website is open);
- No data is sent and no external requests are made;
- Can be removed anytime from the extensions page;
- This project has no affiliation, association, sponsorship or involvement with the website https://lucida.to/ or its developers.
