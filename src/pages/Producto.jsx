import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Producto = () => {
	const [producto, setProducto] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const getProducto = async () => {
			const result = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await result.json();
			setProducto(data);
		};
		getProducto();
	}, []);
	const {idProducto, title, price, category, description,image} = producto
	return (

			<div className="inset-0 z-10 overflow-y-auto pt-20">
				<div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
					<div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
						<div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
							<div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
								<div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 my-auto">
									<img src={image} alt={description} className="object-cover object-center" />
								</div>
								<div className="sm:col-span-8 lg:col-span-7">
									<h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{title}</h2>
									<section aria-labelledby="information-heading" className="mt-2">
										<h3 id="information-heading" className="sr-only">
											Product information
										</h3>
										<p className="text-2xl text-gray-900">S/ {price}</p>
										{/* Reviews */}
										<div className="mt-6">
											<h4 className="sr-only">Reviews</h4>
											<div className="flex items-center">
												<div className="flex items-center">
													{/*
                  Heroicon name: mini/star

                  Active: "text-gray-900", Default: "text-gray-200"
                */}
													<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path
															fillRule="evenodd"
															d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
															clipRule="evenodd"
														/>
													</svg>
													{/* Heroicon name: mini/star */}
													<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path
															fillRule="evenodd"
															d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
															clipRule="evenodd"
														/>
													</svg>
													{/* Heroicon name: mini/star */}
													<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path
															fillRule="evenodd"
															d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
															clipRule="evenodd"
														/>
													</svg>
													{/* Heroicon name: mini/star */}
													<svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path
															fillRule="evenodd"
															d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
															clipRule="evenodd"
														/>
													</svg>
													{/* Heroicon name: mini/star */}
													<svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path
															fillRule="evenodd"
															d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<p className="sr-only">3.9 out of 5 stars</p>
												<a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
													117 reviews
												</a>
											</div>
										</div>
									</section>
									<section aria-labelledby="options-heading" className="mt-10">
										<h3 id="options-heading" className="sr-only">
											Product options
										</h3>
										<form>
											{/* Colors */}
											<div>
												<h4 className="text-sm font-medium text-gray-900">Color</h4>
												<fieldset className="mt-4">
													<legend className="sr-only">Choose a color</legend>
													<span className="flex items-center space-x-3">
														{/*
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  */}
														<label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
															<input type="radio" name="color-choice" defaultValue="White" className="sr-only" aria-labelledby="color-choice-0-label" />
															<span id="color-choice-0-label" className="sr-only">
																{" "}
																White{" "}
															</span>
															<span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full" />
														</label>
														{/*
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  */}
														<label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
															<input type="radio" name="color-choice" defaultValue="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
															<span id="color-choice-1-label" className="sr-only">
																{" "}
																Gray{" "}
															</span>
															<span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full" />
														</label>
														{/*
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  */}
														<label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
															<input type="radio" name="color-choice" defaultValue="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
															<span id="color-choice-2-label" className="sr-only">
																{" "}
																Black{" "}
															</span>
															<span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full" />
														</label>
													</span>
												</fieldset>
											</div>
											{/* Sizes */}
											<div className="mt-10">
												<div className="flex items-center justify-between">
													<h4 className="text-sm font-medium text-gray-900">Size</h4>
													<a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
														Size guide
													</a>
												</div>
												<fieldset className="mt-4">
													<legend className="sr-only">Choose a size</legend>
													<div className="grid grid-cols-4 gap-4">
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
															<span id="size-choice-0-label">XXS</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
															<span id="size-choice-1-label">XS</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="S" className="sr-only" aria-labelledby="size-choice-2-label" />
															<span id="size-choice-2-label">S</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="M" className="sr-only" aria-labelledby="size-choice-3-label" />
															<span id="size-choice-3-label">M</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="L" className="sr-only" aria-labelledby="size-choice-4-label" />
															<span id="size-choice-4-label">L</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
															<span id="size-choice-5-label">XL</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
															<input type="radio" name="size-choice" defaultValue="XXL" className="sr-only" aria-labelledby="size-choice-6-label" />
															<span id="size-choice-6-label">XXL</span>
															{/*
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    */}
															<span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true" />
														</label>
														{/* Active: "ring-2 ring-indigo-500" */}
														<label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
															<input type="radio" name="size-choice" defaultValue="XXXL" disabled className="sr-only" aria-labelledby="size-choice-7-label" />
															<span id="size-choice-7-label">XXXL</span>
															<span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
																<svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
																	<line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
																</svg>
															</span>
														</label>
													</div>
												</fieldset>
											</div>
											<button
												type="submit"
												className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
											>
												Agregar al carrito
											</button>
										</form>
									</section>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

	);
};

export default Producto;
