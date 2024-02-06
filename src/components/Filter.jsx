// criar componente rafec
//import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtar: </h2>
        <div className="filter-options">
            <div>
                <h3>Status:</h3>
                <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <h3>Ordem Alfabética</h3>
                <button onClick={()=> setSort("Asc")}>Asc</button>
                <button onClick={()=> setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter