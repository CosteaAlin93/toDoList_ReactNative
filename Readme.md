## Create an app:

`npx create-expo-app MyApp`

`cd MyApp`

`npx expo start --tunnel`

## Folder structure:

- assets
- components
- constants
  - icons.js : containts icons from '@expo/vector-icons';
  - theme.js : contains the colors, sizes and shadows
  - index.js : imports the above and export everything

## What will we implement:

V1.0

- Layout
  - header, newGoals, doneGoals and goalInput areas
  - sizes, colors, shadows added as variables
- Add Goal functionality
- Display the list of goals
- Delete a goal
- Once an added goal is clicked, it will be moved to the DoneGoals section
