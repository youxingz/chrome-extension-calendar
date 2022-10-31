
import { Calendar as AntdCalendar } from 'antd';
import 'antd/lib/calendar/style/css'
import moment from 'moment';
import { useState } from 'react';
import './Calendar.css'
import { isSameDay } from './utils/utils';

const today = moment()

const Cell = ({ date }) => {
  const isToday = isSameDay(today, date)
  return <div className={'cell ' + (isToday ? 'cell-today' : '')}>
    <div className={'cell-header ' + (isToday ? 'cell-header-today' : '')}>
      { date.format('DD') }
    </div>
    <div className={'cell-content ' + (isToday ? 'cell-content-today' : '')}>content</div>
  </div>
}

const Calendar = () => {
  const [ mode, setMode ] = useState('month')
  const [ date, setDate ] = useState(moment())

  const headerRender = ({ value, type, onChange, onTypeChange }) => {
    return <div>haha</div>
  }
  const dateFullCellRender = (date) => {
    return <Cell date={date} />
  }
  return <>
    <AntdCalendar
      className='calendar'
      mode={mode}
      defaultValue={date}
      // headerRender={headerRender}
      dateFullCellRender={dateFullCellRender}
      onSelect={(date) => { 
        if (mode === 'year') {
          setDate(date)
          setMode('month')
        }
      }}
      onPanelChange={(date, mode) => { setMode(mode) }}/>
  </>
}

export {
  Calendar
}
