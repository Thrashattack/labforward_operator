
# Epic - Add downsample functionality to dashboard

- The approach to perform this task was divided in three big areas: Performance, Architecture and Testing. I separated <b>4 hours</b> for analysis, poc, researching and discovery, <b>2 hours</b> for writting tests and <b>2 hours<b> of implementation and refactoring. 
- I usually would split this in 3 differente pull requests but I decided to do it in only one since i did it with 1,5 hours per day only.
- At first, i started by researching the current codebase and the current architecture. Then i decided to implement the downsample functionality for real-time data visualization. Since frontend had so many points to be improved i decided to implement it in the frontend along with fixes and refactorings. That would add most value to user of the existing project since it would allow data to be visualized, at all (the charts was hanging a lot).
- Further i would add more layers to the backend to allow historical data to be visualized and downsampled in a Historical Dashboard.

## Performance 

  - The dashboard was importing the whole lodash library in the reducer to perform normalization. This was a hudge performance hit.
  - Despite that, the dashboard component was redeclaring the map/filter function for data points each renderization. Another hudge performance hit.
  - By correctly using callback, memo and effect hooks, along with importing only the necessary functions and reducing the abuse of unecessary functions from lodash, the dashboard was able to perform in a <b>much faster</b> way.

## Architecture

  - I decided to refactor the project in a Atomic Design architecture for frontend componentization. 
  - This allows us to reuse components in a very efficient and intuitive way and also increases our capability to test things separately.
  - I also decided to use <b>React Hooks</b> to make the code more readable and maintainable along with removing the logic from components.
  - I'm not a frontend expert, thats why a lot of inline css, but my experiences with atomic design made me realize that this is a good way to go ahead with this project that aims to be a operative system and just matchs with the project niche (laboratory data, atomic design, *smiles*)
  - The lib directory was added to the project and store and hooks were moved to it. This is a convention in react community.

## Testing 

  - A lot of code wasn't tested including the reducer, actions and the middleware used to fetch data. 
  - Unit tests were made to assert they responses and along with the implementation of hooks, integration tests were made to assert their behaviors.
  - Some testing libraries were add to the project to perform the tests and the coverage is just awesome now.

## Other

  - React was updated to version 18.2.0
  - A not necessary lib to plot range slider was added because i decided to do not implement component library for now. 

### Task Checklist 

- [x] Performance
  - [x] User Interface
    - Use effect, callback and memo hooks correctly    
  - [x] Data Processing
    - Add hook to fetch initial data
    - Add hook to subscribe to stream channel
  - [x] Bundle size/memory usage
    - Reduce abusive usage of lodash
    - Remove unnecessary uses of lodash

- [x] Architecture
  - [x] Componentization
    - Implement Atomic Design
    - Create atomic components to compose application
  - [x] Hooks
    - Manage dataflow in hooks and atomic components    
  - [x] Directories Structure
    - Modify directories to match Atomic Design and react conventions

- [x] Testing
  - [x] Unit Tests
    - Add unit tests for missing middleware, reducers and actions
  - [x] Integration Tests
    - Add integration tests for hooks
  - [x] Coverage 
    - 100% branch coverage
    - 97% line coverage
    - 96% statement coverage
    - 93% function coverage

- [] Next Steps
  - [] Add GraphQL for clever data fetching and conventional caching and documentation
  - [] Historical Dashboard (with downsampling) 
  - [] Implementation of Repository layer (backend)
  - [] Add component library (Material, Chakra) and storybook (frontend)


# Device Dashboard

This repository contain a sample project on how real-time time series data coming from devices' various sensors could be visualize.

## Prerequisite

To run locally, you'll need to install [docker-compose](https://docs.docker.com/compose/install/)

Make sure that your docker-compose version is at least v1.27.0

## Running

Once docker-compose is installed, you can start the server by running:

```
$ docker-compose up --build
```

You can then open http://localhost:3000 in your browser

## Testing

- Back-End testing are provided using RSpec

```
$ bundle exec rspec
```

- Front-End testing are provided using Jest

```
$ yarn test
```
