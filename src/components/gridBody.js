import styled from 'styled-components';

// Should probably update when the window innerWidth changes, but for now it's fine
const GridBody = styled.div`
  display: grid;
  grid-template-rows: 56px;
  grid-template-columns: ${() => (window.innerWidth > 768 ? '1fr 2fr 1fr' : '16px 1fr 16px')};
  justify-items: center;
  margin-bottom: 56px;
`;

export default GridBody;
