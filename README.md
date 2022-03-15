<div align="center">
    <img
        src="https://user-images.githubusercontent.com/43145168/158388332-bb76d8c2-48ad-4f42-a017-6969a0abaa8c.png"
        width="200"
        alt="NGINFORMATICA"
	/>
    <h2 style='font-family: sans-serif;'> STYLEGUIDE </h2>
</div>

A repository to center and document, initially, the colors of the NGInformatica Apps.

## :package: `Install` 

> The package still in `alpha`

```sh
$ npm i nginformatica-styleguide
```
or

```sh
$ yarn add nginformatica-styleguide
```

## :books: `Usage`

The `work in progress` of the colors documentation is [here](https://nginformatica-styleguide.now.sh/)

#### styled-components + typescript

Using the ThemeProvider of styled-components, the theme property will be injected into all styled-components below of it.

```tsx
import { theme } from 'nginformatica-styleguide'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'

type Kind = 'critical' | 'medium' | 'high' | 'minimal' | 'low' | 'neutral'

interface IProps {
    kind: Kind
    children?: React.ReactNode
}

const CardStyled = styled('div')<IProps>(
    ({ theme, kind }) => ({
        padding: '0.5rem',
        borderLeft: `4px solid ${ theme.colors.priority[kind].main}`,
        backgroundColor: theme.colors.priority[kind].light,
        width: '144px',
        height: '80px',
        margin: '0 1rem 1rem 0',
        borderRadius: '4px',
        position: 'relative'
    })
)

const App = () => (
    <StyledThemeProvider theme={ theme }>
        <CardStyled kind="critical" />
    </StyledThemeProvider>
)
```

For auto-types of the `theme` inside of styled components:

Extend the nginformatica theme in the default theme of `styled-components`

> [issue](https://github.com/styled-components/styled-components-website/issues/447)

```typescript
// eg.: src/types/styled.ts

import { theme } from 'nginformatica-styleguide'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

Don't forget to add it to the `typeRoots` in `tsconfig.json`

Eg.: in `tsconfig.json`

```diff
{
    "compilerOptions": {
	...,
+	"typeRoots": ["./node_modules/@types/", "./src/types/styled.ts", ...]
    },
    ...
}

