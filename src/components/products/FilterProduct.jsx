import { useState } from 'react';
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Button, Modal, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const FilterProduct = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0px 20px',
      }}
    >
      <Button onClick={handleOpen} fullWidth>
        <Typography>
          Filtruj
        </Typography>
        <FilterListIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl fullWidth>
            <InputLabel>Kategoria</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">Wszystko</MenuItem>
              <MenuItem value="Shirts">Bluzki</MenuItem>
              <MenuItem value="Hoods">Bluzy</MenuItem>
              <MenuItem value="Pants">Spodnie</MenuItem>
              <MenuItem value="Accesories">Akcesoria</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Min Cena"
            variant="outlined"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />

          <TextField
            label="Max Cena"
            variant="outlined"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Sortowanie</InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <MenuItem value="">Brak</MenuItem>
              <MenuItem value="asc">Cena rosnąco</MenuItem>
              <MenuItem value="desc">Cena malejąco</MenuItem>
            </Select>
          </FormControl>

          <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
            Zastosuj filtry
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FilterProduct;
