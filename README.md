# Ryan Smith - Async Week Project

Link to youtube demo:
https://youtu.be/l1mI8mOTH7w

This project was undertaken to explore a few technologies:

#### Technologies Explored
- Brain.js
- styled-components
- react-animations

## Brain.js
<details>
<summary>Click to expand</summary>\

Brain.js is JS library that allows you to perform machine learning utilizing Javascript. From the npm documentation:

"brain.js is a GPU accelerated library for Neural Networks written in JavaScript."
https://www.npmjs.com/package/brain.js?activeTab=readme

Brain.js can be utilized both in node, or directly in the browser. This project uses it in backend. This was preferred, because this method, we can train the nets ONCE when the server spins up, as opposed to on every browser refresh.

#### How it works:
Getting up and running with Brain.js is quite simple:

- require it into your project:
```zsh
const brain = require('brain.js');
```
- Write some training data
- Declare your net (multiple types)
- Train your net with the data you wrote up
- Finally, run the net

This project uses the long short-term memory net, as opposed to a feedforward net:
```js
const net = new brain.recurrent.LSTM();
// AND
const net = new brain.recurrent.LSTMTimeStep();
```

"Long short-term memory (LSTM) is an artificial recurrent neural network (RNN) architecture[1] used in the field of deep learning. Unlike standard feedforward neural networks, LSTM has feedback connections. It can not only process single data points (such as images), but also entire sequences of data (such as speech or video)."
https://en.wikipedia.org/wiki/Long_short-term_memory

#### What I've learned
Although getting up and running with Brain.js is very straightforward, getting a trained up neural net with very low error, has proved much more difficult.

What type of data to give the net, how much data to give the net, how many hidden layers to use in the training, all appear to very non-intuitive.

I had assumed when I was learning the basics, that more data would always be better. And more hidden layers would result in a smarter net ( hidden layers are the layers of neurons in between the input data and output data, during net training ).
This proved not to be the case for me.

#### What's next
This project is the result of watching a single tutorial on how to use Brian.js and then jumping right into playing around with it.

I'm looking forward to diving into some resources to understand how all of this actually works. And then at that point maybe I can actually get these nets to produce the results I'm looking for!
</details>

## styled-components
<details>
<summary>Click to expand</summary>\

**styled-components** is another technology explored in this project.

Getting up and running is just a matter of installing the dependency and importing it into the React Component that you'd like to use it in.

With it, you can write a (styled) wrapper Component right in React and then simply wrap up your base Component with it.

I've found that there are many different ways to style your React apps and learning this technique has provided me with another alternative to have in the toolbox.
</details>

## react-animations
<details>
<summary>Click to expand</summary>\

Finally, we have the react-animations library which is one of many options for animating our React apps.

Like **styled-components**, **react-animations** just needs to be installed and imported into the Component.

**NOTE:** react-animations is used in conjunction with styled-components in this project, but this is not the only option.

"React-animation works with any inline style library that supports the use of objects to define keyframe animations, such as Radium, Aphrodite or styled-components."
https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

#### What I learned
React animations is straight-forward to get running. What proved to be more difficult was to customize WHEN I want my animations to happen. Animations happen when the Components initially mount. What if you wanted to animate something on state change? That's something I tried to figure out but didn't have much luck. Either, this is not the right library for the job, or I just have something to learn about it.

I was able to get one animation going for the output of the submit buttons by wrapping the styled & animated wrapped Component in a conditional that looks at the state object. However, I could not get the animation to persist on every submission/state change.

**Writing animations with pure CSS and triggering those styles with state, is probably the best way to achieve this desired result.**
</details>