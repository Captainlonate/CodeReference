# TypeScript + React + Context

__An example of how to set up a Context + Provider that uses `useState()` as it's value, all with Typescript.__

```tsx
import { FC, createContext, useContext, useState } from 'react'

// ============Interfaces & Types================

// The type of the state stored in the useState<I_GHContextState>
interface I_GHContextState {
  repoOwner: string
  repoName: string
}

// The return type of the useState() set as the value on context
type T_GHContextUseState = [
  // The state
  I_GHContextState,
  // The Dispatch function to change the state (setState())
  React.Dispatch<React.SetStateAction<I_GHContextState>>
]

// ==============Initial States==================

const startingState: I_GHContextState = {
  repoOwner: '',
  repoName: '',
}

// ====================Context===================

// createContext() requires a starting state here,
// so we have to mock it since we can't actually assign it
// the result of useState() just yet.
export const GithubContext = createContext<T_GHContextUseState>([
  startingState,
  () => {},
])

// Exported hook to declaratively use the context
export const useGithubContext = () => useContext(GithubContext)

// ====================Provider==================

export const GithubContextProvider: FC<{ children?: JSX.Element }> = ({
  children,
}) => {
  // EX: [state, setState]
  const stateAndDispatch = useState<I_GHContextState>(startingState)

  return (
    <GithubContext.Provider value={stateAndDispatch}>
      {children}
    </GithubContext.Provider>
  )
}

```