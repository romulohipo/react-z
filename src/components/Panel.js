import React from "react";

class Panel extends React.Component {
  render() {
    return (
      <div id="panel">
        <form className="container">
          <div className="form-group">
            <input
              type="text"
              className="input form-control"
              onChange={this.props.handleSearch}
              placeholder="Pesquisar Host"
              value={this.props.input}
            />
          </div>
        </form>
        <div className="container">
          <div className="list">
            <ul className="ul-panel">
              {this.props.filteredHosts.map((host) => {
                return (
                  <li key={host.hostid} className="d-flex flex-row li-panel span-list justify-content-between mb-2">
                    <div className="ml-2 d-inline-flex justify-content-start text-truncate">
                      <p className='text-truncate server_list_tittle'>{host.name} </p>
                    </div>
                    <div className='d-flex justify-content-end ml-2'>
                      <p className='server_list_ip'>{host.interfaces[0].ip}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
