import { useState,useEffect } from 'react';
import { gefGifs } from '../helpers/GefGifs'

export const useFetchGifs = ( category ) => {

	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImagen = async() =>{
		const newImages = await gefGifs( category );
		setImages(newImages);
		setIsLoading(false);
	}

	useEffect( () => {
		getImagen();
	},[])

	return {
		images:images,
		isLoading
	}
}