import React from "react"
import axios from "axios"
import { useQuery } from "react-query"
import Cocktails from "./../components/Cocktails"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const DrinksPage = () => {
    const { spirit } = useParams()

    const spiritTitle = spirit.charAt(0).toUpperCase() + spirit.slice(1)

    const fetchCocktails = async (key, spirit) => {
        const res = await axios(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`
        )
        return res.data.drinks
    }

    const { isLoading, isError, data, error } = useQuery(
        ["cocktails", spirit],
        fetchCocktails
    )

    if (isLoading) return <span>Loading...</span>
    if (isError) return <span>{error.message}</span>

    return (
        <div>
            <h1 className="text-3xl text-center">{spiritTitle}</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((drink, i) => {
                    return (
                        <Link to={`/drink/${drink.idDrink}`}>
                            <motion.div
                                initial={{ scale: .5 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: .5 }}
                            >
                                <Cocktails
                                    name={drink.strDrink}
                                    image={drink.strDrinkThumb}
                                    key={i}
                                />
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default DrinksPage