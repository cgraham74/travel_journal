A simple journal displaying travel locations that populates from a static file.

Link to the deployed website http://christinagraham.tech/travel/

Future refactoring plans would include: 
    -Replacing the static file with an event source database (would not need full CRUD operations). 
    -Handling undefined and null (in the event a URL was moved/removed) for potential broken links and images.
    -Better option for the alt attribute. Concat the location with "scenery" instead of hardcoding it.

Technical:
The id, image URL, country, location title, google maps link, date, description are exported from a data file as an array of JavaScript objects.

I am use the JavaScript map() method to iterate through the data array and create a new array of Card components. For each item (object) in the data array, the function is creating an instance of the Card component with the item's id as the key and passing in all of the item's properties as props using the spread operator {...}.

    const cards = data.map((item) => {
        return (
        <Card
            key={item.id}
            {...item}
        />
        );
    });

The Card is a reusable React component written in ES6 syntax that takes props as an argument and returns a div container grouping the HTML elements populated with the data passed as props to be displayed. 
For example:
    function Card(props){
        return(
            <p className="date">{props.travelDate}</p>
        );
    }
   

