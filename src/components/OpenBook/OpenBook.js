import React from "react";
import FileUpload from "./FileUpload";
import TableBook from "./TableBook";

const OpenBook = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <FileUpload setValue={props.setValue} setBook={props.setBook}/>
        </div>
        <div class="col-md-6">
          <TableBook setValue={props.setValue} setBook={props.setBook} />
        </div>
      </div>
    </div>
  );
}

export default OpenBook;
