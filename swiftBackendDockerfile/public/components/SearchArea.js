import React from 'react'

const SearchArea = ({ handleChange, handleSubmit }) => (
  <div className="container">
    <div className="row">
      <section className="col s4 offset-s4">
        <form action="" onSubmit={handleSubmit}>
          <div className="imput-field">
            <input
              placeholder="Search movie, bro"
              type="text"
              onChange={handleChange}
            />
          </div>
        </form>
      </section>
    </div>
  </div>
)

export default SearchArea