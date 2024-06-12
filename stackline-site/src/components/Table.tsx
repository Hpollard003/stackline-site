import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { jsonResponse, stacklineResT } from "../constants";
import { format } from "date-fns";

const columns: GridColDef[] = [
  {
    field: "weekEnding",
    headerName: "WEEK ENDING",
    renderCell: (params) => (
      <div>{format(params.row.weekEnding, "MM-dd-yy") || ""}</div>
    ),
    width: 180,
  },
  {
    field: "retailSales",
    headerName: "RETAIL SALES",
    type: "number",
    width: 180,
    renderCell: (params) => (
      <div>
        {params.row.retailSales.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || ""}
      </div>
    ),
  },
  {
    field: "wholesaleSales",
    headerName: "WHOLESALE SALES",
    type: "number",
    width: 180,
    renderCell: (params) => (
      <div>
        {params.row.wholesaleSales.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || ""}
      </div>
    ),
  },
  {
    field: "unitsSold",
    headerName: "UNITS SOLD",
    type: "number",
    width: 180,
  },
  {
    field: "retailerMargin",
    headerName: "RETAILER MARGIN",
    type: "number",
    width: 180,
    renderCell: (params) => (
      <div>
        {params.row.retailerMargin.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || ""}
      </div>
    ),
  },
];

const rows: stacklineResT["sales"] = jsonResponse[0].sales || [];

export const Table = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "white",
        margin: "0 14px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.retailerMargin}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[6, 12]}
      />
    </div>
  );
};
