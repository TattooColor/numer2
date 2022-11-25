import { render } from "@testing-library/react";
import React from 'react'
const Parser = require('expr-eval').Parser;


class Bisection extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {XL:'',XR:'',ErrorApox:'',func:'',Arr:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    BisectionCalcFunction(XL,XR,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }
    }
    handleSubmit(event){
        const {XL,XR,ErrorApox,Funct} = this.state
       
        const xm = this.BisectionCalcFunction(XL,XR,ErrorApox,Funct)
        event.preventDefault()
        console.log("XL = "+XL)   //console log for debugging
        console.log("XR = "+XR)
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm) //same here at line 53 i literally stuck at re-rendering
       

    }

    handleChange(event){
      this.setState({[event.target.name] : event.target.value});
      this.setState({Arr:[]});
    }
    
    render(){
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
            <div>
                <h1 className="h1">&emsp;Bisection Method&emsp;</h1>
              <label htmlFor='XL' className="XLtext">&emsp;XL :&emsp;</label>
              <input
                className="XLfield"
                name='XL'
                placeholder='XL'
                value = {this.state.XL}
                onChange={this.handleChange}
                size='16'
              />
              </div>
              <p></p>
              <div>
              <label htmlFor='Funct' className="Functext">&emsp;Funct :&emsp;</label>
              <input
                className="Funcfield"
                name='Funct'
                placeholder='FUNCTION'
                value={this.state.Funct}
                onChange={this.handleChange}
                size='30'
              />
            </div>
            <p></p>
            <div>
            &emsp;<button className="hbutton">Calculate</button>
            </div>
          </form>
          </div>
        )
      }
    }

export default Bisection