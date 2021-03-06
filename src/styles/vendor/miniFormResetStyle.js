import { createGlobalStyle } from 'styled-components';

const MiniFormResetStyle = createGlobalStyle`
  input,
  select,
  button {
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    background:none;
    line-height:1;
  }

  /* Remove the stupid outer glow in Webkit */
  input:focus {
    outline:0;
  }

  /* Box Sizing Reset
  -----------------------------------------------*/

  /* All of our custom controls should be what we expect them to be */
  input {
    -webkit-appearance: none;
    border-radius: 0;
  }

  /* Make webkit render the search input like a normal text field */
  input[type=search] {
    -webkit-appearance:none;
    -webkit-box-sizing:content-box;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  /* Turn off the recent search for webkit. It adds about 15px padding on the left */
  ::-webkit-search-decoration {
    display:none;
  }
`;

export default MiniFormResetStyle;
