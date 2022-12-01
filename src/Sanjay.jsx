import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ReactTableDefaults } from 'react-table';
import matchSorter from 'match-sorter';


class ThreatReportTable extends React.Component{

constructor(props){
  super(props);

  this.state = {
    selected: [],
    row: []
  }
}
render(){

  const columns = this.props.label;

  const data = this.props.data;

  Object.assign(ReactTableDefaults, {
    defaultPageSize: 10,
    pageText: false,
    previousText: '<',
    nextText: '>',
    showPageJump: false,
    showPagination: true,
    defaultSortMethod: (a, b, desc) => {
    return b - a;
  },


  })

    return(
    <ReactTable className='threatReportTable'
        data= {data}
        columns={columns}
        getTrProps={(state, rowInfo, column) => {


        return {
          onClick: (e) => {


            var a = this.state.selected.indexOf(rowInfo.index);


            if (a == -1) {
              // this.setState({selected: array.concat(this.state.selected, [rowInfo.index])});
              this.setState({selected: [...this.state.selected, rowInfo.index]});
              // Pass props to the React component

            }

            var array = this.state.selected;

            if(a != -1){
              array.splice(a, 1);
              this.setState({selected: array});


            }
          },
          // #393740 - Lighter, selected row
          // #302f36 - Darker, not selected row
          style: {background: this.state.selected.indexOf(rowInfo.index) != -1 ? '#393740': '#302f36'},


        }


        }}
        noDataText = "No available threats"
        />

    )
}
}


  export default ThreatReportTable;