# Development

### Link to Deployed Website
`https://nihilraccoon000.github.io/development`

### Goal and Value of the Application
This is to help all Project Sekai players check the basic stats for each card, sort/filter the cards, and see the total stats for a team without actually opening the game. 
By now I've only included some of Nene's cards. More to be added later.
### Usability Principles Considered
This page has the most simple layout: A dashboard on the top and the card list on the bottom. 
A few considerations for easier control:
- I chose to make the Team member dashboard horizontal rather than vertical because it would be more familiar (just like the member editing screen) for Project Sekai players.
- The dashboard only holds pictures, because Project Sekai players recognize card pictures better than card names.
- ^ Out of similar concern, I placed the add/remove button close to the pictures.

### Organization of Components
The page has the following components:
- Navi: a nav bar (click on the title to jump back to the top of the page)
- Team: a team dashboard
- ConditionBar: for filtering and sorting conditions
- CardList: a card list consists of several
    - CardItem: card items
### How Data is Passed Down Through Components
- Card list is wrapped in a json list and passed as props through components.
- Team member list is a state variable, passed as props to the Team component.
- Filtering and sorting conditions are also state variables

### How the User Triggers State Changes
- User click on Add/Remove to change team member list.
- User switch among different sorting and filtering strategies, each switching triggers the change of a state variable, which then update the card list (also a state variable) through callback functions.

### Side Notes
One of the filtering condition "skill type" is hidden information known by the players. It is stored in the json list but not shown on the card. Players should be able to infer the skill type of a card from its skill description.