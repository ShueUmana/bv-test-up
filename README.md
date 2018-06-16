# Front-end Engineer Test

## Challenge Details:

### YOUR MISSION
For this challenge, we want you to design and build a single page app that
allows a user to log in, run some reports, and store them in the browser's
local storage.

### DETAILS
At BeenVerified, a common design pattern is that of a single page app
consuming an API endpoint. In order to use the applications, users need to
sign up for a plan, and be logged into their account. The accounts also
normally have some sort of business rules that apply to the API endpoints.
Logging in will consist of entering your email address and the password
` BV-API-Challenge `. There is no need to build any backend APIs to handle
this authentication, you can stub it out in JavaScript. But, for each user, the
reports should be stored separately. Users should be able to log out. Users
shouldn't be able to see each other's reports. You'll be working with graphic
designers in this role and be expected to replicate their designs
responsively. While we aren’t asking you to produce groundbreaking
design here, we do expect your code challenge to be presentable and look
good across all devices.
Use the API to run some sample queries with email addresses, and then
build out a report using the information returned that you think would be
great to display to a user.
The API endpoint you will need to code out is an email search. Here is an
example API call:
http://www.beenverified.com/hk/dd/email?email=skip.suva@gmail.com

### LogIn user Example

´´´
    "test@uno.com":"1234",
    "test@dos.com":"1234",
    "test@tres.com":"1234",
    "test@cuatro.com":"1234",
    "test@cinco.com":"1234"
´´´


# bv-test-up

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd bv-test-up`
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
