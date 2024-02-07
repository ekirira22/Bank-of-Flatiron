# Bank-of-Flatiron
## Author 
Eric Maranga - Moringa School

## Installation 
  1. Git clone this repository to your working directory
  2. Download tailwind dependencies. This project runs on tailwind css and vanilla JS
  3. `npm install tailwindcss` to install tailwind on your root directory
  4. Launch project from live server to use
     **NB:**
     Whenever you make a change to css remember to compile it using  npm run build-css . See tailwind.config.js for more
     
## Tech Stack
HTML,Tailwind CSS, Vanilla JS, React JS

## User Stories
  1. A user can see a table of all transactions.
  2. A user can fill out and submit the form to add a new transaction. This should add the new transaction to the table * the new transaction does not have to be persisted to the backend *
  3. A user can filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
  4. A user can sort transactions alphabetically by category or description.
  5. A user can delete a transaction which will remove it from the table

## Algorithmic view
  1. Have a .App component as the main component. It will have three child components. 
  2. TransactionsTable component that displays existing transcations in db.json using useEffects Hook
  3. FormComponent that allows the user to add a new transcation to the table using useState, and persists the data to db.json
  4. Have a SearchFilter component that filters data passed down as props from App and returns the filtered values
  5. TransactionsTable component will have a Transaction component that will be a representation of the rows within the table

## Relationships
  APP (Parent component) : will be responsible for maintaing of state and prop sharing -> Children(see components)
  

## API Data
Click link below to see API Data
[API LINK](https://docs.google.com/document/d/1EWN0qLfAWfgzO1N2P8H5WmrsTx0nMkhp3s-rXVESTNA/edit?usp=sharing)
