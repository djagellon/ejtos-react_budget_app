import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget'; //Code to import Budget.js

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AllocationForm from './components/AllocationForm';
// import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Budget Component */}        
                        <div className='col-sm'>
                            <Budget />
                        </div>
                        {/* Remaining Component*/}        
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        {/* ExpenseTotal component */}        
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    </div>
                    <h3 className="mt-3">Allocation</h3>
                    <div className='row'>
                        {/* ExpenseList component */}
                        <div className='col-sm'>
                            <ExpenseList/>
                        </div>
                    </div>      
                    <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row mt-3'>
                        {/* AllocationForm component */}
                        <div className='col-sm'>
                            <AllocationForm/>
                        </div>        
                    </div>
            </div>
        </AppProvider>
    );
};
export default App;
