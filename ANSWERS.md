- [ ] Why would you use class component over function components (removing hooks from the question)?

  Class components should be used whenever we need to implement logic, state, or the react lifecycle to the app, while  the main purpose of Functional Components is to display the UI and rendering the data passed in via props from the class components.

- [ ] Name three lifecycle methods and their purposes.

  constructor() - used for initializing the class with data and also used to load initial state data.

  render() - this is triggers when the UI gets rendered into the DOM by passing the JSX into the DOM. It is also used in the mounting and updating phases.

  componentDidMount() - this method is called once in the component lifecycle. it is a place to make API calls when the component is already mounted.

- [ ] What is the purpose of a custom hook?

  Custom Hooks are built to let us extract components' logic in to the functions so that it can be used by other components.

- [ ] Why is it important to test our apps?

  Testing is important because it reduces the risks of bugs, allows us to trust the code, acts as a safety net when making changes, but it also allows us to write better code.
