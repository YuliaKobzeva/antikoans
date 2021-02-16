### Data structure manipulation, destructuring

(Use the data in ds_deep.js for all the exercises)

Do not use field access (x.myfield) or index (x[0]) operators in the following tasks.

Every task must be accompanied by tests.

1. Write a function that given DS_DEEP returns DS_DEEP.things
2. Write a function that given DS_DEEP returns DS_DEEP.things[2]
3. Write a function that given DS_DEEP returns [DS_DEEP.things[2], DS_DEEP.things[0]]
4. Write a function that given DS_DEEP returns DS_DEEP.things[-2] (where -2 denotes the first second to last element - here it will be { a: 3, ...})
5. Write a function that given DS_DEEP returns DS_DEEP.things[1].b without the first element (must return [5,6]) 
6. Write a function that given DS_DEEP and a string of glued keys returns the value under that sequence of keys. E.g. for the string "mouse.cat.dog" should return { kid: { granma: { ... }}}; for "things.1.c.k2" should return 5.
7. Write a function 'flatten' that transforms a datastructure like DS_DEEP into a datastructure like DS_FLAT (see ds_flat.js)
8. Write a function 'flatten_ultra' that transforms a datastructure like DS_DEEP into a datastructure like DS_ULTRA_FLAT (see ds_flat.js)


### Data design

1. Design a JS object representation of tasks akin to Clubhouse tasks


### APIs

Here don't use a database - build the desired data right in the app as JSON objects and operate on them.

1. Using express.js create a test API that provides access to the tasks from Data Design.1 and allows to:
    - get all tasks
    - get a specific task by its id
    - get all tasks that belong to an epic with a particular id
    - get all tasks that are in a particular status
    - get all tasks that are in one of several allowed statuses
    - get tasks filtered simultaneously by status and epic
2. Ensure your API has only two distinct routes (for one task and for many tasks)
