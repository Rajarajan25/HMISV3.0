import React from 'react';
import FilterBuilder from 'devextreme-react/filter-builder';
import Button from 'devextreme-react/button';
import DataSource from 'devextreme/data/data_source';


class FilterQuery extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataSource=props.handleDataSource;
    this.fields=props.fields;
    this.dataSource = new DataSource({
      store: props.value
    });
    this.filterBuilderInstance = null;
    this.state = {
      value: []
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.refreshDataSource = this.refreshDataSource.bind(this);
    this.setFilterBuilderInstance = this.setFilterBuilderInstance.bind(this);
  }
  render() {
    return (
      <div>
        <div className="filter-container">
          <FilterBuilder ref={this.setFilterBuilderInstance}
            fields={this.fields}
            value={this.state.value}
            onValueChanged={this.onValueChanged} />
          <Button
            text="Apply Filter"
            type="default"
            onClick={this.refreshDataSource} />
          <div className="dx-clearfix"></div>
        </div>
        <div className="list-container">
          {/* <List dataSource={this.dataSource} itemRender={CustomItem} /> */}
        </div>
      </div>
    );
  }
  setFilterBuilderInstance(ref) {
    this.filterBuilderInstance = ref.instance;
    this.refreshDataSource();
  }
  onValueChanged(e) {
    this.setState({
      value: e.value
    });
  }
  refreshDataSource() {
    console.log("Beforeeeee")
    console.log(this.dataSource)
    this.dataSource.filter(this.filterBuilderInstance.getFilterExpression());
    
    this.dataSource.load();
    this.handleDataSource(this.dataSource._items)
    // console.log("Aftereeeee")
    // console.log(this.dataSource._items)

    
  }
}

export default FilterQuery;
