"use client";

import { useQueryState } from "nuqs";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Products from "@/components/products";
import { Suspense } from "react";

export default function Home() {
  const [category, setCategory] = useQueryState("category");
  const [company, setCompany] = useQueryState("company");

  return (
    <main className="mx-10">
      <div className="flex gap-2 mx-20 mb-10 float-right">
        <FormControl
          variant="filled"
          sx={{ m: 1, minWidth: 120, color: "white" }}
        >
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            label="Category"
            value={category}
            labelId="category-label"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
            <MenuItem value="computer">Computer</MenuItem>
            <MenuItem value="tv">TV</MenuItem>
            <MenuItem value="earphone">Earphone</MenuItem>
            <MenuItem value="tablet">Tablet</MenuItem>
            <MenuItem value="charger">Charger</MenuItem>
            <MenuItem value="mouse">Mouse</MenuItem>
            <MenuItem value="keypad">Keypad</MenuItem>
            <MenuItem value="bluetooth">Bluetooth</MenuItem>
            <MenuItem value="pendrive">Pendrive</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="speaker">Speaker</MenuItem>
            <MenuItem value="headset">Headset</MenuItem>
            <MenuItem value="laptop">Laptop</MenuItem>
            <MenuItem value="pc">PC</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          sx={{ m: 1, minWidth: 120, color: "white" }}
        >
          <InputLabel id="company-label">Company</InputLabel>
          <Select
            label="Company"
            value={company}
            labelId="company-label"
            id="company"
            onChange={(e) => setCompany(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="amz">Amazon</MenuItem>
            <MenuItem value="flp">Flipkart</MenuItem>
            <MenuItem value="snp">Snapdeal</MenuItem>
            <MenuItem value="myn">Myntra</MenuItem>
            <MenuItem value="azo">Azo</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Suspense
        fallback={
          <div className="h-[50vh] w-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Products />
      </Suspense>
    </main>
  );
}
