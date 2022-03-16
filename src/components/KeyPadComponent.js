import React, { Component } from 'react'

class KeyPadComponent extends Component {
  render() {
    return (
      <div id='box'>
        <div className='sayilar'>
          <div id='sayilar1'>
            <button name='CE' className='ortak gri' onClick={(e) => this.props.onClick(e.target.name)}>
              AC
            </button>
            <button name='C' className='ortak gri' onClick={(e) => this.props.onClick(e.target.name)}>
              C
            </button>
            <button value='%' className='ortak gri' onClick={(e) => this.props.onClick(e.target.name)}>
              %
            </button>
            <button name='/' className='ortak turuncu' onClick={(e) => this.props.onClick(e.target.name)}>
              /
            </button>
            <br />
          </div>

          <div id='sayilar2'>
            <button name='7' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              7
            </button>
            <button name='8' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              8
            </button>
            <button name='9' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              9
            </button>
            <button name='*' className='ortak turuncu' onClick={(e) => this.props.onClick(e.target.name)}>
              x
            </button>
            <br />
          </div>

          <div id='sayilar3'>
            <button name='4' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              4
            </button>
            <button name='5' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              5
            </button>
            <button name='6' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              6
            </button>
            <button name='-' className='ortak turuncu' onClick={(e) => this.props.onClick(e.target.name)}>
              -
            </button>
            <br />
          </div>

          <div id='sayilar4'>
            <button name='1' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              1
            </button>
            <button name='2' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              2
            </button>
            <button name='3' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              3
            </button>
            <button name='+' className='ortak turuncu' onClick={(e) => this.props.onClick(e.target.name)}>
              +
            </button>
            <br />
          </div>

          <div id='sayilar5'>
            <button name='0' className='farklı gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              0
            </button>
            <button name='.' className='ortak gri2' onClick={(e) => this.props.onClick(e.target.name)}>
              .
            </button>

            <button name='=' className='ortak turuncu' onClick={(e) => this.props.onClick(e.target.name)}>
              =
            </button>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default KeyPadComponent
