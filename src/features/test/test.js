import React, { useEffect, useState } from "react";
import SBGrid from "./SBGrid";

export default function TestGrid(){
    const [datagrid, setDatagrid] = useState(null);
  const [datagrid2, setDatagrid2] = useState(null);
  const tempData1 = [{"col0":"데이터1"}];
  const tempData2 = [{"col0":"데이터2"}];

  useEffect(() => {
    if (datagrid) {
      console.log(datagrid);
    }
  }, [datagrid]);

  useEffect(() => {
    if (datagrid2) {
      console.log(datagrid2);
    }
  }, [datagrid2]);
  return (
    <div className="App">
      <SBGrid
        id={`datagrid`}
        jsonref={tempData1}
        columns={[
          {
            caption: "col0",
            ref: "col0",
            style: "text-align:center;",
            type: "input",
          },
        ]}
        options={{
          rowheader: ["seq", "update"],
          selectmode: "free",
        }}
        parentid={`SBGridArea`}
        style={{ height: "350px" }}
        setDatagrid={setDatagrid}
      />
      <SBGrid
        id={`datagrid2`}
        jsonref={tempData2}
        columns={[
          {
            caption: "col0",
            ref: "col0",
            style: "text-align:center;",
            type: "input",
          },
        ]}
        options={{
          rowheader: ["seq", "update"],
          selectmode: "free",
        }}
        parentid={`SBGridArea2`}
        style={{ height: "350px" }}
        setDatagrid={setDatagrid2}
      />
    </div>
  );
}