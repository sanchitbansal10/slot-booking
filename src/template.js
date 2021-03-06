let template = {
    template_type: "slot_picker",
    selection_color: "#000000",
    secondary_color: "#808080",
    title: "Available Slots for Dr. Sumit",
    available_slots: [
      {
        date: "Wed, Dec 06",
        date_slots: []
      },
      {
        date: "Thu, Dec 07",
        date_slots: []
      },
      {
        date: "Fri, Dec 08",
        date_slots: []
      },
      {
        date: "Sat, Dec 09",
        date_slots: []
      },
      {
        date: "Today",
        date_slots: [
          {
            hour: "8",
            hour_slots: [
              {
                "08:10 AM": "slotId001"
              },
              {
                "08:50 AM": "slotId005"
              }
            ]
          },
          {
            hour: "3",
            hour_slots: [
              {
                "03:00 PM": "slotId005"
              },
              {
                "03:30 PM": "slotId007"
              }
            ]
          }
        ]
      },
      {
        date: "Tomorrow",
        date_slots: []
      },
      {
        date: "Wed, Dec 13",
        date_slots: [
          {
            hour: "4",
            hour_slots: [
              {
                "04:30 PM": "slotId105"
              },
              {
                "04:50 PM": "slotId106"
              }
            ]
          },
          {
            hour: "5",
            hour_slots: [
              {
                "05:30 PM": "slotId202"
              },
              {
                "05:45 PM": "slotId208"
              }
            ]
          }
        ]
      }
    ]
  };
  
  export default template;
  