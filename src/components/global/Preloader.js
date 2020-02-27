import React from 'react'

const Preloader = ({ active }) => (
  active ? (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  ) : (
    <div className="progress" style={{visibility: "hidden"}}/>
  )
)

export default Preloader
