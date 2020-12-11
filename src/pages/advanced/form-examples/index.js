import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { InboxOutlined } from '@ant-design/icons'
import { Input, Slider, Cascader, Upload, message, Checkbox, Select, Button, Form } from 'antd'

const { Dragger } = Upload
const { Option } = Select

const AdvancedFormExamples = () => {
  const [confirmDirty, setConfirmDirty] = useState(false)

  const handleConfirmBlur = e => {
    const { value } = e.target
    setConfirmDirty(confirmDirty || !!value)
  }

  const opts = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  }

  const marks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
    100: '100',
  }

  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]

  return (
    <>
      <div className="row">
        <div className="col-xl-4 col-lg-12 d-none">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap flex-column align-items-center">
                <div className="kit__utils__avatar kit__utils__avatar--size64 mb-3">
                  <img src="../../components/kit/core/img/avatars/3.jpg" alt="Mary Stanform" />
                </div>
                <div className="text-center">
                  <div className="text-dark font-weight-bold font-size-18">Mary Stanform</div>
                  <div className="text-uppercase font-size-12 mb-3">Support team</div>
                  <button className="btn btn-primary btn-with-addon">
                    <span className="btn-addon">
                      <i className="btn-addon-icon fe fe-plus-circle" />
                    </span>
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white bg-primary">
            <div className="card-body">
              <div className="d-flex mb-1">
                <div className="text-uppercase font-weight-bold mr-auto">Revenue</div>
                <div>+20% Goal Reached</div>
              </div>
              <div className="d-flex mb-2">
                <div className="font-size-24 font-weight-bold mr-auto">+3,125</div>
                <div className="font-size-24">5,000</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: '60%' }}
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <p className="text-dark font-size-48 font-weight-bold mb-2">$29,931</p>
              <p className="text-uppercase text-muted mb-3">Revenue today</p>
              <p className="mb-4">
                Lorem ipsum dolor sit amit,consectetur eiusmdd tempory incididunt ut labore et
                dolore magna elit
              </p>
              <a href="javascript: void(0);" className="btn btn-outline-primary mb-1">
                View history
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="kit__l19__item">
                  <div className="kit__l19__itemTime mr-3">16:00</div>
                  <div className="kit__l19__itemSeparator">
                    <div className="kit__utils__donut kit__utils__donut--danger mr-3" />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et
                    dolore magna elit enim at minim veniam quis nostrud
                  </div>
                </li>
                <li className="kit__l19__item">
                  <div className="kit__l19__itemTime mr-3">15:28</div>
                  <div className="kit__l19__itemSeparator">
                    <div className="kit__utils__donut kit__utils__donut--danger mr-3" />
                  </div>
                  <div>David Beckham was registered as administrator</div>
                </li>
                <li className="kit__l19__item">
                  <div className="kit__l19__itemTime mr-3">14:26</div>
                  <div className="kit__l19__itemSeparator">
                    <div className="kit__utils__donut kit__utils__donut--danger mr-3" />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et
                    dolore
                  </div>
                </li>
                <li className="kit__l19__item">
                  <div className="kit__l19__itemTime mr-3">13:22</div>
                  <div className="kit__l19__itemSeparator">
                    <div className="kit__utils__donut kit__utils__donut--danger mr-3" />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et
                    dolore magna elit enim at minim veniam quis nostrud
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12">
          <div className="row d-none">
            <div className="col-xl-12">
              <div className="w-100 d-flex">
                <div className=" d-flex ml-auto">
                  Sivakumar <i className="fa fa-filter" />
                </div>
                <div className=" d-flex ml-auto ">
                  <i className="fa fa-server" />
                  <i className="fa fa-sliders ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="filterFixedheader">
            <div className="card-body">
              <div className="d-flex flex-wrap flex-column align-items-center">
                <div className="w-100 d-flex">
                  <div className=" d-flex">
                    <div className="d-flex">
                      <div className="m-auto">
                        <i className="fa fa-filter mx-3 my-auto" />
                      </div>
                      <span className="m-auto">
                        <input
                          type="text"
                          placeholder="Filter by task name..."
                          className="form-control"
                        />
                      </span>
                    </div>
                    <select
                      className="selectpicker  mx-3 my-auto d-none"
                      multiple
                      data-live-search="true"
                      title="Staff list"
                    >
                      <option data-hidden="true" />
                      <option>Mustard</option>
                      <option>Ketchup</option>
                      <option>Relish</option>
                    </select>
                  </div>
                  <div className=" d-flex ml-auto ">
                    <div className="form-group">
                      Group by:
                      <select
                        className="selectpicker"
                        multiple
                        data-live-search="true"
                        title="Staff list"
                      >
                        <option data-hidden="true" />
                        <option>Mustard</option>
                        <option>Ketchup</option>
                        <option>Relish</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="col">
                        Subtasks:
                        <select
                          className="selectpicker"
                          data-live-search="false"
                          title="Staff list"
                        >
                          <option data-hidden="true" />
                          <option>Mustard</option>
                          <option>Ketchup</option>
                          <option>Relish</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="btn-group" aria-label role="group">
                        <button type="button" className="btn btn-success">
                          <i className="fe fe-edit mr-1" aria-hidden="true" />
                          Edit
                        </button>
                        <button type="button" className="btn btn-success">
                          <i className="fe fe-share mr-1" aria-hidden="true" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pageTitlecontent">
            <div className="d-flex">
              <div className="toggleLefticon">
                <a
                  href="javascript:void(0);"
                  data-toggle="collapse"
                  data-target="#holepageToggle"
                  className="borderColor11 textColor11"
                >
                  <i className="fa fa-angle-down" />
                </a>
              </div>
              <div className="pageTitle d-flex w-100">
                <span className="d-flex">Patients</span>
                <span className="d-flex">
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5.5a.5.5 0 00-1 0v1.519c-1.204.09-2.489.504-3.468 1.298a4.36 4.36 0 00-1.1 1.31l-1.553.388A.5.5 0 000 5.5v3a.5.5 0 00.379.485l1.78.445c.48.892 1.142 1.68 1.81 2.31a9.55 9.55 0 001.644 1.253 5 5 0 00.726.36c.215.084.446.147.661.147.215 0 .446-.063.661-.147a5 5 0 00.726-.36 9.551 9.551 0 001.643-1.254c.668-.629 1.332-1.417 1.811-2.309l1.78-.445A.5.5 0 0014 8.5v-3a.5.5 0 00-.379-.485l-1.553-.388a4.36 4.36 0 00-1.1-1.31c-.98-.794-2.264-1.208-3.468-1.298V.5zM1.672 8.278a5.365 5.365 0 01-.165-.696A4.966 4.966 0 011.52 5.76L1 5.89v2.22l.672.168zM13 8.11l-.672.168c.07-.228.126-.46.165-.696a4.967 4.967 0 00-.014-1.822l.521.13v2.22zM3.662 4.094c.774-.628 1.822-.984 2.838-1.072V4.5a.5.5 0 001 0V3.022c1.016.088 2.064.444 2.838 1.072.876.71 1.426 1.783 1.169 3.324-.225 1.347-1.138 2.63-2.162 3.593a8.562 8.562 0 01-1.466 1.12 4.02 4.02 0 01-.578.29A.993.993 0 017 12.5a.993.993 0 01-.301-.08 4.02 4.02 0 01-.578-.288 8.562 8.562 0 01-1.466-1.121c-1.024-.964-1.937-2.246-2.162-3.593-.257-1.541.293-2.614 1.169-3.324zm2.691 5.552a.5.5 0 00-.707.708L6 10l-.353.354.001.001.003.003.007.007a1.56 1.56 0 00.103.093c.066.056.16.132.274.208.213.142.565.334.965.334s.752-.192.965-.334a2.898 2.898 0 00.354-.279l.016-.015.007-.007.007-.007.003-.003.001-.001L8 10l.354.354a.5.5 0 00-.706-.709h-.001v.001l-.01.01-.048.042a1.889 1.889 0 01-.179.136C7.248 9.942 7.1 10 7 10c-.1 0-.248-.058-.41-.166a1.889 1.889 0 01-.226-.178l-.01-.01zM4.75 6a.75.75 0 00-.75.75v1a.75.75 0 001.5 0v-1A.75.75 0 004.75 6zm3.75.75a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0v-1z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="contentSection collapse show" id="holepageToggle">
            <div className="contentAreaouter d-none">
              <div className="topHeadercontent tableFixHead mb-5">
                <table className="table customeListtable text-nowrap table-striped">
                  <thead>
                    <tr>
                      <th>
                        <span className="headingHighlight bg-red text-white">
                          Healthy
                          <a className="ml-3">
                            <i className="fa fa-pencil" />
                          </a>
                          <a>
                            <i className="fa fa-check-square" />
                          </a>
                          <a>
                            <i className="fa fa-ellipsis-h" />
                          </a>
                        </span>
                        <span className="tasklistCount">5 Doctors</span>
                      </th>
                      <th>Assignee</th>
                      <th>Last seen</th>
                      <th>Working Hours</th>
                      <th>New Patient</th>
                      <th>Medications</th>
                      <th>Surgeries</th>
                      <th>Allergies</th>
                      <th>Priority</th>
                      <th>
                        <span>Comments</span>
                        <span className="addMultiplecolumn rounded-circle bg-grey">
                          <i className="fa fa-plus" />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Healthy</td>
                      <td>Assignee</td>
                      <td>May 2020</td>
                      <td>
                        <svg
                          id="noun_Calendar_3528893"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.049"
                          height="17.049"
                          viewBox="0 0 17.049 17.049"
                        >
                          <path
                            id="Path_335"
                            data-name="Path 335"
                            d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z"
                            transform="translate(-5 -5)"
                            fill="#707070"
                          />
                        </svg>
                      </td>
                      <td>New</td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          className="rounddashedCircle"
                          data-toggle="modal"
                          data-target="#medicalDetails"
                        >
                          <i className="fa fa-file-text" />
                        </a>
                      </td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>
                        <span className="rounddashedCircle">
                          <i className="fa fa-flag text-danger" />
                        </span>
                      </td>
                      <td>
                        <i className="fa fa-comments-o" />
                      </td>
                    </tr>
                    <tr>
                      <td>Healthy</td>
                      <td>Assignee</td>
                      <td>May 2020</td>
                      <td>
                        <svg
                          id="noun_Calendar_3528893"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.049"
                          height="17.049"
                          viewBox="0 0 17.049 17.049"
                        >
                          <path
                            id="Path_335"
                            data-name="Path 335"
                            d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z"
                            transform="translate(-5 -5)"
                            fill="#707070"
                          />
                        </svg>
                      </td>
                      <td>New</td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          className="rounddashedCircle"
                          data-toggle="modal"
                          data-target="#medicalDetails"
                        >
                          <i className="fa fa-file-text" />
                        </a>
                      </td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>
                        <span className="rounddashedCircle">
                          <i className="fa fa-flag text-danger" />
                        </span>
                      </td>
                      <td>
                        <i className="fa fa-comments-o" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="contentAreaouter">
              <div className="contentArea">
                <div className="topHeadercontent d-flex">
                  <div className="toggleLefticon">
                    <a
                      href="javascript:void(0);"
                      data-toggle="collapse"
                      data-target="#availabledoctors"
                      className="borderColor11 textColor11"
                    >
                      <i className="fa fa-angle-down" />
                    </a>
                  </div>
                  <ul className="list-inline w-100">
                    <li>
                      <span className="headingHighlight customProfileBG11 text-white">
                        Healthy
                        <a href="javascript:void(0);" className="ml-3">
                          <i className="fa fa-pencil" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa fa-check-square" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa fa-ellipsis-h" />
                        </a>
                      </span>
                      <span className="tasklistCount">5 Doctors</span>
                    </li>
                    <li>
                      <span>Assignee</span>
                    </li>
                    <li>
                      <span>Last seen</span>
                    </li>
                    <li className="d-none">
                      <span>Date created</span>
                    </li>
                    <li>
                      <span>Working Hours</span>
                    </li>
                    <li>
                      <span>New Patient</span>
                    </li>
                    <li>
                      <span>Medications</span>
                    </li>
                    <li className="d-none">
                      <span>Physician</span>
                    </li>
                    <li className="d-none">
                      <span>Insurance</span>
                    </li>
                    <li>
                      <span>Surgeries</span>
                    </li>
                    <li>
                      <span>Allergies</span>
                    </li>
                    <li>
                      <span>Priority</span>
                    </li>
                    <li className="d-none">
                      <span>Conditions</span>
                    </li>
                    <li>
                      <span>Comments</span>
                      <span className="addMultiplecolumn rounded-circle bg-grey">
                        <i className="fa fa-plus" />
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="innerContent collapse show" id="availabledoctors">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="topMiddlecontent">
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG1">AK</span>{' '}
                              <span>Anand Kumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li className="activeStatuscontent customProfileBG4">May 2020</li>
                          <li className="d-none">Date created</li>
                          <li>
                            <svg
                              id="noun_Calendar_3528893"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.049"
                              height="17.049"
                              viewBox="0 0 17.049 17.049"
                            >
                              <path
                                id="Path_335"
                                data-name="Path 335"
                                d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z"
                                transform="translate(-5 -5)"
                                fill="#707070"
                              />
                            </svg>
                          </li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li className="activeStatuscontent customProfileBG12">No</li>
                          <li className="activeStatuscontent customProfileBG13">Yes</li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-flag text-danger" />
                            </span>
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a
                              className="userLogoicon"
                              data-toggle="modal"
                              data-target="#commonModalright"
                            >
                              <span className="listprofileIcon customProfileBG2">SK</span>{' '}
                              <span>Siva Kumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li className="activeStatuscontent customProfileBG7">Sep 2020</li>
                          <li className="d-none">Date created</li>
                          <li>
                            <svg
                              id="noun_Calendar_3528893"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.049"
                              height="17.049"
                              viewBox="0 0 17.049 17.049"
                            >
                              <path
                                id="Path_335"
                                data-name="Path 335"
                                d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z"
                                transform="translate(-5 -5)"
                                fill="#707070"
                              />
                            </svg>
                          </li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li className="activeStatuscontent customProfileBG9">No</li>
                          <li className="activeStatuscontent customProfileBG12">Yes</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                        <ul className="d-none">
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG3">SB</span>{' '}
                              <span>Sureshbabu</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Aug 2020</li>
                          <li className="d-none">Date created</li>
                          <li>
                            <svg
                              id="noun_Calendar_3528893"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.049"
                              height="17.049"
                              viewBox="0 0 17.049 17.049"
                            >
                              <path
                                id="Path_335"
                                data-name="Path 335"
                                d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z"
                                transform="translate(-5 -5)"
                                fill="#707070"
                              />
                            </svg>
                          </li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                        <ul className="d-none">
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG4">PB</span>{' '}
                              <span>Prabaker</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>July 2020</li>
                          <li className="d-none">Date created</li>
                          <li>
                            <svg
                              id="noun_Calendar_3528893"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.049"
                              height="17.049"
                              viewBox="0 0 17.049 17.049"
                            >
                              <path
                                id="Path_335"
                                data-name="Path 335"
                                d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z"
                                transform="translate(-5 -5)"
                                fill="#707070"
                              />
                            </svg>
                          </li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentAreaouter">
              <div className="contentArea">
                <div className="topHeadercontent d-flex">
                  <div className="toggleLefticon">
                    <a
                      href="javascript:void(0);"
                      data-toggle="collapse"
                      data-target="#onFielddoctors"
                      className="borderColor2 textColor2"
                    >
                      <i className="fa fa-angle-down" />
                    </a>
                  </div>
                  <ul className="list-inline w-100">
                    <li>
                      <span className="headingHighlight customProfileBG2 text-white">
                        On-Field Doctors
                        <a className="ml-3">
                          <i className="fa fa-pencil" />
                        </a>
                        <a>
                          <i className="fa fa-check-square" />
                        </a>
                        <a>
                          <i className="fa fa-ellipsis-h" />
                        </a>
                      </span>
                      <span className="tasklistCount">5 Doctors</span>
                    </li>
                  </ul>
                </div>
                <div className="innerContent collapse show" id="onFielddoctors">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="topMiddlecontent">
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG1">AK</span>{' '}
                              <span>Anandkumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>May 2020</li>
                          <li className="d-none">Date created</li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>Yes</li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-flag text-danger" />
                            </span>
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a
                              className="userLogoicon"
                              data-toggle="modal"
                              data-target="#commonModalright"
                            >
                              <span className="listprofileIcon customProfileBG2">SK</span>{' '}
                              <span>Sivakumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Sep 2020</li>
                          <li className="d-none">Date created</li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto rounded-circle "
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>Yes</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG3">SB</span>{' '}
                              <span>Sureshbabu</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Aug 2020</li>
                          <li className="d-none">Date created</li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG4">PB</span>{' '}
                              <span>Prabaker</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>July 2020</li>
                          <li className="d-none">Date created</li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentAreaouter">
              <div className="contentArea">
                <div className="topHeadercontent d-flex">
                  <div className="toggleLefticon">
                    <a
                      href="javascript:void(0);"
                      data-toggle="collapse"
                      data-target="#labAssitentcontent"
                      className="borderColor3 textColor3"
                    >
                      <i className="fa fa-angle-down" />
                    </a>
                  </div>
                  <ul className="list-inline w-100">
                    <li>
                      <span className="headingHighlight customProfileBG3 text-white">
                        Lab Assistant
                        <a className="ml-3">
                          <i className="fa fa-pencil" />
                        </a>
                        <a>
                          <i className="fa fa-check-square" />
                        </a>
                        <a>
                          <i className="fa fa-ellipsis-h" />
                        </a>
                      </span>
                      <span className="tasklistCount">3 Lab Assistant</span>
                    </li>
                  </ul>
                </div>
                <div className="innerContent collapse show" id="labAssitentcontent">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="topMiddlecontent">
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG1">AK</span>{' '}
                              <span>Anandkumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>May 2020</li>
                          <li className="d-none">Date created</li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>Yes</li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-flag text-danger" />
                            </span>
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a
                              className="userLogoicon"
                              data-toggle="modal"
                              data-target="#commonModalright"
                            >
                              <span className="listprofileIcon customProfileBG2">SK</span>{' '}
                              <span>Sivakumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Sep 2020</li>
                          <li className="d-none">Date created</li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>Yes</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG3">SB</span>{' '}
                              <span>Sureshbabu</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Aug 2020</li>
                          <li className="d-none">Date created</li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG4">PB</span>{' '}
                              <span>Prabaker</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>July 2020</li>
                          <li className="d-none">Date created</li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentAreaouter">
              <div className="contentArea">
                <div className="topHeadercontent d-flex">
                  <div className="toggleLefticon">
                    <a
                      href="javascript:void(0);"
                      data-toggle="collapse"
                      data-target="#emergencyDepartment"
                      className="borderColor9 textColor9"
                    >
                      <i className="fa fa-angle-down" />
                    </a>
                  </div>
                  <ul className="list-inline w-100">
                    <li>
                      <span className="headingHighlight customProfileBG9 text-white">
                        Emergency Department
                        <a className="ml-3">
                          <i className="fa fa-pencil" />
                        </a>
                        <a>
                          <i className="fa fa-check-square" />
                        </a>
                        <a>
                          <i className="fa fa-ellipsis-h" />
                        </a>
                      </span>
                      <span className="tasklistCount">12 Emergency</span>
                    </li>
                  </ul>
                </div>
                <div className="innerContent collapse show" id="emergencyDepartment">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="topMiddlecontent">
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG1">AK</span>{' '}
                              <span>Anandkumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>May 2020</li>
                          <li className="d-none">Date created</li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>Yes</li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-flag text-danger" />
                            </span>
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="rounddashedCircle"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-comments-o" />
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a
                              className="userLogoicon"
                              data-toggle="modal"
                              data-target="#commonModalright"
                            >
                              <span className="listprofileIcon customProfileBG2">SK</span>{' '}
                              <span>Sivakumar</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Sep 2020</li>
                          <li className="d-none">Date created</li>
                          <li>Yes</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>Yes</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG3">SB</span>{' '}
                              <span>Sureshbabu</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>Aug 2020</li>
                          <li className="d-none">Date created</li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>No</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a className="userLogoicon">
                              <span className="listprofileIcon customProfileBG4">PB</span>{' '}
                              <span>Prabaker</span>
                            </a>
                          </li>
                          <li>
                            <span className="rounddashedCircle">
                              <i className="fa fa-user" />
                            </span>
                          </li>
                          <li>July 2020</li>
                          <li className="d-none">Date created</li>
                          <li>No</li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="m-auto"
                              data-toggle="modal"
                              data-target="#medicalDetails"
                            >
                              <i className="fa fa-file-text" />
                            </a>
                          </li>
                          <li className="d-none">Physician</li>
                          <li className="d-none">Insurance</li>
                          <li>Yes</li>
                          <li>No</li>
                          <li>
                            <i className="fa fa-flag text-danger" />
                          </li>
                          <li className="d-none">Conditions</li>
                          <li>
                            <i className="fa fa-comments-o" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal bottomLeftmenuModal fade modal-left"
          id="leftmenuUserprofile"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/*div class="modal-header">
         <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div*/}
              <div className="modal-body p-0">
                <div className="d-flex">
                  <div className="d-flex border-right">
                    <div className="leftmenumodalProfileicon w-50px py-3">
                      <span className="currentUserprofile bg-red">S</span>
                      <span className="bg-blue">S</span>
                      <span className="bg-green">S</span>
                    </div>
                  </div>
                  <div className="d-flex border-right px-3 pt-2 col">
                    <div className="d-inline-block w-100">
                      <div className="d-block w-100 leftMenumodallink minHeight300">
                        <ul className="list-inline w-100">
                          <li className="mb-2">
                            <a href="#" className="d-flex">
                              <div className="leftmenumodalProfileicon d-inline-block mr-2">
                                <span className="bg-red m-0">S</span>
                              </div>
                              <div className="userName d-flex">
                                <span className="m-auto">Sivakumar</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">Setting</a>
                          </li>
                          <li>
                            <a href="#">Import/Export</a>
                          </li>
                          <li>
                            <a href="#">People</a>
                          </li>
                          <li>
                            <a href="#">Spaces</a>
                          </li>
                          <li>
                            <a href="#">Trash</a>
                          </li>
                          <li>
                            <a href="#">Billing</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex px-3 pt-2 col">
                    <div className="d-inline-block w-100">
                      <div className="d-block w-100 leftMenumodallink">
                        <ul className="list-inline w-100">
                          <li className="mb-2">
                            <a href="#" className="d-flex">
                              <div className="leftmenumodalProfileicon d-inline-block mr-2">
                                <span className="bg-blue m-0">S</span>
                              </div>
                              <div className="userName d-flex">
                                <span className="m-auto">Sivakumar</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">My Settings</a>
                          </li>
                          <li>
                            <a href="#">Notifications</a>
                          </li>
                          <li>
                            <a href="#">Apps</a>
                          </li>
                          <li>
                            <a href="#">Rewards</a>
                          </li>
                          <li>
                            <a href="#">Log out</a>
                          </li>
                          <li>
                            <div className="dropdown-divider my-3" />
                          </li>
                          <li>
                            <a href="#">Help</a>
                          </li>
                          <li>
                            <a href="#">Hotkeys</a>
                          </li>
                          <li>
                            <a href="#">Help</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="leftmenuModalfooter w-100">
                  <ul className="list-inline w-100 d-flex m-0">
                    <li>
                      <a>Download Apps:</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-android" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-desktop" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-chrome" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal commonModalright fade modal-right"
          id="medicalDetails"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="medicalDetails"
          aria-hidden="true"
          data-target="#staticBackdrop"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <div className="d-inline-block">
                  <div className="d-flex">
                    <div className="leftmenumodalProfileicon d-inline-block mr-2">
                      <span className="bg-blue m-0">S</span>
                    </div>
                    <div className="userName d-flex mr-2">
                      <span className="m-auto">Sivakumar</span>
                    </div>
                    <div className="dropdown d-flex">
                      <a
                        className="d-flex m-auto"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.704"
                          height="21.259"
                          viewBox="0 0 20.704 21.259"
                        >
                          <g
                            id="noun_Color_Picker_1005580"
                            data-name="noun_Color Picker_1005580"
                            transform="translate(-2.48 -1.335)"
                          >
                            <path
                              id="Path_391"
                              data-name="Path 391"
                              d="M82.834,64.432a.245.245,0,0,1-.2-.382c.132-.2.26-.4.377-.61a.246.246,0,0,1,.426.245c-.125.218-.257.434-.4.64A.245.245,0,0,1,82.834,64.432Z"
                              transform="translate(-60.4 -46.708)"
                              fill="#707070"
                              stroke="#707070"
                              strokeWidth="0.2"
                            />
                            <path
                              id="Path_392"
                              data-name="Path 392"
                              d="M13.525,25.721a10.642,10.642,0,0,1-1.088-.054.247.247,0,0,1,.047-.493,10.672,10.672,0,0,0,1.414.044.245.245,0,1,1,0,.49Zm1.823-.154a.246.246,0,0,1-.042-.49,10.445,10.445,0,0,0,1.375-.333.245.245,0,0,1,.147.468,10.874,10.874,0,0,1-1.439.348Zm-4.313-.137h-.056a10.918,10.918,0,0,1-1.414-.441.246.246,0,1,1,.176-.458,10.423,10.423,0,0,0,1.35.422.247.247,0,0,1-.056.49Zm7.068-.735A.245.245,0,0,1,18,24.228a10.45,10.45,0,0,0,1.225-.691.245.245,0,1,1,.267.412,11.009,11.009,0,0,1-1.292.735.245.245,0,0,1-.1.01Zm-9.764-.311a.245.245,0,0,1-.118-.032,10.972,10.972,0,0,1-1.243-.8.245.245,0,0,1,.294-.392,10.484,10.484,0,0,0,1.184.77.245.245,0,0,1-.12.458Zm12.183-1.265a.245.245,0,0,1-.159-.431,10.587,10.587,0,0,0,1-1,.245.245,0,1,1,.368.324,11.087,11.087,0,0,1-1.051,1.042A.245.245,0,0,1,20.522,23.118Zm-14.5-.466a.245.245,0,0,1-.172-.071,10.992,10.992,0,0,1-.98-1.108.245.245,0,0,1,.387-.3A10.567,10.567,0,0,0,6.2,22.231a.245.245,0,0,1-.172.419ZM4.256,20.371a.245.245,0,0,1-.213-.123,10.994,10.994,0,0,1-.652-1.328.245.245,0,1,1,.453-.186A10.482,10.482,0,0,0,4.467,20a.245.245,0,0,1-.211.368ZM3.161,17.7a.245.245,0,0,1-.245-.184,10.9,10.9,0,0,1-.265-1.458A.247.247,0,0,1,3.141,16a10.352,10.352,0,0,0,.26,1.39.245.245,0,0,1-.245.306Zm-.336-2.87h0a.245.245,0,0,1-.245-.245,11.055,11.055,0,0,1,.125-1.47.248.248,0,0,1,.49.074,10.587,10.587,0,0,0-.12,1.409A.245.245,0,0,1,2.825,14.83Zm.436-2.855a.245.245,0,0,1-.069,0,.245.245,0,0,1-.167-.3,10.871,10.871,0,0,1,.517-1.39.245.245,0,1,1,.446.2,10.342,10.342,0,0,0-.49,1.326A.245.245,0,0,1,3.261,11.975ZM4.45,9.342a.24.24,0,0,1-.206-.368,11.053,11.053,0,0,1,.87-1.2.245.245,0,1,1,.377.314,10.523,10.523,0,0,0-.833,1.13.245.245,0,0,1-.208.12ZM6.3,7.122A.245.245,0,0,1,6.136,6.7a10.987,10.987,0,0,1,1.157-.924.245.245,0,1,1,.279.4,10.538,10.538,0,0,0-1.105.882.245.245,0,0,1-.167.066Z"
                              transform="translate(0 -3.228)"
                              fill="#707070"
                              stroke="#707070"
                              strokeWidth="0.2"
                            />
                            <path
                              id="Path_393"
                              data-name="Path 393"
                              d="M26.769,2.24a.245.245,0,0,1-.11-.463c.223-.113.453-.221.681-.316a.245.245,0,0,1,.191.451c-.218.093-.439.194-.652.3A.245.245,0,0,1,26.769,2.24Z"
                              transform="translate(-18.077 0)"
                              fill="#707070"
                              stroke="#707070"
                              strokeWidth="0.2"
                            />
                            <path
                              id="Path_394"
                              data-name="Path 394"
                              d="M.828,0H1.934A.826.826,0,0,1,2.76.826V4.549H0V.828A.826.826,0,0,1,.828,0Z"
                              transform="matrix(0.694, 0.72, -0.72, 0.694, 18.607, 4.445)"
                              fill="#707070"
                              stroke="#707070"
                              strokeWidth="0.2"
                            />
                            <path
                              id="Path_395"
                              data-name="Path 395"
                              d="M35.182,27.082l1.4,1.458-4.62,4.453a2.713,2.713,0,0,1-.98.61l-1.716.6v-.012l.659-1.679a2.713,2.713,0,0,1,.647-.968l4.6-4.463m0-.52L30.308,31.27a3.1,3.1,0,0,0-.735,1.1l-.657,1.679a.382.382,0,0,0,.353.524.387.387,0,0,0,.13-.022l1.7-.6a3.1,3.1,0,0,0,1.125-.694l4.884-4.71L35.194,26.56Z"
                              transform="translate(-19.861 -18.96)"
                              fill="#707070"
                              stroke="#707070"
                              strokeWidth="0.2"
                            />
                            <path
                              id="Path_396"
                              data-name="Path 396"
                              d="M54.8,26.983a.184.184,0,0,1-.132-.056l-3.1-3.22a.184.184,0,0,1,.265-.245l3.1,3.21a.184.184,0,0,1-.132.311Z"
                              transform="translate(-36.96 -16.594)"
                              fill="#707070"
                              stroke="#707070"
                              strokeWidth="0.2"
                            />
                          </g>
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-lg-right"
                        dropdown
                        auto-close="disabled"
                      >
                        <div className="dropdown-item" href="#">
                          <ul className="list-inline customColorlist">
                            <li>
                              <span className="customProfileBG1">B</span>
                              <span className="customProfileBG2">B</span>
                              <span className="customProfileBG3">B</span>
                              <span className="customProfileBG4">B</span>
                              <span className="customProfileBG5">B</span>
                              <span className="customProfileBG6">B</span>
                              <span className="customProfileBG7">B</span>
                              <span className="customProfileBG8">B</span>
                              <span className="customProfileBG9">B</span>
                              <span className="customProfileBG10">B</span>
                              <span className="customProfileBG11">B</span>
                              <span className="customProfileBG12">B</span>
                            </li>
                            <li>
                              <div className="card bg-color">
                                <div className="card-body text-center d-flex justify-content-center align-items-center flex-column">
                                  <p>My background color will be changed</p>
                                  <span
                                    id="color-picker-3"
                                    className="btn btn-outline-primary btn-sm"
                                  >
                                    Color Picker
                                  </span>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body text-center d-flex justify-content-center align-items-center flex-column">
                                  <p className="text-color">My text color will be changed</p>
                                  <button
                                    id="color-picker-4"
                                    className="btn btn-outline-primary btn-sm"
                                  >
                                    Color Picker
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="userName d-flex">
                      <span className="m-auto">Online</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex ml-auto my-auto">
                  <div className="leftmenumodalProfileicon d-inline-block mr-2">
                    <span className="bg-blue m-0">+</span>
                  </div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="d-flex justify-content-center">
                  <div className="d-flex py-4 px-0 col-10 ">
                    <form className="w-100" action="/action_page.php">
                      <div className="form-row">
                        <div className="form-group col">
                          <label htmlFor="userName">Name</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <select className="custom-select" id="usertype" aria-label="usertype">
                                <option selected>Dr</option>
                                <option value={1}>St</option>
                                <option value={1}>Mr</option>
                                <option value={2}>Miss</option>
                                <option value={3}>Mrs</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              aria-label="First name"
                              className="form-control"
                              placeholder="User name"
                              id="name"
                            />
                            <input
                              type="text"
                              aria-label="Degree"
                              className="form-control"
                              placeholder="Degree"
                              id="degree"
                            />
                          </div>
                        </div>
                        <div className="form-group d-none">
                          <label htmlFor="userName">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            id="userName"
                            name="userName"
                            required
                          />
                          <div className="valid-feedback">Valid.</div>
                          <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Official Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Official Email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Personal Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Personal Email"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Mobile</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your number"
                            id="mobileNumber"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Alternative number</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your alternative number"
                            id="alternativeNumber"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="dob">Date of birth</label>
                          <div
                            className="input-group date"
                            id="datepicker-only-init"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control datetimepicker-input"
                              data-target="#datepicker-only-init"
                            />
                            <div
                              className="input-group-append"
                              data-target="#datepicker-only-init"
                              data-toggle="datetimepicker"
                            >
                              <div className="input-group-text rounded-0">
                                <i className="fa fa-calendar" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="sex">Sex</label>
                          <select className="form-control" required>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="dob">Blood Group</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Blood group"
                            id="bloodGroup"
                            name="bloodGroup"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Location</label>
                          <select className="form-control" required>
                            <option>KK Nagar, Chennai</option>
                            <option>Adayar, Chennai</option>
                            <option>Velachery, Chennai</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Speciality</label>
                          <select className="form-control" required>
                            <option>General Medicine</option>
                            <option>General Surgery</option>
                            <option>Cardiologist</option>
                            <option>Neuro Specialist</option>
                            <option>Skin Specialist</option>
                            <option>Diabetologist</option>
                            <option>ENT Specialist</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputCity">City</label>
                          <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                          <label htmlFor="inputState">State</label>
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <label htmlFor="inputZip">Zipcode</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                            placeholder="Zipcode"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="userName">Comments</label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={3}
                              required
                              defaultValue={''}
                            />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" /> I accept the
                              terms and Conditions.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="leftmenuModalfooter w-100">
                  <ul className="list-inline w-100 d-flex m-0">
                    <li>
                      <a>Download Apps:</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-android" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-desktop" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-chrome" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal commonModalright fade modal-right"
          id="commonModalright"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="commonModalright"
          aria-hidden="true"
          data-backdrop="static"
          data-target="#staticBackdrop"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <div className="d-inline-block">
                  <div className="d-flex">
                    <div className="leftmenuProfileicon d-inline-block mr-2">
                      <span className="bg-blue m-0">S</span>
                    </div>
                    <div className="userName d-flex">
                      <span className="m-auto">Sivakumar</span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="userName d-flex">
                      <span className="m-auto">Online</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex ml-auto my-auto">
                  <div className="leftmenuProfileicon d-inline-block mr-2">
                    <span className="bg-blue m-0">+</span>
                  </div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="d-flex justify-content-center">
                  <div className="d-flex py-4 px-0 col-10 ">
                    <form className="w-100" action="/action_page.php">
                      <div className="form-row">
                        <div className="form-group col">
                          <label htmlFor="userName">Name</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <select className="custom-select" id="usertype" aria-label="usertype">
                                <option selected>Dr</option>
                                <option value={1}>St</option>
                                <option value={1}>Mr</option>
                                <option value={2}>Miss</option>
                                <option value={3}>Mrs</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              aria-label="First name"
                              className="form-control"
                              placeholder="User name"
                              id="name"
                            />
                            <input
                              type="text"
                              aria-label="Degree"
                              className="form-control"
                              placeholder="Degree"
                              id="degree"
                            />
                          </div>
                        </div>
                        <div className="form-group d-none">
                          <label htmlFor="userName">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            id="userName"
                            name="userName"
                            required
                          />
                          <div className="valid-feedback">Valid.</div>
                          <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Official Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Official Email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Personal Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Personal Email"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Mobile</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your number"
                            id="mobileNumber"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Alternative number</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your alternative number"
                            id="alternativeNumber"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="dob">Date of birth</label>
                          <div
                            className="input-group date"
                            id="datepicker-only-init"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              className="form-control datetimepicker-input"
                              data-target="#datepicker-only-init"
                            />
                            <div
                              className="input-group-append"
                              data-target="#datepicker-only-init"
                              data-toggle="datetimepicker"
                            >
                              <div className="input-group-text rounded-0">
                                <i className="fa fa-calendar" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="sex">Sex</label>
                          <select className="form-control" required>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                          </select>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="dob">Blood Group</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Blood group"
                            id="bloodGroup"
                            name="bloodGroup"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Location</label>
                          <select className="form-control" required>
                            <option>KK Nagar, Chennai</option>
                            <option>Adayar, Chennai</option>
                            <option>Velachery, Chennai</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Speciality</label>
                          <select className="form-control" required>
                            <option>General Medicine</option>
                            <option>General Surgery</option>
                            <option>Cardiologist</option>
                            <option>Neuro Specialist</option>
                            <option>Skin Specialist</option>
                            <option>Diabetologist</option>
                            <option>ENT Specialist</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputAddress2">Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputCity">City</label>
                          <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                          <label htmlFor="inputState">State</label>
                          <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <label htmlFor="inputZip">Zipcode</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                            placeholder="Zipcode"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label htmlFor="userName">Comments</label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows={3}
                              required
                              defaultValue={''}
                            />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" /> I accept the
                              terms and Conditions.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="leftmenuModalfooter w-100">
                  <ul className="list-inline w-100 d-flex m-0">
                    <li>
                      <a>Download Apps:</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-apple" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-android" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-desktop" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-chrome" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdvancedFormExamples
