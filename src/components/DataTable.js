import React from "react";
import DataBody from "./DataBody";

function DataTable({headings,users,handleSort}) {

    

  return (
    <div className="datatable mt-5">
      <table id="table"className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowercase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody users={users} />
        
      </table>
    </div>
  );
}

export default DataTable;
