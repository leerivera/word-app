import {  createMuiTheme, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import categories from "../../data/category";
import MenuItem from "@material-ui/core/MenuItem";
import "./Header.css"

export const Header = ({setCategory, category, word, setWord, setMeaning, LightTheme,}) => {
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: LightTheme ? "#000" : "#fff",
          },
          type: LightTheme ? "light" : "dark"
        },
      });

       const handleChange = (e) => {
         setCategory(e.target.value);
         setWord("");
         setMeaning([]);

       };
       const handleText = (text) => {
         console.log(text);

       };
    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
              <ThemeProvider theme = { darkTheme }>
               
               <TextField
                      className="search"
                      id="filled basic"
                      // value={word}
                      
                      
                      label="Search for word"
                      onChange={(e) => handleText(e.target.value)}
                      
                      // onChange={(e) = handleText(e.target.value)}
                    />
                      
                      
                      
              
                    <TextField
                      
                      select
                      label="Language"
                      value={category}
                      onChange={(e) => handleChange(e)}
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
