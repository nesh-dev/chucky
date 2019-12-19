import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core'

import { getRandom } from '../../redux/actionCreators/random';
import { getCategory } from '../../redux/actionCreators/category'
import CategoryCard from '../../components/categoryCard'
import NavBar from '../../components/NavBar';
import JokeCard from '../../components/jokes'
import './index.scss'

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      category: 'movie'
    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    const { getRandom, getCategory } = this.props
    getRandom({ ...this.state })
    getCategory()
  }


  handleClick(e) {
    const { getRandom } = this.props
    this.setState({
      category: e.currentTarget.textContent
    }, () => {
      getRandom({ ...this.state })
    })
  }

  render() {
    const { chuckNorris, categories } = this.props;
    console.log(this.state.category)
    return (
      <div>
        <NavBar />

        <Paper>
          <div className="myCard">
            <Grid container spacing={3} >
              <Grid item xs={4}>
                <CategoryCard
                  categories={categories}
                  catChange={this.handleClick}
                />
              </Grid>
              <Grid item xs={8}>
                <JokeCard joke={chuckNorris} />
              </Grid>
            </Grid>
          </div>
        </Paper>

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


