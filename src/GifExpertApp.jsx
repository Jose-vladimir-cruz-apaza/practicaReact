import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExportApp = () => {

	const [categories, setCategories] = useState(['One Punch']);
	
	const onAddCategory = (newCategory) =>{
		
		if( categories.includes(newCategory) ) return; // valida si existe el valor en el vector
		//console.log(newCategory);
		setCategories([newCategory ,...categories]);	
		//setCategories(cat=>[...cat, 'valorant']);

	}

	return (
		<>
			{/* Titulo */}
			<h1>GifExportApp</h1>
			{/* input */}
			<AddCategory 
			// setCategories =  { setCategories } 
				onNewCategory = { event => onAddCategory(event)}			
			/>
			{/* Listado de gifts */}
			{/*<button onClick={ onAddCategory } >Agregar</button>*/}
			
			{ categories.map( category => (
					// <div key={ category }>
					// 	<li> {category} </li>
					// </div>
					< GifGrid 
					key={ category } 
					category = { category }
					/>
			)) 
			}
			
				{/* Gift Item */}
			
		</>
		)
}; 