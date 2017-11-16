# Carsharing application using react-native and redux.
## About
Justin are from Java background and he also know little bit about:
+ Dev native app with android.
+ Dev single page webapp with reactjs or angular 4.
+ Dev hybrid app with ionic + cordova native plugin.

And he read few comparision posts on internet about ionic vs react-native.
But he wants to have his own feeling...

## Libraries
Beside  ```react``` and ```react-native``` library, below are additional ones & their purposes
+ [Redux](https://redux.js.org/): Typical state container (storages) for your react application.
  + [Redux Thunk](https://github.com/gaearon/redux-thunk) Async execution for redux (as middleware). 
    + [Redux Saga](https://github.com/redux-saga/redux-saga) maybe the better alternatives to avoid callback chains.
  + [Redux Binding](https://github.com/reactjs/react-redux) to provide global states, actions (dispatch) to react component state. 
+ [Native Base Component](https://nativebase.io/) Provide cross platform UI components.
+ [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) Provide the navigation platform between screen & history.
  + [reactnavigation](https://reactnavigation.org/) Maybe the other alternative good candidates from react native community.
+ [SVG Icons](https://github.com/oblador/react-native-vector-icons) Beside icons from ```native-base```, ```react-native-vector-icons``` provide much more options.
+ [Map](https://github.com/airbnb/react-native-maps) Provide map component for react native, both Android + iOS platform.
+ [Google Places API](https://github.com/tolu360/react-native-google-places) library to use google place API in react-native.

## References
Steps guideline from [eman1000/TaxiApp](https://github.com/eman1000/TaxiApp)

## What's differences from original guideline?
### General
+ [Prettier](https://prettier.io/) integrated for code formatter.
+ [Flow](https://flow.org/) integrated for static type checker.
+ Android implementation instead of iOS, so I could use ```react-native link``` without any problems as mentioned in original guideline.
+ Upgrade all libraries to latest version, including the drop of deprecated library e.g. ```react-addons-update``` and replace by ```immutability-helper```

### Structure
+ No AppContainer: App container are merged together with [AppRoot](src/index.js) component
+ Modules folder: It will contain 3 files: module file, **actions file**, **handlers file**, there is no **constants files**. Refer [Home](src/routes/Home/modules/) module.
+ App Bar: Instead of hide the navigation bar (using ```hiddenNavBar```) and create new custom Header component in Home, ```react-native-router-flux``` navigation bar itself is customized by using ```navBar```. Refer [Scenes](src/routes/scenes.js)
+ Header: Use of ```Subtitle``` in Header along with ```Title``` 

### Logic
+ Place picker: ```openPlacePickerModal``` is being used as built-in picker instead of our own UI + ```getAutocompletePredictions```. This lead to huge differences in actions & handlers of home component, refer [HomeActions.js](src/routes/Home/modules/HomeActions.js)
  + ```RNGooglePlaces``` API is called from react native component instead of module layer,  refer [SearchBox][src/routes/Home/components/SearchBox/index.js]

## TODO list
+ Place picker will show when When pickup (or dropoff) text box are in focus event. Hence, dropoff picker will not display again when text box is being focus and you want to change the place. Workaround is un-focus first.
+ Customize the place picker of ```react-native-google-places``` to align with themes

