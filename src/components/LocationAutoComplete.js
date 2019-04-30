import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const LocationAutoComplete = ({
  company_address,
  handleInputChange,
  handleSelect
}) => {
  return (
    <PlacesAutocomplete
      name="company_address"
      value={company_address ? company_address : ''}
      onChange={event => {
        handleInputChange(event);
      }}
      onSelect={handleSelect}
      googleCallbackName="initOne"
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <input
            type="text"
            autoComplete="On"
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
