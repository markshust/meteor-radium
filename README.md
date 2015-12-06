# markoshust:radium

## Add Radium to Meteor

    meteor add markoshust:radium

Uses official `react` package from Meteor.

To learn how to use Radium, see the official repo docs: https://github.com/FormidableLabs/radium

From the docs:

> Usage

> Start by adding the @Radium decorator to your component class. Alternatively, wrap Radium() around your component, like module.exports = Radium(Component), or Component = Radium(Component), which works with classes, createClass, and stateless components (functions that take props and return a ReactElement). Then, write a style object as you normally would with inline styles, and add in styles for interactive states and media queries. Pass the style object to your component via style={...} and let Radium do the rest!

Since Meteor doesn't yet support ES6 decorators, you need to wrap your methods in `Radium()`.
