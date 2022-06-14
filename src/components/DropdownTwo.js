import React from 'react'

function DropdownTwo(props) {
    if(props.onClickDropdownTwo === true){
        return(
          <div className="dropdown-2">
              <div className="inner">
                  <p className="p11">History</p>
                  <p className="p22">Our Team</p>
                  <p className="p33">Blog</p>
              </div>
            </div>
        )
      }
  return (
    <div>
        
    </div>
  )
}

export default DropdownTwo