import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import {pdfjs} from 'react-pdf';

import './css/index.css';

import App from './App';

const AppWithRouter = withRouter(App);

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactDOM.render(
    <Router>
        <AppWithRouter />
    </Router>
    , document.getElementById('root'));
