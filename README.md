# React Template

## Notes

- **yarn** instead of _npm_ is strongly recommended.
- following **eslint rules** is required.

## Highlighted Technologies

- typescript
- react
- material-ui
- react-router
- react-redux, redux-saga
- react-table
- axios

## Project Folder Hierarchy

    .
    ├── public              // images, icons, fonts etc.
    │ └── marker_clusterer  // google maps marker cluster icons
    └── src
      ├── api               // axios instance, api controllers
      ├── components        // reusable components
      ├── helpers           // project wide helper functions
      ├── history           // history intance
      ├── hooks             // project wide react hooks
      ├── locales           // translations
      ├── pages             // pages to be showed by react-router
      ├── providers         // components that initializes libraries
      ├── routes            // route configuration for pages
      ├── store             // redux storage, actions, reducers, sagas etc
      ├── themes            // material ui theme configurations
      ├── types             // project wide typescript types

## Naming Convention

- `PascalCase` for component name,
- `PascalCase.tsx` for component files,
- `PascalCase.styles.ts` for components styles,
- `camelCase.ts` for other files such as controllers, redux files etc.

## Component creating

Always prefer function component and use hooks.

## Others
