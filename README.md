# Google Auto Complete (Location)

When you start a search, you can  find the information you’re looking for faster 
using search predictions by 
[Google Location API](https://developers.google.com/places/web-service/autocomplete).
Search predictions are possible search terms you can  use that are related to the 
terms you’re typing and what other people are searching for.


# Getting started

### Installation

#### Quick Start with GIT with [Documentation](https://github.com/RidwanulHafiz/vue-google-autocomplete-ridwan)
```
git clone https://github.com/RidwanulHafiz/vue-google-autocomplete-ridwan.git
```


#### Quick Start with NPM
* Install with [NPM](https://www.npmjs.com/package/vue-google-autocomplete-ridwan) ```npm install google-autocomplete-ridwan```
* [Get an API Key from the Google API Console](https://developers.google.com/maps/documentation/javascript/get-api-key)
* Include Google location script with Google API key

```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY=places"></script>
```

### Usage

HTML component
```
<input type=text data-name="autocomplete"/>
```

Import package into component
```
import location from 'google-autocomplete-ridwan'
```


Then call it anywhere you need
```
location.AutoComplete();
```