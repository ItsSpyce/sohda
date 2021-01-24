import React, { useState } from 'react';
import { remote } from 'electron';
import {
  StyledTitlebar,
  DragRegion,
  WindowControl,
  WindowControls,
  WindowTitle,
} from './styles';

type WindowControlProps = {
  onClick: React.MouseEventHandler;
};

const MinimizeIcon = (props: WindowControlProps) => (
  <WindowControl gridColumn={1} isClose={false} {...props}>
    <svg version="1.1" aria-hidden="true" width="10" height="10">
      <path d="M 0,5 10,5 10,6 0,6 Z" />
    </svg>
  </WindowControl>
);

const MaximizeIcon = (props: WindowControlProps) => (
  <WindowControl gridColumn={2} isClose={false} {...props}>
    <svg version="1.1" aria-hidden="true" width="10" height="10">
      <path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" />
    </svg>
  </WindowControl>
);

const CloseIcon = (props: WindowControlProps) => (
  <WindowControl gridColumn={3} isClose={true} {...props}>
    <svg aria-hidden="true" version="1.1" width="10" height="10">
      <path d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" />
    </svg>
  </WindowControl>
);

type TitlebarProps = {
  title?: string;
};

const Titlebar = (props: TitlebarProps) => {
  const window = remote.getCurrentWindow();
  const [isMaximized, setIsMaximized] = useState(window.isMaximized());
  return (
    <StyledTitlebar>
      <DragRegion>
        <WindowTitle>{props.title}</WindowTitle>
        <WindowControls>
          <MinimizeIcon
            onClick={() => {
              window.minimize();
            }}
          />
          <MaximizeIcon
            onClick={() => {
              isMaximized ? window.restore() : window.maximize();
              setIsMaximized(!isMaximized);
            }}
          />
          <CloseIcon
            onClick={() => {
              window.close();
            }}
          />
        </WindowControls>
      </DragRegion>
    </StyledTitlebar>
  );
};

export default Titlebar;
