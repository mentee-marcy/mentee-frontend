import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(props) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < props.length; i += 1) {
    hash = props.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(props) {
  return {
    sx: {
      bgcolor: stringToColor(),
    },
    children: `${props.split(' ')[0][0]}${props.split(' ')[1][0]}`,
  };
}

export default function BackgroundLetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar()} />
    </Stack>
  );
}