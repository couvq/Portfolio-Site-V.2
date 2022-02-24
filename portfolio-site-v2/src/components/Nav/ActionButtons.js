import React from 'react';
import { Stack } from '@mui/material';


import LanguageToggler from './LanguageToggler';
import ResumeDownloadButton from './ResumeDownloadButton';

const ActionButtons = () => {


  return (
    <>
        <Stack direction="row" spacing={2}>
            <LanguageToggler />
            <ResumeDownloadButton />
        </Stack>
    </>
  );
}

export default ActionButtons;