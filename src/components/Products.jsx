import { memo, useContext } from "react"
import { Context } from "../App"
const Products = () => {
    const title = useContext(Context)

    return (
        <div>
            <h3>Products {title}</h3>
        </div>
    )
}

export default memo(Products)