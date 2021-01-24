import styled from 'styled-components';

export const StyledTitlebar = styled.header`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 32px;
  width: calc(100% - 8px);
  background: transparent;
  padding: 4px;
  z-index: 999;
`;

export const DragRegion = styled.div`
  width: calc(100% - 132px);
  height: 100%;
  -webkit-app-region: drag;
`;

type WindowControlProps = {
  gridColumn?: number;
  isClose: boolean;
};

export const WindowControl = styled.div<WindowControlProps>`
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  grid-column: ${(props) => props.gridColumn || 1};
  &:hover {
    background-color: ${(props) =>
      props.isClose ? '#f1707a' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

export const WindowControls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 46px);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  svg {
    fill: white;
  }
`;

export const WindowTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
  height: 100%;
  margin-left: 8px;
  font-size: 14pt;
  color: #dfdfdf;
  user-select: none;
`;
