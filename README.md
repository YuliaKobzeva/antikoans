### Data structure manipulation, destructuring

(Use the data in ds_deep.js for all the exercises)

Do not use field access (x.myfield) or index (x[0]) operators in the following tasks.

1. Write a function that given DS_DEEP returns DS_DEEP.things
2. Write a function that given DS_DEEP returns DS_DEEP.things[2]
3. Write a function that given DS_DEEP returns [DS_DEEP.things[2], DS_DEEP.things[0]]
4. Write a function that given DS_DEEP returns DS_DEEP.things[-2] (where -2 denotes the first second to last element - here it will be { a: 3, ...})
5. Write a function that given DS_DEEP returns DS_DEEP.things[1].b without the first element (must return [5,6]) 
6. Write a function that given DS_DEEP and a string of glued keys returns the value under that sequence of keys. E.g. for the string "mouse.cat.dog" should return { kid: { granma: { ... }}}; for "things.1.c.k2" should return 5.
7. Write a function 'flatten' that transforms a datastructure like DS_DEEP into a datastructure like DS_FLAT (see ds_flat.js)
8. Write a function 'flatten_ultra' that transforms a datastructure like DS_DEEP into a datastructure like DS_ULTRA_FLAT (see ds_flat.js)
