import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { stacklineResT } from "../constants";
import { format } from "date-fns";
import { TableContainer, TableHeader } from "./styled";

const columns: GridColDef[] = [
  {
    field: "weekEnding",
    renderHeader: () => <TableHeader>WEEK ENDING</TableHeader>,
    width: 180,
    renderCell: (params) => (
      <div>{format(params.row.weekEnding, "MM-dd-yy") || ""}</div>
    ),
  },
  {
    field: "retailSales",
    renderHeader: () => <TableHeader>RETAIL SALES</TableHeader>,
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
    renderHeader: () => <TableHeader>WHOLESALE SALES</TableHeader>,
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
    renderHeader: () => <TableHeader>UNITS SOLD</TableHeader>,
    type: "number",
    width: 180,
  },
  {
    field: "retailerMargin",
    renderHeader: () => <TableHeader>RETAILER MARGIN</TableHeader>,
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

interface Props {
  productData: stacklineResT;
}
export const Table = ({ productData }: Props) => {
  const rows: stacklineResT["sales"] = productData.sales || [];
  return (
    <TableContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.retailerMargin}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        style={{ color: "#979fa7" }}
        pageSizeOptions={[6, 12]}
      />
    </TableContainer>
  );
};
