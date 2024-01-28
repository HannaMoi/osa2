const Course = ({ course }) => {
    return (
      <>
        <Header courses={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    );
  };
  
  const Header = ({ courses }) => {
    console.log("coursessa: ", courses);
  
    return <h1>{courses.name}</h1>;
  };
  
  const Content = ({ parts }) => {
  
    return (
      <>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </>
    );
  };
  
  const Part = ({ part }) => {
    console.log("Partissa", part);
  
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };
  
  const Total = ({ parts }) => {
    console.log("totalissa parts", parts);
  
    const sum = parts.reduce((prev, curr) => prev + curr.exercises, 0);
    console.log("summa", sum);
  
    return <p>Total of exercises {sum}</p>;
  };

  export default Course;