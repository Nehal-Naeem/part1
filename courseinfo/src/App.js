const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      <p> {props.parts[0].name} {props.parts[0].exercises} </p>
      <p> {props.parts[1].name} {props.parts[1].exercises} </p>
      <p> {props.parts[2].name} {props.parts[2].exercises} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.course.parts} />
    </div>
  );
}

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p> 
        Number of exercises {
          props.course.parts[0].exercises + 
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </p>
    </div>
  );
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App
