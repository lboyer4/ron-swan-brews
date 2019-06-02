import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import PropTypes from 'prop-types';

export const FavoritesHolder = (props) => {
  const favorite = props.breweries.map(brewery => {
      if(brewery.favorited) {
      return <Card {...brewery} key={brewery.id} />
    };
  });
  return(
    <section className='main'>
      <section className='image-container'>
        {favorite}
      </section>
    </section>
  )
};

export const mapStateToProps = (state) => ({
  breweries: state.breweries
});

export default connect(mapStateToProps)(FavoritesHolder);

FavoritesHolder.propTypes = {

breweries: PropTypes.array,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}