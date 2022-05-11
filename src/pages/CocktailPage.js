import React from 'react'
import axios from "axios"
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const CocktailPage = () => {
    const { drinkId } = useParams()
    let ingredients
    let measurements

    const fetchCocktail = async (key, drinkId) => {
        const res = await axios(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        )
        return res.data.drinks[0]
    }

    const { isLoading, isError, data, error } = useQuery(
        ["cocktail", drinkId],
        fetchCocktail
    )

    if (data) {
        ingredients = Object.values(data).filter((value, i) => {
            if (i > 20 && i < 36) {
                if (value !== null) return value
            }
        })
    }

    if (data) {
        measurements = Object.values(data).filter((value, i) => {
            if (i > 35 && i < 51) {
                if (value !== null) return value
            }
        })
    }

    if (isLoading) return <span>Loading...</span>
    if (isError) return <span>{error.message}</span>

    return (
        <div className="flex justify-center">
            <motion.div
                initial={{ scale: .5 }}
                animate={{ scale: 1 }}
                transition={{ duration: .5 }}
            >
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
                    <img className="w-full" src={data.strDrinkThumb} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">
                            {data.strDrink}
                        </div>
                        <div className="font-bold text-xl mb-2 py-2 text-center">
                            Ingredients
                </div>
                        <div className="text-center">
                            {measurements.map((measurements, i) => {
                                return (
                                    <p className="text-gray-700 text-base" key={i}>
                                        {`${measurements} - ${ingredients[i]}`}
                                    </p>
                                )
                            })}
                        </div>
                        <div className="font-bold text-xl mb-2 py-2 text-center">
                            Directions
                </div>
                        <p className="text-gray-700 text-base text-center">
                            {data.strInstructions}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CocktailPage
