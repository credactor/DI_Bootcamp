//     In this exercise, you’ll learn how to use type assertions to cast an HTML element to a specific type in TypeScript. This allows you to safely access and manipulate properties of the element.
// 1. Get an Element from the DOM: 
// 2. Use document.getElementById() to retrieve an HTML element from the DOM.
// 3. Use Type Assertion:
// 4. Apply a type assertion to cast the element to a specific HTML element type, such as HTMLInputElement.
// 5. Access the Element’s Properties:
// 6. Once cast, use the properties of the specific element type, like setting the value of an input element.
// 7. Test the Functionality:
// 8. Ensure that you can successfully set or manipulate a property of the element. 
//     Additional Notes:
// Type assertions are a powerful way to let TypeScript know more about the type of an element when you’re certain of it. However, you should use them cautiously, as incorrect assertions can lead to runtime errors if the type is not as expected. 

const field = document.getElementById("tsInput") as HTMLInputElement;
field.value = "Abracadabra";
