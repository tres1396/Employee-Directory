import React from "react";
import "./style.css";

function Table() {
  return (
    <div>
      <div className="rTable">
<div className="rTableRow">
<div className="rTableHead"><strong>Name</strong></div>
<div className="rTableHead"><span>Telephone</span></div>
<div className="rTableHead">&nbsp;</div>
</div>
<div className="rTableRow">
<div className="rTableCell">John</div>
<div className="rTableCell"><a href="tel:0123456785">0123 456 785</a></div>
<div className="rTableCell"><img src="images/check.gif" alt="checked" /></div>
</div>
<div className="rTableRow">
<div className="rTableCell">Cassie</div>
<div className="rTableCell"><a href="tel:9876532432">9876 532 432</a></div>
<div className="rTableCell"><img src="images/check.gif" alt="checked" /></div>
</div>
</div>
    </div>
  );
}

export default Table;