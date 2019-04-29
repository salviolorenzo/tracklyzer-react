import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestUtils from 'react-dom/test-utils'; // ES6

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  it('renders an h1', function() {
    var component = TestUtils.renderIntoDocument(<App />, div);

    var h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');

    expect(h1.getDOMNode().textContent).toEqual('Tracklyzer');
  });
});
