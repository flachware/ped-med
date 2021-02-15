export default {
  "meds": [
    {
      "name": "Medikament 1",
      "schema": [{
        "name": "1 mal täglich",
        "dosage": function(weight) { return weight / 100 }
      },
      {
        "name": "2 mal täglich",
        "dosage": function(weight) { return weight / 100 / 2 }
      },
      {
        "name": "3 mal täglich",
        "dosage": function(weight) { return weight / 100 / 3 }
      }]
    },
    {
      "name": "Medikament 2",
      "schema": [{
        "name": "1 mal täglich",
        "dosage": function(weight) { return weight / 10 }
      },
      {
        "name": "2 mal täglich",
        "dosage": function(weight) { return weight / 10 / 2 }
      },
      {
        "name": "3 mal täglich",
        "dosage": function(weight) { return weight / 10 / 3 }
      }]
    },
    {
      "name": "Medikament 3",
      "schema": [{
        "name": "1 mal täglich",
        "dosage": function(weight) { return weight / 1 }
      },
      {
        "name": "2 mal täglich",
        "dosage": function(weight) { return weight / 1 / 2 }
      },
      {
        "name": "3 mal täglich",
        "dosage": function(weight) { return weight / 1 / 3 }
      }]
    },
  ]
}