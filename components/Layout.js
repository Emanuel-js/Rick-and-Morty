import React from 'react'
import Head from './Heads';
import Navbar from './common/Navbar';
import {themes} from './stylesComp/theme';
import { ThemeProvider,createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.textColor};
    background:${props => props.theme.bg};
  }
`

export default function Layout({ children }) {
    
    const [theme, setTheme] = React.useState('light');
    
    return (
        <ThemeProvider theme={themes[theme]}>
            <Head/>
            <Navbar theme={theme} setTheme={setTheme} />
            <div>
                <div>
                    {children}
                </div>
            </div>   
            <GlobalStyle/>
        </ThemeProvider>
    )
}
