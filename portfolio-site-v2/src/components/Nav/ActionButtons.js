import React from 'react';
import { Stack } from '@mui/material';


import LanguageToggler from './LanguageToggler';
import ResumeDownloadButton from './ResumeDownloadButton';

const ActionButtons = ({ language, setLanguage }) => {


  return (
    <>
        <Stack direction="row" spacing={2}>
            <LanguageToggler language={language} setLanguage={setLanguage} />
            <ResumeDownloadButton />
        </Stack>
    </>
  );
}

export default ActionButtons;