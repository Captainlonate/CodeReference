# Object Oriented Programming & Types

## [Primitive Types](https://tc39.es/ecma262/#sec-primitive-value)

Undefined, Null, Boolean, Number, BigInt, Symbol, or String

(Object is not included in primitive types)

(Infinity & NaN are Number values)

(function is a member of the Object type)

## Object.create

An alternative to using `new`, which allows you to specifically set the `prototype` object.

## Environment Record

Environment record is not the same thing as Execution Context.

Environment Record is a specification type used to define the association of Identifiers to specific variables and functions, based upon the lexical nesting structure of ECMAScript code. Usually an Environment Record is associated with a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement. Each time such code is evaluated, a new Environment Record is created to record the identifier bindings that are created by that code.

Every Environment Record has an `[[OuterEnv]]` field, which is either null or a reference to an outer Environment Record. This is used to model the logical nesting of Environment Record values.

Environment Records can be thought of as existing in a simple object-oriented hierarchy where Environment Record is an abstract class with three concrete subclasses
  - declarative Environment Record
    - Function Environment Records and module Environment Records are subclasses of declarative Environment Record.
    - contains variable, constant, let, class, module, import, and/or function declarations.
  - object Environment Record
  - global Environment Record
    - It does not have an outer environment (its `[[OuterEnv]]` is null.)

## [Execution Context](https://tc39.es/ecma262/#sec-execution-contexts) and [Agents](https://tc39.es/ecma262/#sec-agents)

__[Agent](https://tc39.es/ecma262/#sec-agents)__

An agent comprises:
  - a set of ECMAScript execution contexts
  - an execution context stack
  - a running execution context
  - an Agent Record
  - an executing thread

Some web browsers share a single executing thread across multiple unrelated tabs of a browser window, for example
  
While an agent's executing thread executes jobs, the agent is the surrounding agent for the code in those jobs. The code uses the surrounding agent to access the specification-level execution objects held within the agent: the running execution context, the execution context stack, and the Agent Record's fields.

__[Execution Context](https://tc39.es/ecma262/#sec-execution-contexts)__


## new

1) Creates an empty object (proto object)
2) Adds `__proto__` property to the object, which points to the constructor functions `prototype` object.
3) assigns `this` (of the `new` instance you're making) to the empty object created in step 1.
4) Returns `this`

_Note: If you return a primitive from a constructor, that will be ignored. If you return an object, that will be returned instead of `this`_