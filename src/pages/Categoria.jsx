import React from 'react'
import Filters from '../components/Container/Filters/Filters'
import FiltersModal from '../components/Container/Filters/FiltersModal'
import Header from '../components/Container/Header/Header'
import ItemListContainer from '../components/Products/ItemListContainer'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Categoria = () => {
    const {categoria} = useParams()
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const getProductsByCategory = async() =>{
            const result = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
			const data = await result.json();
			setProductos(data); 
        }
        getProductsByCategory()
    },[productos])
  return (
    <div className="bg-gray-100 mt-16">
			<FiltersModal show="hidden" />
			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* header */}
				<section aria-labelledby="products-heading" className="pt-6 pb-24">
					<h2 id="products-heading" className="sr-only">
						Products
					</h2>
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
						{/* Filters */}
						<Filters classes="hidden lg:block" />
						{/* Product grid */}
						<div className="lg:col-span-3">
							{/* Contenedor de productos */}
							<ItemListContainer productos={productos}/>
						</div>
					</div>
				</section>
			</main>
		</div>
  )
}

export default Categoria