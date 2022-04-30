import { useState, useEffect } from "react"
import axios from "axios"

// components
import { Card } from "./Card"

import "./styles.css"

export default function App() {
  const listaMokada = [
    {
      name: "Pokemon",
      sprites: {
        front_default: "",
        front_shiny: ""
      }
    }
  ]
  const [listaPokemon, setListaPokemon] = useState(listaMokada)
  const apiBase = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
  })
  useEffect(() => {
    const atualizaLista = async () => {
      const { data } = await apiBase.get("pokemon?limit=100")
      const { results } = data
      const newResquests = await results.map(({ url }) => axios.get(url))

      const allData = await axios.all(newResquests)
      const updateAllData = allData.map(({ data }) => data)

      setListaPokemon(updateAllData)
    }
    atualizaLista()
  }, [apiBase])

  return (
    <div className="App">
      {listaPokemon.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  )
}
