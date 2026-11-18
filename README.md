# Thanksgiving Family Feud — Live Classroom App

A host-controlled, real-time Thanksgiving Family Feud game. One phone controls the board on another computer over the internet.

## Deploy (Render)
1. Upload this project to a GitHub repository.
2. On https://render.com choose **New > Web Service** and connect the repository.
3. Choose **Node**, build command `npm install`, start command `npm start`.
4. Open your Render URL on the host phone, choose **Create Host Room**.
5. On the projector computer, open the board URL from **Copy board link** (or open the site and enter the six-character room code).
6. Use the phone to reveal answers, give strikes, award points, and change rounds.

## Local testing
`npm install && npm start`, then open http://localhost:3000 in two tabs.

## Notes
- Answers and scores are synchronized via WebSockets.
- Survey answers and point values are *fictional for gameplay*, not actual survey data.
- The host link has a private control token: do not share it. Share only the board link.
- Rooms are stored in server memory. A server restart or free-host sleep/reset clears games. Keep the service awake during the party.
- If the host phone reconnects, it rejoins automatically via its private URL.
- For audio to work on some browsers, tap the page once to enable audio.
