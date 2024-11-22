import { useState } from 'react';
import { Box, Select, MenuItem, FormControl, InputLabel, TextField, Button, Modal } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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

const VISIBLE_FIELDS = ['name', 'category', 'price', 'dateCreated'];

const FilterProduct = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const products = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 1, dateCreated: new Date() },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.5, dateCreated: new Date() },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8, dateCreated: new Date() },
    { id: 4, name: 'Broccoli', category: 'Vegetable', price: 1.5, dateCreated: new Date() },
    { id: 5, name: 'Chicken', category: 'Meat', price: 5, dateCreated: new Date() }
  ];

  const filteredProducts = products
    .filter(product => 
      (category === "" || product.category === category) &&
      (minPrice === "" || product.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || product.price <= parseFloat(maxPrice))
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <Box sx={{padding: '0 20px'}}>
      <Button onClick={handleOpen}>
        <FilterListIcon/>
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
              <MenuItem value="">Wszystkie</MenuItem>
              <MenuItem value="Fruit">Owoce</MenuItem>
              <MenuItem value="Vegetable">Warzywa</MenuItem>
              <MenuItem value="Meat">Mięso</MenuItem>
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

          <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">Zastosuj filtry</Button>
        </Box>
      </Modal>

      <DataGrid 
        rows={filteredProducts}
        columns={VISIBLE_FIELDS.map(field => ({ field, headerName: field, width: 150 }))}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
}

export default FilterProduct;
