import React from 'react'
import './form.scss'

const Form = () => {
  return (
    <>
    <form>

        <div className="right__form">

          <div className="input__feilds">
            <label htmlFor="intensity">intensity</label>
            <input type="number" onChange={() => {}}   />
          </div>

          <div className="input__feilds">
            <label htmlFor="Likelihood">Likelihood</label>
            <input type="number" onChange={() => {}}   />
          </div>

          <div className="input__feilds">
            <label htmlFor="Relevance">Relevance</label>
            <input type="number" onChange={() => {}}   />
          </div>

          <div className="input__feilds">
            <label htmlFor="Country">Country</label>
            <input type="number" onChange={() => {}}   />
          </div>

          

          

          

        </div>


        <div className="left__form">

        </div>
    </form>
    </>
  )
}

export default Form