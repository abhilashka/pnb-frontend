import React, { Component } from 'react';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReports } from '../../actions/reportAction';
import { Link } from 'react-router-dom';
import { store } from '../../store';


export class News extends Component {



    render() {
        return <div> hello from news </div>
    }

}



export default News 