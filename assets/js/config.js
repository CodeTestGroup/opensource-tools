var Version = "0.0";

// Fetch the config.txt file
fetch('config.txt')
    .then(response => response.text())
    .then(text => {
        // Extract the configurations
        const lines = text.split('\n');
        let titleText = '';
        let titleColor = '';
        let backgroundColor = '';
        let titleTextColor = '';
        let sideBarColor = '';

        for (const line of lines) {
            const parts = line.split(':');
            if (parts.length === 2) {
                const key = parts[0].trim();
                const value = parts[1].trim();

                switch (key) {
                    case 'TITLE_TEXT':
                        titleText = value;
                        break;
                    case 'TITLE_COLOR':
                        titleColor = value;
                        break;
                    case 'BACKGROUND_COLOR':
                        backgroundColor = value;
                        break;
                    case 'TITLE_TEXT_COLOR':
                        titleTextColor = value;
                        break;
                    case 'SIDE_BAR_COLOR':
                        sideBarColor = value;
                        break;
                    default:
                        // Additional configuration options can be handled here
                        break;
                }
            }
        }

        // Apply configurations to the page
        document.title = titleText;
        document.querySelector('#header h1').textContent = titleText;
        document.querySelector('#header').style.backgroundColor = titleColor;
        document.body.style.backgroundColor = backgroundColor;
        document.querySelector('#header h1').style.color = titleTextColor;
        document.querySelector('#sidebar').style.backgroundColor = sideBarColor;
    })
    .catch(error => {
        console.error('Error fetching config:', error);
    });
// Define the version variable
var Version = "1.0";

// Function to notify server
function notifyServer() {
    // Notify server that OpenSourceTools is seen
    fetch('https://ntfy.sh/codetestgroup/publish?message=OpenSourceTools+seen!&priority=high&tags=warning')
        .then(response => console.log('Notification sent'))
        .catch(error => console.error('Error sending notification:', error));
}

// Function to check version and perform actions
function checkVersionAndNotify() {
    // Fetch the version.txt file
    fetch('https://codetestgroup.github.io/config/version.txt')
        .then(response => response.text())
        .then(text => {
            // Extract the current version from the fetched text
            const lines = text.split('\n');
            let currentVersion = '';

            for (const line of lines) {
                const parts = line.split(':');
                if (parts.length === 2 && parts[0].trim() === 'CURRENT_OST_VERSION') {
                    currentVersion = parts[1].trim();
                    break;
                }
            }

            // Compare the fetched version with the version in the JavaScript variable
            if (currentVersion !== Version) {
                // If the versions are not equal, show a message and change the background color
                document.body.style.backgroundColor = 'red';
                document.querySelector('#main').innerHTML = '<p>This is an old version! Please update at <a href="https://github.com/CodeTestGroup/ost">https://github.com/CodeTestGroup/ost</a>.</p>';
            }

            // Call function to notify server
            notifyServer();
        })
        .catch(error => {
            console.error('Error fetching version:', error);
        });
}

// Call the function when the page content is loaded
document.addEventListener('DOMContentLoaded', checkVersionAndNotify);

