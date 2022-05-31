import * as React from 'react';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";

function Selects(props) {
  const [SelectValue, setSelectValue] = useState("");
  const datalist = useSelector(state => state.datas);

  const { width } = props;

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  }

  console.log(datalist);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: width }}>
        <InputLabel id="demo-simple-select-autowidth-label">請選擇物料名稱:</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={SelectValue}
          onChange={handleChange}
          autoWidth
          label="請選擇"
        >
          <MenuItem value="">
            <em>請選擇</em>
          </MenuItem>
          {datalist.map((data) => {
            return <MenuItem value={data.系統代碼}>{data.料件名稱}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default Selects;