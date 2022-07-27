# ReactJS

[Hooks](https://reactjs.org/docs/hooks-reference.html)

## Class Components Lifecycle Methods


The componentDidMount() method runs after the component output has been rendered to the DOM.



componentWillUnmount()


## Class Components State

__The object passed to setState is MERGED with existing state, so you can pass pieces of state__

```js

// state = previous state
// props = the props at the time the update is applied
this.setState((state, props) => ({
  counter: state.counter + props.increment
}))
```

## Hooks

[useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)

"`useImperativeHandle` customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. `useImperativeHandle` should be used with `forwardRef`: --From the docs"

```js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

## React.forwardRef

```js
// Gets ref as second argument, and passes it down to the button
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

// Up in some parent component...
// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

__Second Example using higher order components__

```js
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
```