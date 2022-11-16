import { render } from "@testing-library/react";
import React,{ Component } from 'react';
import { useState } from 'react';
import { Container,Form,Button,Table} from 'react-bootstrap';


class Carmers extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {point1:'',val:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    CarmersCalcFunction()
    {
      render("12341")
    }

    handleSubmit(event){
        const {point1} = this.state
        this.LagrangequadraticCalcFunction(point1)
        event.preventDefault()
    }

    handleChange(event,rowIndex, columnIndex){
      this.setState({[event.target.name] : event.target.value});

      this.setState.val[rowIndex][columnIndex] =  Number(event.target.value);
    }
    render(){
        return(
      <div>
        <Table responsive="sm">
          <tbody>
          {this.state.val.map((row, rowIndex) => (
                  <tr>
                    {row.map((column, columnIndex) => (
                      <td>
                        <input 
                            id={column} 
                            onChange={this.handleChange(rowIndex,columnIndex)}/>
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
          </Table>
          <form onSubmit={this.handleSubmit}>
              <input
                className="XLfield"
                name='point1'
                placeholder='point1'
                value = {this.state.point1}
                onChange={this.handleChange}
                size='16'
              />
            <div>
            <button className="hbutton">Calculate</button>
            </div>
          </form>
      </div>
        )
      }
    }

export default Carmers