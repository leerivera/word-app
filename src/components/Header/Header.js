import {  createMuiTheme, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import categories from "../../data/category";
import MenuItem from "@material-ui/core/MenuItem";
import "./Header.css"

export const Header = ({setCategory, category}) => {
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: '#fff'
          },
          type: "dark",
        },
      });

       const handleChange = (e) => {
         setCategory(e.target.value);

       };
      //  const handleText = (text) => {
      //    console.log(text);

      //  };
    return (
        <div className="header">
            <span className="title">Word Hunt</span>
            <div className="inputs">
              <ThemeProvider theme = { darkTheme }>
               
               <TextField
                      className="search"
                      id="filled-basic"
                      select
                      label="Search for word"
                      
                      // onChange={(e) = handleText(e.target.value)}
                    >
                      
                      
                      
                </TextField>
                    <TextField
                      
                      select
                      label="Language"
                      value={category}
                      onChange={(e) =>handleChange(e)}
                      className="select"
                      
                      
                    >
                        {categories.map((option) => (
                           <MenuItem key={option.label} value={option.label}>
                                {option.value}
                           </MenuItem>
                     ))}
                    </TextField>
              </ThemeProvider>

            </div>
        </div>
    )
}
