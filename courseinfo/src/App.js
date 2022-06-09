const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  );
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.total}</p>
    </div>
  );
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course);
  let totalExerciseCount = 0;

  return (
    <div>
      <Header name={course.name} />
      {course.parts.map(part => {
        totalExerciseCount += part.exercises;
        console.log(totalExerciseCount);
        return <Content part={part.title} exercises={part.exercises} />
        })
      }
      <Total total={totalExerciseCount} />
    </div>
  )
}

export default App
