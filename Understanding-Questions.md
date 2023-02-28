# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 

• The onClick method calls the addOne event handler.
• The addOne event handler calls the addOne function.
• The addOne function returns a type, which is a string called "ADD_ONE"
• The switch statement within the reducer function recognizes the function type
with the case "ADD_ONE"
• The case "ADD_ONE" returns a copy of state, and adds 1 to state.total
• state.total is displayed on the screen of the calculator
• Rinse & Repeat

* TotalDisplay shows the total plus 1.
