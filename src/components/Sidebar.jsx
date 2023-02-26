import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilities/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack direction="row"
    sx= {{ overflowY:'auto', height: { sx: 'auto', md: '95%'},
    flexDirection: {md: 'column'},
    }}>
        {categories.map((category) => (
            <button className='category-btn' 
            onClick={() => setSelectedCategory(category.name)}
            style= {{ background: category.name === selectedCategory && '#e3e3e3',
            color: '#fff'}}
            key= {category.name}>
                <span style={{ color: category.name === selectedCategory ? 'black' : 'white', marginRight: '15px'}}>{category.icon}</span>
                <span style= {{ opacity: category.name === selectedCategory ? '1': '0.8',color: category.name === selectedCategory ? '#000': '#fff'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar;