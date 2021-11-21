import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed;
   bottom: 80px; /* How far down the page you want your ToC to live */
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #150050;
`