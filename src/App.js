import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Category from './components/Category'
import ItemsList from './components/ItemsList'
import { items } from './data'

const App = () => {

  const [itemsData, setItemsData] = useState(items);

  // get all category from items using: new Set() for unique category
  const allCategory = [ "all", ...new Set( items.map( item => item.category ) ) ];
  // console.log(allCategory)

  // filter (product) by category
  const filterByCat = (cat) => {
    if (cat === 'all') {
      setItemsData(items)
    } else {
      const newArrayFiltred = items.filter((item) => item.category === cat);
      setItemsData(newArrayFiltred);
    }
  }

  // search (product) by title
  const searchByTitle = (word) => {
    if (word !== '') {
      const newArrayFiltred = items.filter((item) => item.title === word);
      setItemsData(newArrayFiltred);
    }
  }


  return (
    <div className="color-body font">
      <NavBar searchByTitle={searchByTitle} />
      <Container>
        <Header />
        <Category filterByCat={filterByCat} allCategory={allCategory} />
        <ItemsList data={itemsData} />
      </Container>
    </div>
  )
}

export default App