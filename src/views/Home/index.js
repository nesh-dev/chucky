import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import {Grid} from '@material-ui/core'

import {getRandom} from '../../redux/actionCreators/random';
import {getCategory} from '../../redux/actionCreators/category'
import CategoryCard from '../../components/categoryCard'
import NavBar from '../../components/NavBar';
import './index.scss'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          category:'movie'
        };
    }

    componentDidMount() {
        const {getRandom, getCategory} = this.props
        getRandom({...this.state})
        getCategory()
    }

    render() {
        const {chuckNorris, categories} = this.props;
        return (
            <div>
                <NavBar />
                <div className="myCard">
                <Grid container spacing={12} >
                <CategoryCard categories={categories}/>
                </Grid>
                </div>
               
                
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return {
      chuckNorris: state.random.chuckNorrisJoke, 
      categories: state.category.categories
    };
  };
  
  const matchDispatchToProps = {
    getRandom: getRandom, 
    getCategory: getCategory
  };
  
  export default connect(
    mapStateToProps,
    matchDispatchToProps
  )(Home);


