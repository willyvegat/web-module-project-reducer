# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The event handler dispatches the addOne action, which is found in the actions folder that was imported to App
* then creates the action package
* then it goes to our reducer function and it changes the state by adding 1 to the total
* then it re-renders our app with our new total
* TotalDisplay shows the total plus 1.
