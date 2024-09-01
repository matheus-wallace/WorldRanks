import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  body,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, dl, dd,
  figure, pre,
  fieldset, legend {
    margin: 0;
    padding: 0;
  }

  img: {
    display: 'block';
    max-width: '100%'
  }
`;
