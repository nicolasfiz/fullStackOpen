const Header = (header) => {
    return <h1>{header.course}</h1>;
  };
  
  const Part = ({note}) => {
    return (
      <p>
        {note.name} {note.exercises}
      </p>
    );
  };
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(note=> (
          <Part key={note.id} note={note} />
        ))}
      </div>
    );
  };
  const Total = ({parts}) => {
    return (
      <p>
        Number of exercises{" "}
        {parts.map(elm => elm.exercises).reduce(
          (a, b) => a + b
        )}
      </p>
    );
  };

  const course = (params) => {
    return(
      <>
        <Header course={params.course.name}/>
        <Content parts={params.course.parts}/>
        <Total parts={params.course.parts}/>
      </>
    );
  }

  export default course;