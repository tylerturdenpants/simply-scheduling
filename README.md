# simply-scheduling

## Technologies Showcased

### Ember Octane

#### Angle Bracket Syntax
```hbs
<OfficeList @title="Office Locations">
  {{#each model as |location|}}
    <OfficeLocation @location={{location}} />
  {{/each}}
</OfficeList>
```

#### Glimmer Components and Decorators
```ts
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class SidebarStepComponent extends Component {
  @service appointment
	
  get isCurrentStep() {
    return this.appointment.currentStepNum === this.args.stepNum;
  }
}
```

#### Ember Concurrency Tasks (with decorators)
```ts
@task(function* (cId, cptCode) {
  let offices = yield this.store.query('office', {
    filter: {
      clinicianId: cId,
      cptCodeId: cptCode
    }
  });
  return offices;
}) fetchOfficeLocations;
```

#### Element Modifiers

```hbs
<div {{did-update this.geoencodeAddress}} class="card mb-3">
  {{#if isLngOrLat}}
    <GMap 
      @lat={{this.lat}} 
      @lng={{this.lng}} 
      @disableDefaultUI={{true}} @zoomControl={{false}} @minZoom=10 as |g| >
      <g.marker
        @lat={{this.lat}}
        @lng={{this.lng}}
      />
    </GMap>
  {{/if}}
  <div class="card-body">
    <div>
      <div class="h6">{{@location.name}}</div>
      <p>
        {{@location.street}}<br>
        {{@location.city}}, {{@location.state}}, {{@location.zip}}
        <div class="mt-2">{{@location.phone}}</div>
      </p>
    </div>
    <button 
      {{on 'click' (action this.goToDateAndTime @location.id) }} 
      class="btn btn-primary w-100"
      data-office-id="{{@location.id}}">
        Select
    </button>
  </div>
</div>
```
### Widget Configuration Parameters

```ts
// config/environment.js
let ENV = {
    APP: {
      ...
      clientPortalBaseURL: 'https://johnny-appleseed.clientsecure.me',
      clinicianID: 2
    }
  };
```

### Missing Requirements or Unresolved Questions
  1. Should the widget respect the browser `back` button?
  2. Should widget state be capture in the url: `/office-location/3866/date-time/4`?
  3. Should widget state be capture in query parameters: `/&?cpt=3866&location=58763`?
  4. Should the widget survive page reloads (2 or 3 could help mitigate)? 

### Architectural Decisions
  1. Widget is currently coded to use dynamic segments to capture app state
  2. Like many side-bars, the semantic markup lies outside of the nested routes. We could use things like wormholes, but a service acting like a messaging bus is simpler (less vendor code / smaller bundle)
  3. Using Glimmer components are lighter and use native classes along with native getters to do `computed properties`.  Tracked properties, or `@tracked` are more ergonomic (no dependent key listing).  Also most computed properties get little benefit from cached calculations and rolling your own is likely to suffice.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd simply-scheduling`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
