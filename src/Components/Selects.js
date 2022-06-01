import * as React from 'react';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { setSidebarProd } from "../actions"

function Selects(props) {
  const dispatch = useDispatch();

  const [SelectValue, setSelectValue] = useState("請選擇:");
  const datalist = useSelector(state => state.datas);
  const SidebarProd = useSelector(state => state.SidebarProd);

  const { width } = props;

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    dispatch(setSidebarProd(e.target.value));
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: width }}>
        <InputLabel id="demo-simple-select-autowidth-label">請選擇:</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={'' || SidebarProd}
          // value={SidebarProd}
          onChange={handleChange}
          autoWidth
          defaultValue=""
          label="請選擇:"
        >
          <MenuItem value="">
            <em>請選擇:</em>
          </MenuItem>
          {datalist.map((data) => {
            const temp = data.系統代碼 ? data.系統代碼 : null
            return <MenuItem key={data.ID} value={temp}>{data.料件名稱}</MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default Selects;