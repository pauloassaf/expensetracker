import React, {useState} from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useGlobalContext} from '../context/globalContext';
import Button from './Button';
import {plus} from "../utils/icons";


function ExpenseForm () {
    const {addExpense, getExpenses} = useGlobalContext()


    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        category: '',
        description: '',
        date: ''
    })


    const {title, amount, date, category, description} = inputState;

    const handleInput = name => event => {
        setInputState({...inputState, [name]: event.target.value})

    }

    const handleSubmit = event => {
        event.preventDefault()
        addExpense(inputState)
        getExpenses()
        setInputState({
            title: '',
            amount: '',
            category: '',
            description: '',
            date: ''
        })
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input type="text" value={title} name={'title'} placeholder='Salary Title' onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input type="text" name={'amount'} value={amount} placeholder='Salary Amount' onChange={handleInput('amount')} />    
            </div> 
            <div className="input-control">
                <DatePicker id='date' placeholderText="Enter a Date" selected={date} dateFormate="dd/mm/yyyy" onChange={(date) =>{setInputState({...inputState, date: date})}} />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">freelancing</option>
                    <option value="investments">investments</option>
                    <option value="stocks">stocks</option>
                    <option value="bank">bank</option>
                    <option value="youtube">youtube</option>
                    <option value="other">other</option>
                </select>
            </div>
            <div className='input-control'>
                <textarea name={'description'} value={description} placeholder='Add a description' id='description' cols='30' rows='4' onChange={handleInput('description')}></textarea>  
            </div>   
            <div className="submit-btn">
               <Button
                    onClick={handleSubmit}
                    name={'Add expense'}
                    icon={plus}
                    bPad={'0.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                    hColor={'red'}
               />
            </div> 
        </ExpenseFormStyled>
    )
}

const ExpenseFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
        color: rgba(34,34,96,1);
        &::placeholder{
            color: rgba(34,34,96,0.6);
        }
    }
    .input-control{
        input {
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-start;
        select{
            color: rgba(34,34,96,0.5);
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0,0,0,0.1);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default ExpenseForm