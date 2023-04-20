import { render } from '@wordpress/element';
import MyComponent from "./components/MyComponent";
import './styles/main.scss'
import QueryObject from './types/QueryObject'
// Add Tailwinds
import 'tailwindcss/tailwind.css';
import TableComponent from "./components/TableComponent"; // this line imports Tailwind CSS

// Load React Admin Template
document.addEventListener('DOMContentLoaded', () => {
    // Get the Query Object from the DOM ( this should be done via api)
    const myElement = document.getElementById('kb-query-results');
    const queryResultsJson = myElement.dataset.queryResults;
    const queryResults:QueryObject[] = JSON.parse(queryResultsJson);
    const spinner = document.querySelector('.lds-roller');
    spinner.remove();


    // Render the react app
    const container = document.getElementById('admin-search-app');
    render(
        <>
            <TableComponent queryResult = {queryResults} />
        </>

        , container);
});