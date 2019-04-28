import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const LocationAutoComplete = props => {
  console.log(props);
  return (
    <PlacesAutocomplete
      name="company_address"
      value={props.company_address ? props.company_address : ''}
      onChange={event => {
        props.handleInputChange(event);
      }}
      onSelect={props.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <input
            {...getInputProps({
              placeholder: '1 Cedar Hill Dr, Atlanta, GA',
              className: 'location-search-input'
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
            <span className="poweredBy">Powered by Google Places API</span>
          </div>
        </>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationAutoComplete;
