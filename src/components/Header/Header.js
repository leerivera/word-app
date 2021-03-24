import {  createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"

export const Header = () => {
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: '#fff'
          },
          type: "dark",
        },
      });
    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="inputs">
              <ThemeProvider theme = { darkTheme }>
               <TextField id="standard-basic" label="Standard" />
               <TextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      
                      helperText="Please select your currency"
                    >
                      
                        <MenuItem >
                          
                          English
                        </MenuItem>
                      
                    </TextField>
                    <TextField
                      id="standard-select-currency-native"
                      select
                      label="Native select"
                      // value={}
                      // onChange={}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                    ></TextField>
              </ThemeProvider>

            </div>
        </div>
    )
}
