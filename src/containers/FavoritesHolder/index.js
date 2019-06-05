import React from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import PropTypes from 'prop-types';

export const FavoritesHolder = (props) => {
  const favorite = props.breweries.reduce((acc, brewery) => {
      if(brewery.favorited) {
      acc.push(<Card {...brewery} key={brewery.id} />)
    };
    return acc
  }, []);

  let message = !favorite.length && <h1>You have no favorites... Yet!! </h1>

  console.log('this is a favorite', favorite)

  return(
    <section className='main'>
      <section className='image-container'>
        {message}
        {favorite}
        
      </section>
    </section>
  )
};

export const mapStateToProps = (state) => ({
  breweries: state.breweries,
  search: state.search
});

export default connect(mapStateToProps)(FavoritesHolder);

FavoritesHolder.propTypes = {
  breweries: PropTypes.array,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}