import { createTheme, MenuItem, TextField } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react'
import categories from '../../data/category';
import './Header.css'

const Header = ({category, setCategory, word, setWord}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
          type: 'dark'
        },
      });

    function handleChange(e) {
        setCategory(e.target.value)
        setWord('')
    }




    return (
        <div>
            <div className="header">
                <span className="title">{ word? word: 'WORD HUNT'   }</span>
                <div className="inputs">
                    <ThemeProvider theme={darkTheme}>
                        <TextField id='standard-basic' value={word} label='search a word' className='search' onChange={e => setWord(e.target.value)} />
                    <TextField
                        select
                        label="Select"
                        value= {category}
                        onChange = {handleChange}
                        helperText="Please select lsnguage"
                    >
                            {categories.map((lang)=> <MenuItem key={lang.label} value={lang.label} > {lang.value} </MenuItem>)}
                    </TextField>
                    </ThemeProvider>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
