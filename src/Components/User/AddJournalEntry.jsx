import React, { useState } from 'react';
import { Button } from '../common';
import ErrorModal from './ErrorModal';
import Card from '../common/Card';
import classes from './AddJournalEntry.module.css';

const AddUser = (props) => {
  const [enteredJournal, setEnteredJournal] = useState('');
  const [error, setError] = useState();

  const addJournalHandler = (event) => {
    event.preventDefault();
    if (enteredJournal.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    props.onAddJournal(enteredJournal);
    setEnteredJournal('');
  };

  const JournalChangeHandler = (event) => {
    setEnteredJournal(event.target.value);
  };

  const errorHandler = () => setError(null);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addJournalHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredJournal}
            onChange={JournalChangeHandler}
          />
          <Button className={classes.button} type='submit'>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
