import { useEffect, useState, useCallback } from 'react';
import { Container,List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import './Home.css';
import { Header } from '../Component/Header';
import axios from 'axios';

export function HomePage() {
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const [movieList, setMovieList] = useState([]);

    const getMovieDatas = useCallback(async()=>{
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=242c1e91&type=movie&s=man`);
            const { Response, Search = [], totalResults } = data;
            console.log(Search);
            setMovieList(Search);
        } catch(e) {
            console.error(e.message);
        }
    },[searchValue, page]);

    useEffect(()=>{
        getMovieDatas();
    },[searchValue, page]);

    return (
        <div>
            <Header setSearchValue={setSearchValue}/>
			<Container>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="title"/>
                            <ListItemText primary="description"/>
                        </ListItemButton>
                    </ListItem>
                </List>
			</Container>
        </div>
    )
}