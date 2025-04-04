# MatchTracker

Welcome to the MatchTracker project! This project is built with Angular for the frontend and C# (ASP.NET Core) for the backend. The database used is SQLite.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **View Matches**: Users can view matches for selected dates.
- **Date Selection**: Users can select a date to filter matches.
- **Detailed Match View**: Detailed view of the selected match.
- **Trending News**: Display trending news related to matches.
- **Responsive Design**: Fully responsive design using Angular Flex Layout.

## Setup

### Prerequisites

- Node.js (>= 14.x)
- Angular CLI (>= 12.x)
- npm or yarn
- .NET 6 SDK
- SQLite

### Installation

#### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/matchtracker.git
    cd matchtracker
    ```

2. **Navigate to the backend project directory:**

    ```bash
    cd MatchTracker.API
    ```

3. **Install dependencies and build the project:**

    ```bash
    dotnet restore
    dotnet build
    ```

4. **Set up the database:**

    ```bash
    dotnet ef database update
    ```

5. **Run the application:**

    ```bash
    dotnet run
    ```

    The backend API will be available at `https://localhost:7286/api`.

#### Frontend

1. **Navigate to the frontend project directory:**

    ```bash
    cd matchtracker-frontend
    ```

2. **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

3. **Set up environment variables:**

    Create an environment file `src/environments/environment.ts` with the following content:

    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'https://localhost:7286/api'
    };
    ```

4. **Run the application:**

    Using npm:

    ```bash
    npm start
    ```

    Using yarn:

    ```bash
    yarn start
    ```

5. **Open the application in your browser:**

    Navigate to `http://localhost:4200`.

## Usage

### Viewing Matches

1. **Select a Date:**
    - Use the date picker to select a date.
    - The matches for the selected day will be displayed in descending order by kick-off time.

2. **Match Details:**
    - Click on a match to view detailed information including teams, kick-off time, and stadium.

### Trending News

- View the latest news related to matches on the right side of the screen.

