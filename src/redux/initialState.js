const initialState = {
    columns: [
      {
        listId: '1',
        id: '1',
        title: 'Books',
        icon: 'book',
      },
      {
        listId:'1'  ,
        id: '2',
        title: 'Movies',
        icon: 'film',
      },
      {
        listId: '2',
        id: '3',
        title: 'Games',
        icon: 'gamepad',
      },
      {
        listId: '2',
        id: '4',
        title: 'Events',
        icon: 'search',
      }
    ],
  
    cards: [
      { id: '1', isFavourite: true, columnId: '1', title: 'This is Going to Hurt' },
      { id: '2', isFavourite: false, columnId: '1', title: 'Interpreter of Maladies' },
      { id: '3', isFavourite: true, columnId: '2', title: 'Harry Potter' },
      { id: '4', isFavourite: false, columnId: '2', title: 'Star Wars' },
      { id: '5', isFavourite: true, columnId: '3', title: 'The Witcher' },
      { id: '6', isFavourite: false, columnId: '3', title: 'Skyrim' }
    ],
    
    lists: [
      {
        id: '1',
        title: 'Things to do...',
        description: 'Interesting things I want to check out'
      },
     {
        id: '2',
        title: 'Test list',
        description: 'Lorem Ipsum'
     }
    ],
    
    searchString : '' ,
    
  
  };
  
  export default initialState;