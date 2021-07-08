import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import Select from "react-select";
import PropTypes from 'prop-types';

export default function SortBy(props) {
  const { data, handleSort } = props;
  const [optionsArr] = React.useState([
    {
      id: 123,
      label: "Newest",
      value: "newest",
      sortBy: "created_at",
    },
    {
      id: 234,
      label: "Oldest",
      value: "oldest",
      sortBy: "created_at",
    },
    {
      id: 345,
      label: "A-Z",
      value: "ascending",
      sortBy: "name",
    },
    {
      id: 567,
      label: "Z-A",
      value: "descending",
      sortBy: "name",
    },
  ]);
  const onHandleSort = (e) => {
    let sortedArr = [];
    if (e.value === "oldest") {
      sortedArr = data.slice().sort((fVal, sVal) => {
        //if(firstValue.created_at && secondValue.created_at){
        return (
          new Date(Number(fVal.created_at)) -
          new Date(Number(sVal.created_at))
        );
        //}
      });
    } else if (e.value === "newest") {
      sortedArr = data.slice().sort((fVal, sVal) => {
        return (
          new Date(Number(sVal.created_at)) -
          new Date(Number(fVal.created_at))
        );
      });
    } else if (e.value === "ascending") {
      sortedArr = data.slice().sort((fVal, sVal) =>
        sVal.name.toLowerCase() > fVal.name.toLowerCase()
          ? -1
          : fVal.name.toLowerCase() > sVal.name.toLowerCase()
            ? 1
            : 0
      );
    } else if (e.value === "descending") {
      sortedArr = data.slice().sort((fVal, sVal) =>
        fVal.name.toLowerCase() > sVal.name.toLowerCase()
          ? -1
          : sVal.name.toLowerCase() > fVal.name.toLowerCase()
            ? 1
            : 0
      );
    }

    handleSort(sortedArr);
  };

  return (
    <div className="d-flex ml-auto align-items-center">
      <div className="sort-text">Sort By:</div>
      <div className="select-box p-3">
        <Select
          className="form-control-select"
          options={optionsArr}
          onChange={(e) => onHandleSort(e)}
        />
      </div>
      <div className="HoverView">
        <Link to="#" className="d-block p-3">
          <img
            src={toAbsoluteUrl("/media/health/gridview.svg")}
            alt=""
            className="mx-auto"
          />
        </Link>
      </div>
      <div className="HoverView">
        <Link to="#" className="d-block p-3 active">
          <img
            src={toAbsoluteUrl("/media/health/listview.svg")}
            alt=""
            className="mx-auto"
          />
        </Link>
      </div>
    </div>
  );
}

SortBy.propTypes = {
  data: PropTypes.array.isRequired,
  handleSort: PropTypes.func.isRequired
}