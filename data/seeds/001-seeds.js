exports.seed = function(knex) {
  return knex('project_resources').truncate()
    .then(() => knex('tasks').truncate())
    .then(()=> knex('resources').truncate())
    .then(() => knex('projects').truncate())
    .then(() => {
      return knex('projects').insert([
        {id: 1, name: "Write Novel",description: "Novel will be nonfiction book on Theranos"},
        {id: 2, name: "Make Portfolio",description: "Used for decorating the living room"},
        {id: 3, name: "Redo Backyard Garden",description: "2nd birthday for Jane! Will have family over."}
      ])
    })
    .then(()=> {
      return knex('resources').insert([
        {id: 1, name: "Pen", description: "oak wood or acacia wood"},
        {id: 2, name: "Paper", description: "For directing the schema to build from scratch."},
        {id: 3, name: "Interviewees", description: "an array of colors available"},
        {id: 4, name: "Planner", description: "8 by 16 canvas"},
        {id: 5, name: "Flowers", description: "Pink baloons that have elephants displayed"},
        {id: 6, name: "Lawn Mower", description: "Elephant animal"},
        {id: 7, name: "Mulch", description: "Elephant animal"},
        {id: 8, name: "Gloves", description: "Elephant animal"}
      ])
    })
    .then(()=> {
      return knex('project_resources').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 1, resource_id: 2},
        {project_id: 1, resource_id: 3},
        {project_id: 1, resource_id: 4},
        {project_id: 2, resource_id: 1},
        {project_id: 2, resource_id: 2},
        {project_id: 2, resource_id: 4},
        {project_id: 3, resource_id: 4},
        {project_id: 3, resource_id: 5},
        {project_id: 3, resource_id: 6},
        {project_id: 3, resource_id: 7},
        {project_id: 3, resource_id: 8}
      ])
    })
    .then(()=> {
      return knex('tasks').insert([
        {project_id: 1, description: "Make an outline for chapters", notes: "Keep it under 15 chapters"}, 
        {project_id: 1, description: "Schedule interviews", notes: "First, with the people with tips"},
        {project_id: 2, description: "Decide on how state will be managed", notes: "Leaning to using redux.js"},
        {project_id: 3, description: "Design a plan", notes: "Leaning towards having flower bed around patio"},
        {project_id: 3, description: "Decide what plants to buy", notes: "Would like peonies."}
      ])
    })


};
