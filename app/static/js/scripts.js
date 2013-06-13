$(document).ready(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    defaultView: 'agendaWeek',
    year: 2013,
    month: 5,
    date: 20,
    firstDay: 3,
    minTime: '9:30',
    maxTime: '21:30',
    events: '/js/events.json',
    weekends: true,
    header: {
      left: '',
      center: '',
      right: ''
    },
    title: 'Mlove Calendar',
    height: 400
    // aspectRatio: 2
  });

});