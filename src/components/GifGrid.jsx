	//Se saco como funcion aparte para que no se vuelva a iniciar cada ves
	//No se debe poner una funcion en un funcional component como en GifGrid
	
import { useEffect,useState } from 'react';

import { gefGifs } from '../helpers/gefGifs';
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category })=>{

	const{ images, isLoading} = useFetchGifs(category);

	console.log(images, isLoading);

	return(
		<>
			<h3>{ category }</h3>
			{
				isLoading
				? (<h2>Cargando...</h2>)
				:null
			}
			<div className="card-grid">
				{ 
					images.map( ( image ) => (						
					<GifItem 
						key = { image.id }
						{ ...image }
					/>										
					)) 
					
				}
			</div>
		</>
		)
}