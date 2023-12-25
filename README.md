# Passcode Problem

Reference: https://www.youtube.com/watch?v=x7yoUNV3qJI

Prompt the user to enter a passcode (akin to unlocking a mobile device)

Psuedocode/Notes:
- Display buttons 0-9 on the page
- use useState to keep track of what passcode the user is entering
- useEffect trigger when passcode changes, if length === 4, check if passcode is correct. Notify user of success/failure and reset the passcode
