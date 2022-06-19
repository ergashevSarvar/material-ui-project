import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon} from "@mui/icons-material/"
import React from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
})

const UserBox = styled(Box)({
   display:"flex",
   alignItems:"center",
   gap:"10px",
   marginBottom:"20px"
})
const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
 <Tooltip title="Delete" 
    sx={{
        position:"fixed", 
        bottom:20, 
        left:{xs:"calc(50% - 25px)", md:30},
    }}
    onClick={e=>setOpen(true)}  
  >
 <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  open={open}
  onClose={e=>setOpen(false)}
>
  <Box width={500} height={320} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={2} >
    <Typography variant='h6' color="gray" textAlign="center">
        Create post
    </Typography>
    <UserBox>
    <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
    <Typography fontWeight={500} variant="span">Sarvar Ergashev</Typography>
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
    <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary"/>
        <ImageIcon color="secondary"/>
        <VideoCameraBackIcon color="success"/>
        <PersonAddIcon color="error"/>
    </Stack>
    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button >Post</Button>
  <Button sx={{width:"100px"}}><DateRangeIcon  /></Button>
</ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add