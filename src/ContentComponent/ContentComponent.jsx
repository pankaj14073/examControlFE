import React from 'react';
import './style.css'
import { Card, Button, Radio } from 'react-bootstrap'


export class ContentComponent extends React.Component {

    setAnswer(event) {
        debugger;
        try{
        var cardElement =event.target.parentElement.parentElement.parentElement.parentElement; 
        var question_index =cardElement.id.split('_')[1];
        //alert(this.props.questions[question_index].a+ ' ' +event.target.value);
        if(this.props.questions[question_index].a.localeCompare(event.target.value)==0)
        {
            cardElement.className='card green-shadow';    
        }
        else
        {
            cardElement.className='card red-shadow'; 
        }
        }catch{
            console.log("Don't be too smart");
        }
    }

    setCorrectAnswer(id)
    {
    
    }  

    getQuestions(questions) {
        return (
            questions.map((question, index) => (
                <div key={index}>
                    <div id={'question_'+index} className="card">
                        <h5 className="card-header">{(index + 1+". ")+ question.q}</h5>
                        <div className="card-body">
                            <form id={index} onChange={this.setAnswer.bind(this)}>
                            <label className="container">{question.op1}
                            <input type="radio"  value = {question.op1} name='radio'></input>
                            <span className="checkmark"></span>
                            </label>
                            <label className="container">{question.op2}
                            <input type="radio"  value = {question.op2} name='radio'></input>
                            <span className="checkmark"></span>
                            </label>
                            <label className="container">{question.op3}
                            <input type="radio" value = {question.op3} name='radio'></input>
                            <span className="checkmark"></span>
                            </label>
                            <label className="container">{question.op4}
                            <input type="radio" value = {question.op4} name='radio'></input>
                            <span className="checkmark"></span>
                            </label>
                            <button type="button" className ="btn btn-primary">Show Answer</button>
                            </form>
                        </div>
                    </div>
                </div>
            ))
        );
    }

    render() {
        return (
            <div>
                {
                    this.getQuestions(this.props.questions)
                }
            </div>
        );
    }
}