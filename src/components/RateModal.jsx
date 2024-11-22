import { FormControl, Input, InputLabel, Modal, Rating, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import '../css/modalstyle.css';

const RateModal = ({ open, onClose }) => {
  const [value, setValue] = useState(0);

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal-content">
        <Typography variant="h6" className="modal-title">Zostaw Ocenę</Typography>
        
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="modal-rating"
        />
        
        {value <= 4 ? (
          <FormControl variant="outlined" sx={{ width: '100%' }}>
            <InputLabel>Co możemy poprawić?</InputLabel>
            <Input />
          </FormControl>
        ) : (
          <FormControl variant="outlined" sx={{ width: '100%' }}>
            <InputLabel>Co Ci się najbardziej podobało?</InputLabel>
            <Input />
          </FormControl>
        )}
        
        <Button
          variant="contained"
          onClick={onClose}
          className="modal-button"
        >
          Zakończ
        </Button>
      </Box>
    </Modal>
  );
};

export default RateModal;
