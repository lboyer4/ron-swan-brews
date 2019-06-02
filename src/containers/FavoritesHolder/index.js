import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

export const FavoritesHolder = (props) => {
  const favorite = props.breweries.map(brewery => {
    if(brewery.favorited) {
      return <Card {...brewery} key={brewery.id} />
    }
  })
  return(
    <section className='main'>
      <section className='image-container'>
        {favorite}
      </section>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  breweries: state.breweries
})

export default connect(mapStateToProps)(FavoritesHolder)