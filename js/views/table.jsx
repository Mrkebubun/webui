var React = require('react')
var Table = require('react-bootstrap/lib/Table')
var addr = require('./typography.jsx').addr

var Table = React.createClass({
  render: function () {
    return (
      <Table responsive>
        <tbody>
          {this.props.table.map(function (val) {
            return (
              <tr><td>{addr(val)}</td></tr>
            )
          })}
          {this.props.children}
        </tbody>
      </Table>
    )

  }
})

module.exports = Table
