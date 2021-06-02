import React from 'react';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';


const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

const items = [
    {
        id: 1,
        group: 1,
        title: 'item 1',
        start_time: moment(),
        end_time: moment().add(1, 'week')
    },
    {
        id: 2,
        group: 2,
        title: 'item 2',
        start_time: moment().add(2, 'week'),
        end_time: moment().add(3, 'week')
    },
    {
        id: 3,
        group: 1,
        title: 'item 3',
        start_time: moment().add(1, 'week'),
        end_time: moment().add(2, 'week')
    }
]

function App() {
    return (
        <div className="App">
            <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment().add(-2, 'week')}
                defaultTimeEnd={moment().add(4, 'week')}
                timeSteps={{
                    second: 0,
                    minute: 0,
                    hour: 0,
                    day: 7,
                    month: 1,
                    year: 1,
                }}
            />
        </div>
    );
}

export default App;
